import React from 'react'
import '../Portfolio/pcontent2.css'
import { PortfolioData } from './Section3Data'

export const PortFolioContent = () => {
  
  return (
    <div className='sec3-pcontent'>
        {PortfolioData.map((item)=>{
            return(
                <div className='sec3-image-conetnt'>
                    <img className='sec3-image3' src={item.img} alt="" />
                </div>
            )
        })}
    </div>
  )
}
