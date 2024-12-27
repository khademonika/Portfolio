import React from 'react'

export default function Home() {
  return (
    <div className='flex mb-44'>
        <div className=' mt-64 ml-60  '>
            <p className='text-6xl font-semibold text-white'>Hi, I am <span className='text-green-900 font-bold'>Monika</span></p>
            <p className='text-6xl font-semibold text-white'> I am <span className=''>Frontend Developer</span></p>

            <p className='text-xl text-white font-semibold mt-5 text-left mx-auto '> I am a passionate second-year student currently in my third semester.
                    Alongside my academic pursuits, I enjoy exploring the worlds of reading and writing novels,
                    where creativity and storytelling come to life. My love for sports keeps me active and teaches
                    me the value of teamwork and discipline. I am always eager to learn, grow, and balance intellectual
                    curiosity with physical vigor. Let's connect and build something amazing together!</p>
        </div>
        <img src="https://th.bing.com/th/id/OIP.NqGp_d4TDljCRkc3syfnPwHaEJ?w=296&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='rounded-full mt-40 mx-10 ml-24' alt="" />
    </div>
  )
}
