import React from 'react'
import { Button, TextField } from '@mui/material'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import { SocketContext } from '../../context/SocketContext'
import { Isocketcontext } from '../../types/context/socketcontext'
import VideoNotifications from './VideoNotifications'

const VideoOptions = () => {
  const {Me, callAccepted, name, setname, callEnded, leaveCall, callUser} = React.useContext(SocketContext) as Isocketcontext

  const [idToCall, setidToCall] = React.useState('');

  return (
    <div className='bg-white w-1/2'>Options

      <TextField variant='outlined' size='small' label='Name' value={name} onChange= {(e) => setname(e.target.value)} />
      <CopyToClipboard text={Me}>
        <Button>
          copy your ID
        </Button>
      </CopyToClipboard>

      <TextField variant='outlined' size='small' label='ID to Call' value={idToCall} onChange= {(e) => setidToCall(e.target.value)} />
      <CopyToClipboard text={Me}>
        {callAccepted && !callEnded ? (
            <Button onClick={()=>leaveCall()} >
            Hang up
          </Button>
        ): (
          <Button onClick={()=>callUser(idToCall)} >
            Call
        </Button>
        )}
      </CopyToClipboard>
      <VideoNotifications/>
    </div>
  )
}

export default VideoOptions