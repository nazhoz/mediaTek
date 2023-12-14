import React, { useEffect, useState } from 'react'

const Hoardings = () => {

  const [selectedCategory, setSelectedCategory] = useState('Mini Hoardings');

    const board = [
        {
            id:1,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706074547.jpg"
        },
        {
            id:2,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706092825.jpg"
        },
        {
            id:3,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706092848.jpg"
        },
        {
            id:4,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706092913.jpg"
        },
        {
            id:5,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210427111608.jpg"
        },
        // {
        //     id:6,
        //     img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706070550.jpg"
        // },
        // {
        //     id:7,
        //     img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706070611.jpg"
        // },
        // {
        //     id:8,
        //     img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706070702.jpg"
        // },
        // {
        //     id:9,
        //     img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706070750.jpg"
        // },
    ]

    const filteredImages = selectedCategory === 'Mini Hoardings'
    ? board.slice(0, 3) 
    : board.slice(-2);
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className='section2-design'>
      <h1>Our Hoarding Works</h1>
      <div className='section2-printer-nav'>
        <h3
           onClick={() => setSelectedCategory('Mini Hoardings')}
           className={selectedCategory === 'Mini Hoardings' ? 'selected' : ''}
        >Mini Hoardings</h3>
        <h3
            onClick={() => setSelectedCategory('Tower Hoardings')}
            className={selectedCategory === 'Tower Hoardings' ? 'selected' : ''}
        >Tower Hoardings</h3>
        
      </div>
      <div className="section2-designitems">
      {filteredImages.map((item)=>{
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

export default Hoardings
