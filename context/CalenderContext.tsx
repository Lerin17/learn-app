import { it } from "node:test";
import React from "react";
import { Icalendarcontext, Idateinfo } from "../types/context/calendarcontext";

const CalendarContext = React.createContext<Icalendarcontext | null>(null)

function CalendarContextProvider(props:any) {
    const [DateInfo, setDateInfo] = React.useState<Idateinfo>({
        Day: '', Month: '', Year: '', Date: ''
    });

    const [TommorowDateInfo, setTommorowDateInfo] = React.useState<Idateinfo | any>();

    const [TodayDateInfo, setTodayDateInfo] = React.useState<Idateinfo >();
    
    const [isDateTerminal, setisDateTerminal] = React.useState<boolean>(false);

    const [SelectedDateInfoList, setSelectedDateInfoList] = React.useState([]);
    // console.log(Date())

    const DaysoftheWeek = [
        'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday',
        'Saturday'
    ]

    const MonthsoftheYear = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]


    React.useEffect(() => {
        let currentDateInfoArray = Date().split(' ')
        
        const todayDay:String | any = DaysoftheWeek.find(item => item.substring(0, 3) == currentDateInfoArray[0])

        const todayMonth:String | any =  MonthsoftheYear.find(item => item.substring(0, 3) == currentDateInfoArray[1])

        const todayDate = 
        Number(currentDateInfoArray[2])
        
        const todayYear = 
        Number(currentDateInfoArray[3])
        

        // const tommorowDateIndex = DaysoftheWeek.indexOf(todayDay) + 1

        const tomorrowDay = DaysoftheWeek.find((item, i) => i == DaysoftheWeek.indexOf(todayDay) + 1)

        const tomorrowDate = Number(todayDate) + 1
        const tommorowYear = todayYear

        const today = new Date()
        const tomorrow = new Date(today)

        tomorrow.setDate(tomorrow.getDate() + 1)

        // console.log(tomorrow)

        const gettomorrowDay = DaysoftheWeek.find((item,i)=> i == tomorrow.getDay())

        const gettomorrowYear = tomorrow.getFullYear()

        const gettomorrowMonth = MonthsoftheYear.find((item,i)=> i == tomorrow.getMonth())

        const gettomorrowDate = tomorrow.getDate()

        // console.log(gettomorrowDay)
 
        


        setTodayDateInfo({
            Day: todayDay,
            Month: todayMonth,
            Year: String(todayYear) ,
            Date: String(todayDate) 
        })

        setTommorowDateInfo({
            Day: gettomorrowDay,
            Month: gettomorrowMonth,
            Year: gettomorrowYear,
            Date: gettomorrowDate
        })
         
    }, []);

//    console.log(DateInfo)
    const toggleisDateTerminal = () => {
        setisDateTerminal(prev => !prev)
    }

    const getDateInfo = (e:any) => {
        let dayinfo = e.getDay()
        let yearinfo = e.getYear()
        let monthinfo = e.getMonth()
        let dateinfo = e.getDate()
        // console.log(Date())

     
        console.log(e.getDate())

        const getselectedDay = DaysoftheWeek.find((item, i) => i == dayinfo)

        const getselectedYear = yearinfo + 1900

        const getselectedMonth = MonthsoftheYear.find((item,i)=> i == monthinfo )
        // let dateinfoArray = dateinfo.split(' ')

        setDateInfo({
            Day: String( getselectedDay),
            Month: String(getselectedMonth),
            Year: String(getselectedYear) ,
            Date: String(dateinfo)
        })

        toggleisDateTerminal()
    }

 

    return (
        <CalendarContext.Provider value={{DateInfo, getDateInfo, TommorowDateInfo, isDateTerminal, toggleisDateTerminal}}>
            {props.children}
        </CalendarContext.Provider>
    )
}

export {CalendarContext, CalendarContextProvider}