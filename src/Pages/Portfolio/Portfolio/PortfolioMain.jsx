import React from 'react'
import '../Portfolio/PortfolioMain.css'
import Marquee from 'react-fast-marquee'
import sec3img1 from '../Portfolio/sec3images/up-arrow.png'
import sec3img from '../Portfolio/sec3images/next.png'
import { PortFolioContent } from './PortFolioContent'
import { Portfoliofooter } from './Portfoliofooter'

export const PortfolioMain = () => {



  return (
    <>
    <div className='sec3-portfolio-main'>
    <div className='section3-portfolio sec3-port-side1'>
      <Marquee speed={40} direction='right'>  

        <div className='sec3-announce  sec3-announcement1'>
          
       <div className='sec3-animation-content'> <img className='sec3-arrow-icon' src={sec3img} alt="" />  <span className='sec3-design'>DESIGN</span></div>
      <div className='sec3-animation-content'>  <img className='sec3-arrow-icon' src={sec3img} alt="" />   <span className='sec3-design'>PRINTING</span></div>
       <div className='sec3-animation-content'> <img className='sec3-arrow-icon' src={sec3img} alt="" />  <span className='sec3-design'>HOARDINGS</span></div>  
       <div className='sec3-animation-content'> <img className='sec3-arrow-icon' src={sec3img} alt="" />  <span className='sec3-design'>LETTER BOARDS</span></div>
      <div className='sec3-animation-content'>  <img className='sec3-arrow-icon' src={sec3img} alt="" />   <span className='sec3-design'>INDOOR ADVERTAISMENT</span></div>
       <div className='sec3-animation-content'> <img className='sec3-arrow-icon' src={sec3img} alt="" />  <span className='sec3-design'>VEHICLE BRANDING</span></div>
       <div className='sec3-animation-content'> <img className='sec3-arrow-icon' src={sec3img} alt="" />  <span className='sec3-design'>ID CARDS AND NAME BADGE</span></div>
      <div className='sec3-animation-content'>  <img className='sec3-arrow-icon' src={sec3img} alt="" />   <span className='sec3-design' >GIFT CARD</span></div>
       <div className='sec3-animation-content'> <img className='sec3-arrow-icon' src={sec3img} alt="" />  <span className='sec3-design'>TROPHY AND MOMENTO</span></div>  
      <div className='sec3-animation-content'>  <img className='sec3-arrow-icon' src={sec3img} alt="" />   <span className='sec3-design'>OFFSET PRINTING</span></div>
        </div>
       
        </Marquee>
    </div>
    <div className='section3-portfolio sec3-port-side2'>
      <Marquee>  

        <div className='sec3-announce  sec3-announcement1'>
        <div className='sec3-animation-content'> <img className='sec3-arrow-icon1' src={sec3img1} alt="" />  <span className='sec3-design'>DESIGN</span></div>
      <div className='sec3-animation-content'>  <img className='sec3-arrow-icon1' src={sec3img1} alt="" />   <span className='sec3-design'>PRINTING</span></div>
       <div className='sec3-animation-content'> <img className='sec3-arrow-icon1' src={sec3img1} alt="" />  <span className='sec3-design'>HOARDINGS</span></div>  
       <div className='sec3-animation-content'> <img className='sec3-arrow-icon1' src={sec3img1} alt="" />  <span className='sec3-design'>LETTER BOARDS</span></div>
      <div className='sec3-animation-content'>  <img className='sec3-arrow-icon1' src={sec3img1} alt="" />   <span className='sec3-design'>INDOOR ADVERTAISMENT</span></div>
       <div className='sec3-animation-content'> <img className='sec3-arrow-icon1' src={sec3img1} alt="" />  <span className='sec3-design'>VEHICLE BRANDING</span></div>
       <div className='sec3-animation-content'> <img className='sec3-arrow-icon1' src={sec3img1} alt="" />  <span className='sec3-design'>ID CARDS AND NAME BADGE</span></div>
      <div className='sec3-animation-content'>  <img className='sec3-arrow-icon1' src={sec3img1} alt="" />   <span className='sec3-design' >GIFT CARD</span></div>
       <div className='sec3-animation-content'> <img className='sec3-arrow-icon1' src={sec3img1} alt="" />  <span className='sec3-design'>TROPHY AND MOMENTO</span></div>  
      <div className='sec3-animation-content'>  <img className='sec3-arrow-icon1' src={sec3img1} alt="" />   <span className='sec3-design'>OFFSET PRINTING</span></div>
        </div>
     
        </Marquee>
    </div>
    </div>
    
    </>
  )
}
