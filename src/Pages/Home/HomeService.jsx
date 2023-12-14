import React from 'react'
import data from '../Services/ServiceData'
import { Link } from 'react-router-dom';

const HomeService = () => {
    const firstThreeItems = data.slice(0, 3);
  return (

    <div className='Section2-Homeservice-main'>
<div className='Section2-Homeservice-head'>
    <div className='Section2-Homeservice-heads'>
    <span className='sectionfive-homeservice-heading'>Explore all our</span>
    <span className="sectionfive-homeservice-head-one">Services</span>
    </div>
    <div className='sectionfive-homeservice-Viewall'>
    <Link className='sectionfive-homeservice-link' to="/Services">Explore More</Link>
    </div>
</div>
    
    <div className='section2-homeservice'>
        {firstThreeItems.map((item)=>{
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
    </div>
    <Link className='sectionfive-homeservice-link-2' to="/Services">Explore More</Link>
    </div>
  )
}

export default HomeService