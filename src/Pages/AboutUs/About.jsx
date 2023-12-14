import React, { useState, useEffect } from "react";
import "./About.css";
import mdsp from "./Vedios/mediaspot.mp4";
import Marquee from "react-fast-marquee";
import one from "./Images/1.jpg";
import two from "./Images/2.jpg";
import three from "./Images/3.jpg";
import four from "./Images/4.jpg";
import five from "./Images/5.jpg";
import six from "./Images/6.jpg";
import seven from "./Images/7.jpg";
import eight from "./Images/8.jpg";
import nine from "./Images/9.jpg";
import ten from "./Images/10.jpg";
import eleven from "./Images/11.jpg";
import twelve from "./Images/12.jpg";
import thirteen from "./Images/13.jpg";
import fourteen from "./Images/14.jpg";
import fifteen from "./Images/15.jpg";
import sixteen from "./Images/16.jpg";
import seventeen from "./Images/17.jpg";
import eighteen from "./Images/18.jpg";
import nineteen from "./Images/19.jpg";
import twenty from "./Images/20.jpg";
import twentyone from "./Images/21.jpg";
import twentytwo from "./Images/22.jpg";
import twentythree from "./Images/23.jpg";
import twentyfour from "./Images/24.jpg";
import { Chaticons } from "./ContactApps/Chaticons";
import { Portfoliofooter } from "../Portfolio/Portfolio/Portfoliofooter";

const About = () => {
  const [projectCompleted, setProjectCompleted] = useState(0);
  const [satisfiedCustomer, setSatisfiedCustomer] = useState(0);
  const [experiencedStaff, setExperiencedStaff] = useState(0);
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
    let projectCompletedInterval = setInterval(() => {
      incrementCounter(projectCompleted, setProjectCompleted, 362);
    }, 10);

    let satisfiedCustomerInterval = setInterval(() => {
      incrementCounter(satisfiedCustomer, setSatisfiedCustomer, 360);
    }, 10);

    let experiencedStaffInterval = setInterval(() => {
      incrementCounter(experiencedStaff, setExperiencedStaff, 43);
    }, 80);

    let totalYears = setInterval(() => {
      incrementCounter(years, setYears, 12);
    }, 300);

    return () => {
      clearInterval(projectCompletedInterval);
      clearInterval(satisfiedCustomerInterval);
      clearInterval(experiencedStaffInterval);
      clearInterval(totalYears);
    };
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="section-one-main-page">
      <div className="section-one-about-content">
        <div className="section-one-about-img-div">
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
            <div className="section-one-about-company-text-sub-head">
              <span className="gradient-text">About Company</span>
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
            <div className="section-one-about-company-our-mission-vision">
              <div className="section-one-about-company-our-mission">
                <div className="section-one-about-company-our-mission-headline-div">
                  <span className="section-one-about-company-our-mission-headline">
                    Our Mission
                  </span>
                </div>
                <div className="section-one-about-company-our-mission-data">
                  <div className="section-one-about-company-our-mission-sub-data">
                    <span>
                      The company is focusing on using some of the latest
                      technology in the field of outdoor advertising. It is our
                      mission to ensure complete satisfaction to our clients.
                    </span>
                  </div>
                </div>
              </div>

              <div className="section-one-about-company-our-vision">
                <div className="section-one-about-company-our-vision-headline-div">
                  <span className="section-one-about-company-our-mission-headline">
                    Our Vision
                  </span>
                </div>
                <div className="section-one-about-company-our-vision-data">
                  <div className="section-one-about-company-our-vision-sub-data">
                    <span>
                      Our vision is to be the best Outdoor Advertising company
                      and satisfy our customers to the fullest.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






      <div className="section-one-clients">
        <Marquee className="section-one-marque" speed={50}>
          <div className="section-one-clients-first-row">
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
            <img src={five} alt="" />
            <img src={six} alt="" />
            <img src={seven} alt="" />
            <img src={eight} alt="" />
          </div>
        </Marquee>

        <Marquee className="section-one-marque" direction="right" speed={30}>
          <div className="section-one-clients-first-row">
            <img src={nine} alt="" />
            <img src={ten} alt="" />
            <img src={eleven} alt="" />
            <img src={twelve} alt="" />
            <img src={thirteen} alt="" />
            <img src={fourteen} alt="" />
            <img src={fifteen} alt="" />
            <img src={sixteen} alt="" />
          </div>
        </Marquee>

        <Marquee className="section-one-marque" speed={50}>
          <div className="section-one-clients-first-row">
            <img src={seventeen} alt="" />
            <img src={eighteen} alt="" />
            <img src={nineteen} alt="" />
            <img src={twenty} alt="" />
            <img src={twentyone} alt="" />
            <img src={twentytwo} alt="" />
            <img src={twentythree} alt="" />
            <img src={twentyfour} alt="" />
          </div>
        </Marquee>
      </div>

      <div className="section-one-number-of-project-div">
        <div className="section-one-number-of-project-sub-div">
          <div className="section-one-Project-Completed-div">
            <span className="section-one-Project-Completed-plus-text">+</span>
            <span className="section-one-Project-Completed-headline-text">
              Project Completed
            </span>
            <span className="section-one-Project-Completed-number-text">
              {projectCompleted}
            </span>
          </div>

          <div className="section-one-Project-Completed-div">
            <span className="section-one-Project-Completed-plus-text">+</span>
            <span className="section-one-Project-Completed-headline-text">
              Satisfied Customer
            </span>
            <span className="section-one-Project-Completed-number-text">
              {satisfiedCustomer}
            </span>
          </div>

          <div className="section-one-Project-Completed-div">
            <span className="section-one-Project-Completed-plus-text">+</span>
            <span className="section-one-Project-Completed-headline-text">
              Experienced Staff
            </span>
            <span className="section-one-Project-Completed-number-text">
              {experiencedStaff}
            </span>
          </div>
        </div>
      </div>
      <Portfoliofooter/>
      <Chaticons/>
    </div>

   


  );
};

export default About;
