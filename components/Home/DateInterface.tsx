import { Button } from '@mui/material'
import React from 'react'
import { CalendarContext } from '../../context/CalenderContext'
import { Icalendarcontext } from '../../types/context/calendarcontext'




export const DateInterface = () => {
   
    const {DateInfo} = React.useContext(CalendarContext) as Icalendarcontext

    console.log(DateInfo.Day, 'noyjing')

  return (
    <div>
        <div className='flex flex-col p-2 lg:px-4 xl:px-8' >
            <div className='flex justify-between' >Date Int

            <div className='flex flex-col' >
                <div className='font-header2 text-3xl text-gray-300' >
                        {DateInfo.Month.substring(0, 3)}
                      <span className='font-header5 pl-1 font-bold' >
                        {DateInfo.Date}
                      </span>
                     
                </div>
                
                <div className='text-xs' >
                    <span className='text-2xl font-header4 pr-1' >
                        3
                    </span>
                    days from Now
                </div>
            </div>
            </div>
            <Button 
            variant='text'
            className='text-white font-header1 hover:bg-amber-700' >
                Create Class for {DateInfo.Day.substring(0, 4)} {DateInfo.Month} {DateInfo.Date}
            </Button>
        </div>
    </div>
  )
}
