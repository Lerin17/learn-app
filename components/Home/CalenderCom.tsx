import React from 'react'
import Calendar from 'react-calendar';
import { CalendarContext } from '../../context/CalenderContext';
import { Icalendarcontext } from '../../types/context/calendarcontext';

// import './Calender.css'
// import './Calendar.css';

 const CalendarCom = () => {
    const {getDateInfo} = React.useContext(CalendarContext) as Icalendarcontext
    const [value, onChange] = React.useState(new Date());

  return (
    <div>
        <div  >
            <Calendar onClickDay={(e)=>{getDateInfo(e)}}   tileClassName={'bg-red-400 border'} className={`text-gray-300 text-lg lg:rounded-l-none border-y-2  border-lime-400 rounded mx-auto  font-header3`} onChange={onChange} value={value} />
        </div>
    </div>
  )
}

export  {CalendarCom}
