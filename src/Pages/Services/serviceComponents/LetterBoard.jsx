import React, { useEffect } from 'react'

const LetterBoard = () => {
      const letter = [
        {
            id:1,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-230303062649.jpg"
        },
        {
            id:2,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-230303062751.jpg"
        },
        {
            id:3,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-230303062855.jpg"
        },
        {
            id:4,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-230303062954.jpg"
        },
        {
            id:5,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-230303063023.jpg"
        },
        {
            id:6,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-230303063352.jpg"
        },
        {
            id:7,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-230303063436.jpg"
        },
        {
            id:8,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-230303063608.jpg"
        },
        {
            id:9,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-230303063635.jpg"
        },
    ]

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className='section2-design'>
      <h1>Our Desigh Works</h1>
      <div className='section2-printer-nav'>
        <h3>LED Steel & Titanium</h3>
        
      </div>
      <div className="section2-designitems">
      {letter.map((item)=>{
        return(
            <div className='section2-img'>
        <img className='section2-designimg' src={item.img} alt="" srcset="" key={item.id}/>
        </div>
        )
    })}
      </div>
    </div>
  )
}

export default LetterBoard
