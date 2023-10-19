
import './globals.css'

import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/About"
import Mbnav from "../components/Mbnav"
import Reserve from "../components/Reserve"
import Menu from "../components/Menu"
import Footer from "../components/Footer"

import Gallery from "../components/Gallery"


export default function Home() {
  
  return (
    <main>

  <div className='mobnav'> <Navbar />  </div>
    <div className='dskt'><Mbnav/></div>
      <Hero/>
  
       <About/>
       <Menu/>
      <Reserve/>
    <Gallery/>
    <Footer/>
     
    </main>
  )
}
