import React from 'react'
import io from 'socket.io-client'
import Peer from 'simple-peer'
import { setRequestMeta } from 'next/dist/server/request-meta'

const SocketContext = React.createContext <Isocketcontext | null > (null)

import { Isocketcontext } from '../types/context/socketcontext'




const socket = io('http://localhost:3022')

 const SocketContextProvider = (props:any) => {

  const [stream, setstream] = React.useState<any>(null);
  const [Me, setMe] = React.useState('');
  const [Call, setCall] = React.useState<any>({isReceivedCall: false});
  const [callAccepted, setcallAccepted] = React.useState<boolean>(false);
  const [callEnded, setcallEnded] = React.useState<boolean>(false);
  const [name, setname] = React.useState('');

  const myVideo = React.useRef<any>()
  const userVideo = React.useRef<any>()
  const connectionRef = React.useRef<any>()

  React.useEffect(() => {
    const callx = () => {
      setTimeout(() => {
        navigator.mediaDevices.getUserMedia({video: true, audio: {'echoCancellation': true}}).then((currentStream) => {
          setstream(currentStream)
    
          if(myVideo.current){
            myVideo.current.srcObject = currentStream
          }
          
        })
    
      }, 30);
    }

    setTimeout(() => {
      callx()
    }, 30);
    
  
    socket.on('me', (id) => setMe(id))

    socket.on('calluser', ({from, name: callerName,  signal}) => {
      setCall({isReceivedCall: true, from, name: callerName, signal})
    })
  }, []);

  const answerCall = () => {
    setcallAccepted(true)

    const peer = new Peer({initiator: false, trickle: false, stream})

  // console.log( RTCStatsReport) 

  // peer.getStats()
    // console.log(peer.streams, 'ee')
    // console.log(new RTCPeerConnection())
  


    peer.on('signal', (data) => {
      socket.emit('answercall', {signal: data, to: Call.from})
    })

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream
    })

    

    // peer._debug()
    // RTCPeerConnection

    console.log()
    peer.signal(Call.signal)

    connectionRef.current = peer
    

  }

  const callUser = (id:any) => {
    const peer = new Peer({initiator: true, trickle: false, stream})

    
  //  const statsInterval = setInterval(peer.debug , 1000)

    peer.on('signal', (data) => {
      socket.emit('calluser', {userToCall: id, signalData: data, from: Me, name})
    })

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream
    }) 

    socket.on('callaccepted', (signal) => {
      setcallAccepted(true)

      peer.signal(signal)
    })

    connectionRef.current = peer;
  }

  const leaveCall = () => {
    setcallEnded(true)

    connectionRef.current.destroy()

    window.location.reload( )
  }

  return (
    <SocketContext.Provider value={{leaveCall, answerCall, callUser, myVideo, name,callAccepted, userVideo, stream, setname, callEnded, Me, Call}} >
        {props.children}
    </SocketContext.Provider>
  )
}

export {SocketContext, SocketContextProvider}