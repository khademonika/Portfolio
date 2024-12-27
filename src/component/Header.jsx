import React from 'react'
import Menus from './Menus'

export default function Header() {
  return (
    <div className='px-5 py-3 flex justify-between '>
        <p className='text-4xl font-bold text-white '>Monika <span className='text-green-900'>Khade</span></p>
        <Menus/>
    </div>
  )
}
