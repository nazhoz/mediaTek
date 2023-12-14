import React from "react";
import "./contact.css";
import emails from "./email.png"
import office from "./address.png"
import phones from "./phone.png"
import { Chaticons } from "./Chaticons";
import { Portfoliofooter } from "./Portfoliofooter";
import { useState } from "react";
import { useEffect } from "react";


export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");


  const handlePostComment = () => {
    const whatsappURL = `https://wa.me/9447353659?text=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AWebsite: ${website}%0AMessage: ${message}`;
    
    window.open(whatsappURL, "_blank");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="section4-contact-banner">
        <div className="section4-banner-text">
          <div className="section4-banner-text-div">
            <span className="section4-banner-text-span">"Celebrate Your Vision with Us - Get in Touch Today!"</span>
          </div>

          <h1 className="contact-us">Contact Us</h1>
        </div>
            <Chaticons/>     
      </div>
      <div className="section4-address-div">
        <div className="mail-address">
          <div className="address-image-div">
            <img src={emails} alt="" />
          </div>
          <div className="address-description">
            <h1>Email Address</h1>
            <span>mediaspotnbr@gmail.com</span>
            <span>ad+ anvarmedispot@gmail.com</span>
          </div>
        </div>
        <div className="mail-address">
          <div className="address-image-div">
            <img src={phones} alt="" />
          </div>
          <div className="address-description">
            <h1>Phone Number</h1>
            <span>0493 1225623</span>
            <span>9946 490659</span>
            <span>9447 353659</span>
          </div>
        </div>
        <div className="mail-address">
          <div className="address-image-div">
            <img src={office} alt="" />
          </div>
          <div className="address-description">
            <h1>Branches</h1>
            <div className="nilambur">
            <span>Media Spot Building, Near Axis Bank</span>
            <span>Keerthipadi Nilambur, Kerala 679329</span>
            </div>
            <div className="calicut">
            <span>1204,2nd floor,Hilite Business park</span>
            <span>Kozhikode</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section4-map-container">
      <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125208.38101569463!2d76.14875621467117!3d11.27890463451273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba63b70b1dc78ab%3A0xaa060b8b6cc0f515!2sMediaspot%20%7C%20Best%20advertising%20company%20in%20malappuram%20%7C%20led%20display%20board%20dealers%20in%20kerala!5e0!3m2!1sen!2sin!4v1696851256593!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
      <form>
      <div className="section4-form-div">
        <div className="form-text">
            <h1>Drop Us A Line</h1>
            <span>Your email address will not be published. Required fields are marked *</span>
        </div>
        <div className="form-inputs">
                <input type="text" name="" id="" placeholder="Enter your name *" value={name}
              onChange={(e) => setName(e.target.value)} required/>
                <input type="email" placeholder="Enter your mail *" value={email}
              onChange={(e) => setEmail(e.target.value)} required/>
                <input type="tel" placeholder="Phone number *" value={phone}
              onChange={(e) => setPhone(e.target.value)} required/>
                <input type="text" placeholder="website" value={website}
              onChange={(e) => setWebsite(e.target.value)} required/>       
        </div>
        <textarea className="textarea" name="" id="" cols="30" rows="10" placeholder="Enter your message" value={message}
              onChange={(e) => setMessage(e.target.value)} required></textarea>
        <div className="form-div-button">
        <button onClick={handlePostComment}>SEND A MESSAGE</button>
        </div>
      </div>
      </form>
      <Portfoliofooter/>
    </>
  );
};