import React from 'react'
import Boxes from '../component/Boxes'

import { IoCodeSlash } from 'react-icons/io5'
import { SiSemanticscholar } from 'react-icons/si'
import { GoProjectSymlink } from 'react-icons/go'

export default function About() {
  return (
    <div className=' sm:ml-3 mr-5 mt-10  '>
      {/* <h1 className='text-4xl text-white my-10 justify-center flex  '>About Me</h1> */}
       <div className='grid md:grid-cols-3 grid-cols-1 sm:ml-20 ml-1 '>

       <Boxes text="Languages" skills="HTML, CSS, Javascript" tag={<IoCodeSlash />}/>
        <Boxes text="Education" skills="B.tech in Data Science" tag={<SiSemanticscholar />}/>
        <Boxes text="Projects" skills="Built more than 5 projects" tag={<GoProjectSymlink />}/>
    
       </div>
    
    </div>
  )
}
