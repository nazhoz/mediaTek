import React from 'react'
import ServiceItem from './ServiceItem'
import { Link } from 'react-router-dom'
import '../Services/service.css'
import { Portfoliofooter } from '../ContactUs/Portfoliofooter'
import { useEffect } from 'react'
import { Chaticons } from '../ContactUs/Chaticons'

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='section2-services'>
      <h1>Explore All Our Services</h1>
      <div className="section2-service-details">
        <ServiceItem/>
        
      </div>
      <Portfoliofooter/>
      <Chaticons/>
    </div>
  )
}

export default Services
