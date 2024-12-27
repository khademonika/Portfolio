import React from 'react'
import Menus from './Menus'

export default function Header() {
  return (
   <div className='sm:fixed '>
     <div className='px-5 py-3 flex  justify-between'>
        <p className='md:text-4xl text-2xl font-bold text-white '>Monika <span className='text-green-900'>Khade</span></p>
       <div className=''>
       {/* <Menus/> */}
       </div>
    </div>
   </div>
  )
}
