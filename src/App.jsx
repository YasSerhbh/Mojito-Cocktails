import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main className='min-h-[200vh]'>
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
    </main>    
  )
}

export default App