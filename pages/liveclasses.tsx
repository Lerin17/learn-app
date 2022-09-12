import React from 'react'

import VideoPlayer from '../components/liveClasses/VideoPlayer'
import VideoOptions from '../components/liveClasses/VideoOptions'
// import Options from '../components/liveClasses/Options'

 const liveclasses = () => {
  return (
    <div className='text-white' >
      liveclasses

      <div>
        <VideoPlayer/>
        <VideoOptions/>
      </div>
    </div>
  )
}

export default liveclasses