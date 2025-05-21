import React, { useEffect } from 'react'
import Hero from './components/hero/Hero';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Skills from './components/skills/Skills';
import Experince from './components/exeperiance/Experince';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
export default function App() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
    });
  },[]);
  return (
   <main className='bg-[#0d182e]'>
    <Hero/>
    <Skills/>
    <Experince/>
    <Projects/>
    <Contact/>
    <Footer/>
   </main>
  )
}
