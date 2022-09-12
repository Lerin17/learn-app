import React from 'react'
import { Nav } from './Nav'
import mesh1 from '../images/mesh-gradient-1.png'

import Image from 'next/image'

export const Layout = (prop:any) => {


  return (
    <div style={{
      // backgroundColor: "rgb(190, 242, 100)",
      // backgroundImage: "radial-gradient(at 77% 92%, rgb(34, 197, 94) 0, transparent 58%), radial-gradient(at 12% 12%, rgb(22, 101, 52) 0, transparent 71%), radial-gradient(at 36% 8%, rgb(22, 78, 99) 0, transparent 55%), radial-gradient(at 60% 68%, rgb(196, 181, 253) 0, transparent 93%), radial-gradient(at 67% 36%, rgb(132, 204, 22) 0, transparent 8%), radial-gradient(at 34% 34%, rgb(196, 181, 253) 0, transparent 50%)"
    
    }}
     className='h-screen bg-black' > 
        <div className='p-2 lg:p-4 md:p-4 h-full' >

          <div className='flex  flex-col h-full' >
            <div className='pb-4' >
              <Nav/>
            </div>

            <div className='h-full' >
              {prop.children} 
            </div>
          </div>

        </div>
      
    </div>
  )
}
