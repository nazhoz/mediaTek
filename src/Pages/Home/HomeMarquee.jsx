import React from 'react'
import Marquee from "react-fast-marquee";

const HomeMarquee = () => {
  return (
    <div className='sectionone-homemarquee-main'>
        <div className="section-one-clientss">
        <Marquee className="section-one-marque" speed={50}>
          <div className="section-one-clients-first-row">
            <img src={require('../AboutUs/Images/1.jpg')} alt="" />
            <img src={require('../AboutUs/Images/2.jpg')} alt="" />
            <img src={require('../AboutUs/Images/3.jpg')} alt="" />
            <img src={require('../AboutUs/Images/4.jpg')} alt="" />
            <img src={require('../AboutUs/Images/5.jpg')} alt="" />
            <img src={require('../AboutUs/Images/6.jpg')} alt="" />
            <img src={require('../AboutUs/Images/7.jpg')} alt="" />
            <img src={require('../AboutUs/Images/8.jpg')} alt="" />
          </div>
        </Marquee>

        <Marquee className="section-one-marque" direction="right" speed={50}>
          <div className="section-one-clients-first-row">
            <img src={require('../AboutUs/Images/9.jpg')} alt="" />
            <img src={require('../AboutUs/Images/10.jpg')} alt="" />
            <img src={require('../AboutUs/Images/11.jpg')} alt="" />
            <img src={require('../AboutUs/Images/12.jpg')} alt="" />
            <img src={require('../AboutUs/Images/13.jpg')} alt="" />
            <img src={require('../AboutUs/Images/14.jpg')} alt="" />
            <img src={require('../AboutUs/Images/15.jpg')} alt="" />
            <img src={require('../AboutUs/Images/16.jpg')} alt="" />
          </div>
        </Marquee>

      </div>
    </div>
  )
}

export default HomeMarquee