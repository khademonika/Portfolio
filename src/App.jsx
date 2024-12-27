import React from 'react'
import Header from './component/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './Contact'

export default function App() {
  return (
    <div >
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}
