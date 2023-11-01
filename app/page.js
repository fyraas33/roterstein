

import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/About"
import Mbnav from "../components/Mbnav"
import Reserve from "../components/Reserve"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import "../assest/css/navbar.css"
import Gallery from "../components/Gallery"

import Cookiesbn from "../components/Cookiesbn"

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
    <Cookiesbn/>
    <Footer/>
     
    </main>
  )
}
