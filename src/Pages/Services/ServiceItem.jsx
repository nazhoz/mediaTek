import React from 'react'

import { Link } from 'react-router-dom'
import '../Services/service.css'
import data from './ServiceData'



const ServiceItem = () => {
  return (
    
    <>
       {data.map((item)=>{
        return(
         <Link className='section2-servicelink' to={item.Path}><div className='section2-serviceItem'>
        <img src={item.image} alt="" srcset="" />
        <div className='section2-service-heading'>
          <h2>{item.heading}</h2>
        </div>

        <div className='section2-service-description'>
          {/* <h2>{item.heading}</h2> */}
          <span>{item.descri}</span>
        </div>
        </div></Link>
       )})}
     </>
   
  )
}

export default ServiceItem
