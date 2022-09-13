// import { Interface } from "readline";

export interface Isocketcontext {
    answerCall: () => void
    callUser: (id:any) => void
    leaveCall?: () => void | undefined
    myVideo: any,
    callAccepted:any,
    userVideo:any
    stream:any
    setname:any
    callEnded:any
    Me:any
    Call: any
    name: any | undefined

}