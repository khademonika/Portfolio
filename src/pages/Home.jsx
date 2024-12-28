import React from 'react'
import profile from '../assets/ProfilePhoto.jpeg'
export default function Home() {
  return (
    <div className='sm:flex  sm:mb-44'>
       <div className='rounded-full'>
       <img src={profile} className='sm:rounded-full ml-36 rounded-2xl w-44 h-44 sm:w-96 sm:h-96 sm:mt-40 sm:mx-10 sm:ml-24 mx-11 mt-16' alt="" />

       </div>
        <div className='sm:mt-64 sm:ml-60 mt-10 mx-5  '>
            <p className='sm:text-6xl text-3xl font-semibold text-white'>Hi, I am <span className='text-green-900 font-bold'>Monika</span></p>
            <p className='sm:text-6xl text-3xl font-semibold text-white'> I am <span className=''>Frontend Developer</span></p>

            <p className='sm:text-xl text-sm text-white font-light mt-5 text-left mx-auto '> I am a passionate second-year student currently in my third semester.
                    Alongside my academic pursuits, I enjoy exploring the worlds of reading and writing novels,
                    where creativity and storytelling come to life. My love for sports keeps me active and teaches
                    me the value of teamwork and discipline. I am always eager to learn, grow, and balance intellectual
                    curiosity with physical vigor. Let's connect and build something amazing together!</p>
        </div>
    </div>
  )
}
