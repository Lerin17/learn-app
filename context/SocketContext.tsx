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
  let peerConnection:any

  const [peer, setpeer] = React.useState<any>();

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

    console.log(Me)

    // socket.on('calluser', async (data) => {
        
    //   peerConnection.setRemoteDescription(new RTCSessionDescription(data.signal))

    //   const answer = await peerConnection.createAnswer();
    //   socket.emit('answercall', {answer})
    //   })




    socket.on('callUser', ({from, name: callerName,  signal}) => {
      console.log('cow')
      setCall({isReceivedCall: true, from, name: callerName, signal})
    })

    socket.on('callAccepted', async (answer)=>{
      console.log(answer, 'answer')
      console.log('Gex')

      console.log(peerConnection)
      console.log(peer, 'peerx')

      peer.setRemoteDescription(new RTCSessionDescription(answer.sdp))

      setcallAccepted(true)
    })
  }, []);

  React.useEffect(() => {

    if(stream){
      console.log(stream.getTracks())
    }
  }, [stream]);

 const leaveCall = () => {
  console.log('leave call')
 }

 

 
//  console.log(Call)
//  console.log(Me)
//  console.log(callAccepted, 'callAccepted')

console.log(peer, 'peer')


  const  callUser = async (id:any) => {
    const configuration = {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]}

    peerConnection = new RTCPeerConnection(configuration);
    console.log(peerConnection, 'daxdd')

    setpeer(peerConnection)

   const offer = await peerConnection.createOffer()
    await peerConnection.setLocalDescription(offer);

      socket.emit('callUser', {
        userToCall: id, signalData: offer, from: Me, name
      })


      stream.getTracks().forEach((track:any) => peerConnection.addTrack(track, stream));

      // peerConnection.addTrack(stream)

      peerConnection.ontrack = (e:any) => {
        userVideo.current.srcObject = e.streams[0]
      }


  //   peerConnection.createOffer((sessionDescription:any) => {
  //     peerConnection.setLocalDescription(sessionDescription);
  //     // sendCall({
  //     //     name: userName,
  //     //     rtcMessage: sessionDescription
  //     // })
  // }, (error) => {
  //     console.log("Error");
  // });
    // if(peerConnection){
    //   socket.emit('callUser', {
    //     userToCall: id, signalData: data, from: Me, name
    //   })
    }

    console.log('reload')

    const answerCall = async () => {
      const configuration = {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]}
      
      peerConnection = new RTCPeerConnection(configuration);

      // setpeer(new RTCPeerConnection(configuration))

      // console.log(peerConnection, 'dax')
       
        
       peerConnection.setRemoteDescription(new RTCSessionDescription(Call.signal))

      const answer = await peerConnection.createAnswer();
      socket.emit('answerCall', {to:Call.from ,answer})
   

      stream.getTracks().forEach((track:any) => peerConnection.addTrack(track, stream));

      // peerConnection.addTrack(stream)

      peerConnection.ontrack = (e:any) => {
        userVideo.current.srcObject = e.streams[0]
      }

      // peerConnection.ontrack = (e) => {
          
      // }
      

      // peerConnection.addEventListener('connectionstatechange', () => {
        
      // })
    }

  //   function processCall(userName) {
  //     peerConnection.createOffer((sessionDescription:any) => {
  //         peerConnection.setLocalDescription(sessionDescription);
  //         sendCall({
  //             name: userName,
  //             rtcMessage: sessionDescription
  //         })
  //     }, (error) => {
  //         console.log("Error");
  //     });
  // }
    

    // peerConnection.addStream(localStream);


    // signalingChannel.addEventListener('message', async message => {
    //     if (message.answer) {
    //         const remoteDesc = new RTCSessionDescription(message.answer);
    //         await peerConnection.setRemoteDescription(remoteDesc);
    //     }
    // });
    // const offer = await peerConnection.createOffer();
    // await peerConnection.setLocalDescription(offer);
    // signalingChannel.send({'offer': offer});

  // }

  // const answerCall = () => {
  //   setcallAccepted(true)

  //   const peer = new Peer({initiator: false, trickle: false, stream})

  // // console.log( RTCStatsReport) 

  // // peer.getStats()
  //   // console.log(peer.streams, 'ee')
  //   // console.log(new RTCPeerConnection())
  


  //   peer.on('signal', (data) => {
  //     socket.emit('answercall', {signal: data, to: Call.from})
  //   })

  //   peer.on('stream', (currentStream) => {
  //     userVideo.current.srcObject = currentStream
  //   })

    

  //   // peer._debug()
  //   // RTCPeerConnection

  //   console.log()
  //   peer.signal(Call.signal)

  //   connectionRef.current = peer
    

  // }

  // const callUser = (id:any) => {
  //   const peer = new Peer({initiator: true, trickle: false, stream})

    
  // //  const statsInterval = setInterval(peer.debug , 1000)

  //   peer.on('signal', (data) => {
  //     socket.emit('calluser', {userToCall: id, signalData: data, from: Me, name})
  //   })

  //   peer.on('stream', (currentStream) => {
  //     userVideo.current.srcObject = currentStream
  //   }) 

  //   socket.on('callaccepted', (signal) => {
  //     setcallAccepted(true)

  //     peer.signal(signal)
  //   })

  //   connectionRef.current = peer;
  // }

  // const leaveCall = () => {
  //   setcallEnded(true)

  //   connectionRef.current.destroy()

  //   window.location.reload( )
  // }

  return (
    <SocketContext.Provider value={{leaveCall, answerCall, callUser, myVideo, name,callAccepted, userVideo, stream, setname, callEnded, Me, Call}} >
        {props.children}
    </SocketContext.Provider>
  )
}

export {SocketContext, SocketContextProvider}