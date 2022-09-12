import React from "react";
import { CalendarContext } from "../../context/CalenderContext";

// import '../../styles/globals.css'

import { Icalendarcontext } from "../../types/context/calendarcontext";

import fabricTexture from '../../images/fabricTexture.png'

 const CalenderInt = () => {

    const {TommorowDateInfo} = React.useContext(CalendarContext) as Icalendarcontext

  return ( 
    <div 
    style={{
      
    }}
    className="
    next
    bg-zinc-300 
      text-gray-600 border-l-2 pl-1 rounded-r-lg border-lime-500 border-dashed  text-extralight font-header5 text-3xl h-full " >
        <div>
            <div className="text-center text-xl" >Tomorrow</div>
            <div className="text-center text-xl bg-green-500 px-1">
              {TommorowDateInfo && <div>
                {TommorowDateInfo.Day} {TommorowDateInfo.Date} {
                TommorowDateInfo.Year
                 }
                </div>}
          
            </div>
            <div className="bg-green-600  text-center h-full"  >
                Crow
            </div>
            <div className="bg-green-700  text-center h-full"  >
                Will
            </div>
        </div>
    </div>
  ) 
}

export default CalenderInt
