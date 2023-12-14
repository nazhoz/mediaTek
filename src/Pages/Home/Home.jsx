import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import AnimationData from "./Assets/animation_lnkja08h.json";
import PrinterAnimation from "./Assets/printer.json";
import BallAnimation from "./Assets/ball.json";
import imgone from "./Homeimages/homecarouselone.png";
import imgtwo from "./Homeimages/homecarouseltwo.png";
import imgfour from "./Homeimages/homecarouselthree.png";
import imgfive from "./Homeimages/homecarouselfour.png";
import { Chaticons } from "../ContactUs/Chaticons";
import HomeAbout from "./HomeAbout";
import HomeService from "./HomeService";
import { useEffect } from "react";
import HomeMarquee from "./HomeMarquee";
import HomePortfolio from "./HomePortfolio";
import { Portfoliofooter } from "../Portfolio/Portfolio/Portfoliofooter";
import HomeTestimonials from "./HomeTestimonials";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

    <div
    className="sectionfive-main">
    <div className="sectionFive-home">
      {/* ====================================head-part====================================== */}
      <div className="sectionFive-home-part-one">
        <div className="sectionfive-home-main-heading">
          <span>_ Digital Printing Service</span>
        </div>
        <div className="Sectionfive-home-main-head">
          <div className="sectionfive-home-head-container">
            <h1 className="sectionfive-home-head-one">MEDIASPOT</h1>
          </div>
          <h1 className="sectionfive-home-head">Advertising Hub</h1>
        </div>
        
        <div className="sectionfive-home-content">
          <span>We Advertise your business anywhere in Kerala.</span>
        </div>
        <div className="sectionfive-home-button-div">
          <Link to="/ContactUs">
            <button className="sectionfive-home-button">Contact Us</button>{" "}
          </Link>
        </div>
        <Lottie
            className="Sectionfive-lottie-printerr"
            animationData={PrinterAnimation}
          />
      </div>

      {/* =====================================image-part========================================= */}

      <div className="sectionFive-home-part-two">
        <div className="sectionFive-home-part-two-lottie">
          <Lottie
            className="Sectionfive-lottie-balls"
            animationData={AnimationData}
          />
          <Lottie
            className="Sectionfive-lottie-printer"
            animationData={PrinterAnimation}
          />
          <Lottie
            className="Sectionfive-lottie-ball"
            animationData={BallAnimation}
          />
          {/* <Lottie className='Sectionfive-lottie-love' animationData={LoveAnimation}/> */}
        </div>
        <div className="sectionFive-home-part-two-carousel">
          <Carousel
            autoPlay={true}
            labels={false}
            infiniteLoop={true}
            interval={5000}
            renderIndicator={false}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
          >
            <div>
              <img src={imgone} />
            </div>
            <div>
              <img src={imgtwo} />
            </div>
            <div>
              <img src={imgfour} />
            </div>
          </Carousel>
        </div>       
      </div>      
    </div>
    <Chaticons/>
    <HomeAbout/>
    <HomeService/>
    <HomeMarquee/>
    <HomePortfolio/>
    <HomeTestimonials/>
    <Portfoliofooter/>
    </div>
  );
};

export default Home;
