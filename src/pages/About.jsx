import React from 'react'
import Boxes from '../component/Boxes'
import { FaCode } from 'react-icons/fa'

export default function About() {
  return (
    <div>
        <Boxes text="Languages" skills="HTML, CSS, Javascript" tag={<FaCode />}/>
    </div>
  )
}
