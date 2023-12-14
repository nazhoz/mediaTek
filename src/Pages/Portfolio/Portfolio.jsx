import React from 'react'
import { PortfolioMain } from './Portfolio/PortfolioMain'
import { PortFolioContent } from './Portfolio/PortFolioContent'
import { Portfoliofooter } from './Portfolio/Portfoliofooter'
import { Chaticons } from '../ContactUs/Chaticons'
import { useEffect } from 'react'

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PortfolioMain/> 
      <PortFolioContent/>
      <Portfoliofooter/>
      <Chaticons/>
    </div>
  )
}

export default Portfolio