import React from 'react'
import axios from 'axios'


import { useRouter } from 'next/router'
import Image from 'next/image'


 const Characters = (props:any) => {
  const router = useRouter()

  // console.log(props.characterInfo)


  return (
    <div>
        <div>
          ddd
        </div>
    </div>
    
  )
}

// export const getServerSideProps = async (context:any) => {
// // console.log(context)

// const res = await axios.get(`https://rickandmortyapi.com/api/character/${context.params.id}`)


// return {
//   props: {
//     characterInfo: res.data
//   }
// }
// }




export default Characters
