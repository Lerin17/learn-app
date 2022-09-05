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


const Home: NextPage = (props:any) => {

  const gradient = new Gradient()

  // // Call `initGradient` with the selector to your canvas
  // gradient.initGradient('#gradient-canvas')
  // console.log(props.content)

  return (
    <div  className='text-white px-4 lg:px-48  h-full' >
      <div className='flex flex-col h-full' >

        <div className='flex flex-col h-1/2' >
          <div className='lg:hidden md:hidden block' >
              ddd
          </div>

          <div className=' w-full  rounded flex  justify-between  lg:p-2 md:p-2 justify-center' >
            <div className='lg:mr-10 md:mr-10 w-full flex flex-start ' >  
              <CalendarCom/>

              <div className='hidden lg:block w-1/2 border ml-6' >
                Details about date
              </div>
            </div>
           

            <div className='hidden md:block lg:block border-r border-b rounded w-2/4 lg:w-3/4 flex flex-col lg:flex lg:flex-row' >
                  <div style={{
                    wordBreak: 'break-all'
                  }} className='w-28  text-gray-300 flex flex-start font-header1 lg:text-7xl md:text-5xl' >
                      Sunday
                  </div>

                  <div className='w-full lg:mx-1' >
                    <div className='flex flex-col items-center justify-center' >
                      <div className='my-2 shadow ' >
                          Roots
                        </div>

                        <div className='my-2 shadow text-transparent hidden lg:block' >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti autem ut 
                        </div>

                        <div className='my-2 shadow text-transparent' >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti autem ut nisi earum quae alias voluptatem enim. Repellat 
                        </div>
                    </div>
                    
                   </div>
            {/* <canvas id="gradient-canvas" data-transition-in /> */}
            </div>
          </div>
        </div>

        <div className='flex lg:h-1/2 md:h-1/2 my-2' >
          <div className=' w-full rounded shadow mr-2' >
            Notifications
          </div>

          <div className=' w-full rounded shadow' >
            Notifications
          </div>
        </div>
       
      </div>
    </div>

  )
}


export default Home
