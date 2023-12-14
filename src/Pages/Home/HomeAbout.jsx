import React from 'react'
import "../AboutUs/About.css";
import mdsp from "../AboutUs/Vedios/mediaspot.mp4";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
    const [years, setYears] = useState(0);

    const incrementCounter = (counter, setCounter, limit) => {
        setCounter((prevCounter) => {
          if (prevCounter < limit) {
            return prevCounter + 1;
          } else {
            clearInterval();
            return prevCounter;
          }
        });
      };
      useEffect(() => {
        let totalYears = setInterval(() => {
          incrementCounter(years, setYears, 12);
        }, 300);
    
        return () => {
          clearInterval(totalYears);
        };
      }, []);
  return (

    <div className='sectionone-HomeAbout'>

<div className="section-one-homeabout-content">
        <div className="section-one-Homeabout-img-div">
          <div className="section-one-about-img">
            <div className="vedio-container">
              <video
                className="section-one-about-img-vedio"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  className="section-one-about-img-vedio"
                  src={mdsp}
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="section-one-experience">
              <span className="section-one-years-of-ex">{years}</span>
              <span>Years Of</span>
              <span>Experience</span>
            </div>
          </div>
        </div>

        <div className="section-one-about-company-text">
          <div className="section-one-about-company-sub-text">
          <div className="sectionfive-home-main-heading-about">
          <span>_ About the company</span>
        </div>
            <div className="section-one-about-company-text-head">

            <span>
              We Are 
            </span>
            <span className="section-one-about-company-text-head-mediaspot">Mediaspot</span>
            </div>

            <div className="section-one-about-company-text-data-div">
              <div className="section-one-about-company-text-data-sub-div">
                <span className="section-one-about-company-text-data">
                  Mediaspot is one of the pioneers in the field of Outdoor
                  Advertising in Kerala. We build a strong base root and has
                  been providing solutions to the top brands in the market
                  through Hoardings and Billboards. Our hoardings are installed
                  in the most prominent places within the city as well as in
                  strategic places along highways and nodal points on highways
                  and outskirts. The Company effectively utilizes print, outdoor
                  and online advertising having a strong presence in
                  Design,Development, Branding, Social Media, Digital campaigns
                  etc. We are committed towards offering unique creative
                  services for numerous brands in several segments.Based in
                  Malappuram, we are the best sign board manufacturers in
                  Kerala.
                </span>
              </div>
            </div>
            <div className="section-one-about-company-knowmore">
           <Link to="AboutUs"><button>Know more</button></Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomeAbout