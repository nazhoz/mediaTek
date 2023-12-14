import React from 'react'
import "./ContactApps/chaticon.css"
import phone2 from "./ContactApps/viber.png"
import mail2 from "./ContactApps/gmail.png"
import whatsapp from "./ContactApps/whatsapp.png"
import instagram from "./ContactApps/instagram.png"

export const Chaticons = () => {
  return (
    <div className='chaticon-main'>
        <div className="section4-chat-icons-div">
            <a href="tel:+919946490659"><img src={phone2} alt="" /></a>
            <a href="mailto:mediaspotnbr@gmail.com"><img src={mail2} alt="" /></a>
            <a href="https://instagram.com/mediaspot_nilambur_?igshid=MzRlODBiNWFlZA=="><img src={instagram} alt="" /></a>
            <a href="https://wa.me/9447353659"><img src={whatsapp} alt="" /></a>
        </div>
    </div>
  )
}
