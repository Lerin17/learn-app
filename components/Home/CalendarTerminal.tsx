import React from 'react'

import { CalendarContext } from '../../context/CalenderContext'
import { Icalendarcontext } from '../../types/context/calendarcontext'
import { CreateNew } from './CreateNew'
import { DateInterface } from './DateInterface'

const CalendarDateTerminal = () => {
  const {isDateTerminal} = React.useContext(CalendarContext) as Icalendarcontext

  return (
    <div className='relative h-72' >
      <div className='block relative z-10 bg-yellow-500 h-full' >
         <CreateNew/>
      </div>
      

      <div className={`${isDateTerminal?'block animate-slideDown':'hidden'} bg-amber-800 w-full h-full mt-2 ml-2 absolute z-20 top-0 eggshell`}  >
          <DateInterface/>
      </div> 

      {/* <div className='' >
        Fsx
      </div> */}
    </div>
  )
}

export default CalendarDateTerminal
