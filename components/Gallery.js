import React from 'react'
import men3 from "../assest/img/shape22.png"
import men4 from "../assest/img/shape23.png"
import Image from 'next/image'
import Swwpr from "./Swwpr"
import Slider from "./Slider"





function Gallery() {
  return (
    <div>
       <section className="section features text-center" aria-label="features" id='gallery'>
  <div className="container">
    <p className="section-subtitle ownr">RESTAURANT</p>
    <h2 className="headline-1 section-title">Roter Stein</h2>
    <ul className="grid-list">
     
     
      <li className="feature-item">
       <div className='swpr'><Swwpr  /></div>
   <div className='sldr'><Slider/></div>
      </li>
    </ul>
    <Image
      src={men3}
      width={208}
      height={178}
      loading="lazy"
      alt="shape"
      className="shape shape-1"
    />
    <Image
      src={men4}
      width={200}
      height={115}
      loading="lazy"
      alt="shape"
      className="shape shape-2"
    />
  </div>
</section>

    </div>
  )
}

export default Gallery