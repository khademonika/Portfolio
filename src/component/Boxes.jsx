import React from 'react'

export default function Boxes({tag,text,skills}) {
  return (
    <div className='text-white border shadow px-14 py-9 w-fit rounded-lg'>
        <div>
        <span className='text-3xl'>{tag}</span>
        <p className='font-bold'>{text}</p>
        <p>{skills}</p>
        </div>
    </div>
  )
}
