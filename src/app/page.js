import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Practice from './components/Practice'
import Project from './components/Project'
import Service from './components/Service'
import Software from './components/Software'

const page = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Service/>
    <Software/>
    <Footer/>
    <Project/>
    <About/>
    <Contact/>
    <Practice/>
    
    
    </>
  )
}

export default page