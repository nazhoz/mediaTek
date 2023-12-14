import React from 'react'
import '../Portfolio//pfooter.css'
import { Link } from 'react-router-dom'
import img3 from '../Portfolio/sec3images/mail-inbox-app.png'
import img4 from '../Portfolio/sec3images/arrow-right.png'
import img5 from '../Portfolio/sec3images/facebook-app-symbol (1).png'
import img6 from '../Portfolio/sec3images/facebook-app-symbol (2).png'
import img7 from '../Portfolio/sec3images/instagram.png'
import img8 from '../Portfolio/sec3images/instagram (1).png'
import img9 from '../Portfolio/sec3images/whatsapp.png'
import img10 from '../Portfolio/sec3images/whatsapp (1).png'
import img11 from '../Portfolio/sec3images/mail.png'
import img12 from '../Portfolio/sec3images/mail (1).png'

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
                <Link  className='sec3-footer-text' to='/'><span>Home</span></Link>
                <Link  className='sec3-footer-text' to='/AboutUs'><span>About Us</span></Link>
                <Link  className='sec3-footer-text' to='/Portfolio'><span>Portfolio</span></Link>
                <Link  className='sec3-footer-text' to='/ContactUs'><span>Contact</span></Link>

          </div>
          <div className='sec3-fcontent2 sec3-ipad'>
          <span className='sec3-footer-heading'>Our Services</span>
          <Link className='sec3-footer-text' to='/Design'><span>Design</span></Link>
          <Link className='sec3-footer-text' to='/Printer'><span>Printing</span></Link>
          <Link className='sec3-footer-text' to='/Hoarding'><span>Hoardings</span></Link>
          <Link className='sec3-footer-text' to='/Letter'><span>Letter Boards</span></Link>
          <Link className='sec3-footer-text' to='/Trophy'><span>Gift Cards</span></Link>

          </div>
          <div className='sec3-fcontent2 sec3-hide-content'>
          
          <Link className='sec3-footer-text sec3-top-text' to='/Indoor'><span>Indoor Advertaisment</span></Link>
          <Link className='sec3-footer-text' to='/Vehicle'><span>Vehicle Branding</span></Link>
          <Link className='sec3-footer-text' to='/Idcard'><span>ID Cards & Name</span></Link>
          <Link className='sec3-footer-text' to='/Idcard'><span>Badge</span></Link>
          <Link className='sec3-footer-text' to='/Trophy'><span>Trophy And Momento</span></Link>

          </div>
          <div className='sec3-fcontent3'>
          
          <span className='sec3-footer-heading'>Our Newsletter</span>
          <div className='sec3-mail-content'><img className='sec3-foot-icon1' src={img3} alt="" /><input className='sec3-mail' type="text" placeholder='Email Address' /><img className='sec3-foot-icon2' src={img4} alt="" /></div>
          <span className='sec3-footer-heading sce3-nil'>Social</span>
          <div className='sec3-icons-div'>
              <div onClick={() =>
                  (window.location.href = "https://www.facebook.com/mediaspotadvertisinghub/")
              } className='sec3-social'><img className='sec3-social-icon' src={img5} alt="" /> <img className='sec3-change' src={img6} alt="" /></div>
              <div onClick={() =>
                  (window.location.href = "https://instagram.com/mediaspot_nilambur_?igshid=MzRlODBiNWFlZA==")
              } className='sec3-social'><img className='sec3-social-icon' src={img7} alt="" /> <img className='sec3-change' src={img8} alt="" /></div>
              <div onClick={() =>
                  (window.location.href = "https://wa.me/9447353659")
              } className='sec3-social'><img className='sec3-social-icon' src={img9} alt="" /> <img className='sec3-change' src={img10} alt="" /></div>
              <div  onClick={() =>
                  (window.location.href = "mailto:mediaspotnbr@gmail.com")
              } className='sec3-social'><img className='sec3-social-icon' src={img11} alt="" /> <img className='sec3-change' src={img12} alt="" /></div>

              

            </div>
          
      

    </div>

        </div>
        <div className='sec3-footer-third'>
         
            <span className='sec3-copy'>Design By @EduMetrix – 2023</span>
        </div>
    </div>
  )
}
