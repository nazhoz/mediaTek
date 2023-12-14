import React from 'react'
import './pfooter.css'
import img3 from './mail-inbox-app.png'
import img4 from './arrow-right.png'
import img5 from './facebook-app-symbol (1).png'
import img6 from './facebook-app-symbol (2).png'
import img7 from './vimeo.png'
import img8 from './vimeo (1).png'
import img9 from './twitter (1).png'
import img10 from './twitter (2).png'
import img11 from './linkedin.png'
import img12 from './linkedin (1).png'

export const Portfoliofooter = () => {
  return (
    <div className='sec3-footer'>
        <div className='sec3-footer-second'>
          <div className='sec3-fcontent1'>
            <span className='sec3-about'>About Company</span>
            <span className='sec3-fcontent1-paragraph'>Mediaspot is one of the pioneers in the field of Outdoor Advertising in Kerala. We build a strong base root and has been providing solutions to the top brands in the market through Hoardings and Billboards.</span>

          </div>
          <div className='sec3-fcontent2 sc3-margin'>
              <span className='sec3-footer-heading'>Quick Links</span>
                <span className='sec3-footer-text'>Home</span>
                <span className='sec3-footer-text'>About Us</span>
                <span className='sec3-footer-text'>Portfolio</span>
                <span className='sec3-footer-text'>Contact</span>

          </div>
          <div className='sec3-fcontent2 sec3-ipad'>
          <span className='sec3-footer-heading'>Our Services</span>
                <span className='sec3-footer-text'>Design</span>
                <span className='sec3-footer-text'>Printing</span>
                <span className='sec3-footer-text'>Hoardings</span>
                <span className='sec3-footer-text'>Letter Boards</span>
                <span className='sec3-footer-text'>Gift Cards</span>

          </div>
          <div className='sec3-fcontent2 sec3-hide-content'>
          
                <span className='sec3-footer-text sec3-top-text'>Indoor Advertaisment</span>
                <span className='sec3-footer-text'>Vehicle Branding</span>
                <span className='sec3-footer-text'>ID Cards & Name</span>
                <span className='sec3-footer-text'>Badge</span>
                <span className='sec3-footer-text'>Trophy And Momento</span>

          </div>
          <div className='sec3-fcontent3'>
          
          <span className='sec3-footer-heading'>Our Newsletter</span>
          <div className='sec3-mail-content'><img className='sec3-foot-icon1' src={img3} alt="" /><input className='sec3-mail' type="text" placeholder='Email Address' /><img className='sec3-foot-icon2' src={img4} alt="" /></div>
          <span className='sec3-footer-heading sce3-nil'>Social</span>
          <div className='sec3-icons-div'>
              <div className='sec3-social'><img className='sec3-social-icon' src={img5} alt="" /> <img className='sec3-change' src={img6} alt="" /></div>
              <div className='sec3-social'><img className='sec3-social-icon' src={img7} alt="" /> <img className='sec3-change' src={img8} alt="" /></div>
              <div className='sec3-social'><img className='sec3-social-icon' src={img9} alt="" /> <img className='sec3-change' src={img10} alt="" /></div>
              <div className='sec3-social'><img className='sec3-social-icon' src={img11} alt="" /> <img className='sec3-change' src={img12} alt="" /></div>

              

            </div>
          
      

    </div>

        </div>
        <div className='sec3-footer-third'>
         
            <span className='sec3-copy'>Full Copyright & Design By @Theme pure – 2023</span>
        </div>
    </div>
  )
}
