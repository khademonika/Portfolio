import React from 'react'
import ForPRojects from '../component/ForPRojects'
export default function Projects() {
  return (
    <div className='sm:grid md:grid-cols-4 grid-cols-2  my-10 justify-between'>
  
  <ForPRojects bg="Foodbg" language='React js' name="Food Website" link="https://food-websitemk.netlify.app"/>
  <ForPRojects bg="Linkdeinbg" language='Built with HTML, CSS' name="Linkedin Clone" link=" https://prismatic-snickerdoodle-14a06f.netlify.app/"/>
  <ForPRojects bg="Youtube Clone" language='Built with HTML, CSS' name="Youtube Clone" link="https://youtubmk.netlify.app/"/>
  <ForPRojects bg="ATMbg" language='Built with HTML, CSS & JS' name="ATM" link="https://prismatic-snickerdoodle-14a06f.netlify.app/"/>
    </div>
  )
}
