import React from 'react'

export default function Boxes({tag,text,skills}) {
  return (
    <div className=' cursor-pointer hover:bg-[#111011] hover:translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] text-white mx-12 my-10 border shadow pl-10 pr-28 py-9 w-fit rounded-lg'>
        <div>
        <span className='text-6xl '>{tag}</span>
        <p className='font-semibold my-4'>{text}</p>
        <p className='text-sm font-thin text-slate-500'>{skills}</p>
        </div>
    </div>
  )
}
