import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from  'axios'
import React from 'react'
import { Character } from '../types/character'
import Link from 'next/link'
import {Gradient} from '../components/gradient'
// import  from '../images/teacher.png'

import { CalendarCom } from '../components/Home/CalenderCom'
import CalenderInt from '../components/Home/CalenderNextday'
import CalendarDateTerminal from '../components/Home/CalendarTerminal'


const Home: NextPage = (props:any) => {

  const gradient = new Gradient()

  // // Call `initGradient` with the selector to your canvas
  // gradient.initGradient('#gradient-canvas')
  // console.log(props.content)

  return (
    <div  className='text-white px-4 xl:px-48 lg:px-32  h-full' >
      <div className=' h-full' >

        <div className='flex  h-full' >
          {/* <div className='lg:hidden md:hidden block' >
              ddd
          </div> */}

          <div className='hidden md:block lg:block border-r-2 border-b-2 rounded border-lime-400 lg:mr-10 md:mr-10 w-3/4 ' >
            <div className='flex  ' >
               <div style={{
                    wordBreak: 'break-all'
                  }} className='w-28  text-gray-300 flex flex-start font-header2 text-center  h-fit  text-5xl' >
                      Sunday
                  </div>

                  <div className=' h-fit font-header3 text-gray-300 md:text-4xl  border-l-none flex  md:flex md:flex-col md:mt-2' >
                   
                    <div className=' font-extrabold capitalize' >June</div>
                    <div className=' w-fit ' >12</div>
                  </div>

            </div>
                

              
            {/* <canvas id="gradient-canvas" data-transition-in /> */}
            </div>

        {/*second side of the flex containing calender and create new*/}
          <div className=' w-full  flex flex-col rounded   justify-between   lg:p-2 md:p-2 justify-center ' >

            <div className=' w-full flex lg:justify-start md:justify-center justify-center' >  
                <div className='hidden lg:block w-1/2 border-2 rounded-l border-lime-500 border-r-0 ' >
                  <CalenderInt/>
                </div>
              <CalendarCom/>
            </div>
           
             <div style={{
              // width: '350px'
             }} className='h-1/2 rounded  border-l-2 border-b-2 border-lime-400 ' >
                <CalendarDateTerminal/>
           </div>

            
          </div>
        </div>

       
      </div>
    </div>

  )
}


export default Home
