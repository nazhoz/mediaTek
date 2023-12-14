import React from 'react'
import './HomeTestimonials.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Lottie from 'lottie-react';

const HomeTestimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
  return (
    <div className='sectionfive-testi-main'>
        <div className="Section2-hometestimonials-heads">
          <span className="sectionfive-homestestimonials-head-one">
            Testimonials
          </span>
        </div>
        <div className='sectionfive-hometestimonial-parts'>
            <div className='sectionfive-hometestimonial-content-main'>
                <img className='sectionfive-hometestimonial-quotes' src={require('./Homeimages/bluequote.png')} alt="" />
                <div className='sectionfive-hometestimonial-content'>
                    <span className='sectionfive-testimonial-paragraph'>I am very happy with the services MEDIASPOT provided with. Highly recommeded for people who wish to get their ideas branded. Outstanding perspective</span>
                    <span className='sectionfive-testimonial-name'>- Bijoy</span>
                </div>
                <Lottie className='Sectionfive-testi-animation' animationData={require('./Assets/like.json')}/>
            </div>
            <div className='sectionfive-hometestimonial-content-main1'>
                <img className='sectionfive-hometestimonial-quotes' src={require('./Homeimages/pinkquote.png')} alt="" />
                <div className='sectionfive-hometestimonial-content'>
                    <span className='sectionfive-testimonial-paragraph'>MEDIASPOT's services are exceptional. I highly recommend them for turning your ideas into a memorable brand. Their unique perspective and dedication are truly outstanding.</span>
                    <span className='sectionfive-testimonial-name-two'>- Anil</span>
                </div>
                <Lottie className='Sectionfive-testi-animation' animationData={require('./Assets/like.json')}/>
            </div>
            <div className='sectionfive-hometestimonial-content-main3'>
                <img className='sectionfive-hometestimonial-quotes' src={require('./Homeimages/darkpinkqoute.png')} alt="" />
                <div className='sectionfive-hometestimonial-content'>
                    <span className='sectionfive-testimonial-paragraph'>One of the best services provider for your business. They delivered quality work. I would recommend this to anybody who looks for similiar works.</span>
                    <span className='sectionfive-testimonial-name-three'>- Aslam </span>
                </div>
                <Lottie className='Sectionfive-testi-animation' animationData={require('./Assets/like.json')}/>
            </div>
            <div className='sectionfive-hometestimonial-content-main3'>
                <img className='sectionfive-hometestimonial-quotes' src={require('./Homeimages/violetqoute.png')} alt="" />
                <div className='sectionfive-hometestimonial-content'>
                    <span className='sectionfive-testimonial-paragraph'>Exceptional services and delightful experience. I would strongly recommend to everyone looking for a hassie-free and value for money and booking services.</span>
                    <span className='sectionfive-testimonial-name-four'>- Ramesh Kumar</span>
                </div>
                <Lottie className='Sectionfive-testi-animation' animationData={require('./Assets/like.json')}/>
            </div>
        </div>
{/* ========================================testimonialcarousel==================================================== */}
{/* ================================================================================================================== */}
        <div className='sectionfive-hometestimonial-partscarousel'>
        <Slider {...settings} className='sectionfive-slider'>
          <div className='sectionfive-testi-carousel'>
            <img width={25} height={25} src={require('./Homeimages/quote-left (1).png')} alt="" />
            <div className='sectionfive-testi-carousel-content'>
              <span>
                I am very happy with the services MEDIASPOT provided with. Highly recommended for people who wish to get their ideas branded. Outstanding perspective
              </span>
            </div>
            <div className='sectionfive-testi-carousel-text'>
              <span className='sectionfive-testi-carousel-name'>- Bijoy -</span>
              <Lottie className='Sectionfive-carousel-animation' animationData={require('./Assets/like.json')}/>
            </div>
          </div>

          <div className='sectionfive-testi-carousel'>
          <img width={25} height={25} src={require('./Homeimages/quote-left (2).png')} alt="" />
            <div className='sectionfive-testi-carousel-content'>
              <span>
              One of the best services provider for your business. They delivered quality work. I would recommend this to anybody who looks for similiar works.
              </span>
            </div>
            <div className='sectionfive-testi-carousel-text'>
              <span className='sectionfive-testi-carousel-name-one'>- Aslam -</span>
              <Lottie className='Sectionfive-carousel-animation' animationData={require('./Assets/like.json')}/>
            </div>
          </div>

          <div className='sectionfive-testi-carousel'>
          <img className='sectionfive-testi-carousel-qoute' width={25} height={25} src={require('./Homeimages/quote-left (3).png')} alt="" />
            <div  className='sectionfive-testi-carousel-content'>
              <span>
              Exceptional services and delightful experience. I would strongly recommend to everyone looking for a hassie-free and value for money and booking services.
              </span>
            </div>
            <div className='sectionfive-testi-carousel-text'>
              <span className='sectionfive-testi-carousel-name-two'>- Ramesh Kumar -</span>
              <Lottie className='Sectionfive-carousel-animation' animationData={require('./Assets/like.json')}/>
            </div>
          </div>
        </Slider>

        </div>
    </div>
  )
}

export default HomeTestimonials