import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
const App = () => {
  return (
    <>
      <Navbar />
     <section id="home" className="min-h-screen">
        <Hero />
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>

      <section id="skills" className="min-h-screen">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </>
  )
}

export default App
