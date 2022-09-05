import React from 'react'
import Calendar from 'react-calendar';
// import './Calender.css'
// import './Calendar.css';

 const CalendarCom = () => {
    const [value, onChange] = React.useState(new Date());

  return (
    <div>
        <div  >
            <Calendar   tileClassName={'bg-red-400 border'} className={`text-white  border-y  border-white rounded mx-auto  font-header1`} onChange={onChange} value={value} />
        </div>
    </div>
  )
}

export  {CalendarCom}
