import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main className='min-h-[200vh]'>
        <Navbar />
        <Hero />
        <Cocktails />
    </main>    
  )
}

export default App