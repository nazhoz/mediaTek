import React, { useEffect } from 'react'

const Design = () => {

    const style = [
        {
            id:1,
            name:"hlo",
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706070513.jpg"
        },
        {
            id:2,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706065852.jpg"
        },
        {
            id:3,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706072236.jpg"
        },
        {
            id:4,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706072259.jpg"
        },
        {
            id:5,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706071245.jpg"
        },
        {
            id:6,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706070550.jpg"
        },
        {
            id:7,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706070611.jpg"
        },
        {
            id:8,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706070702.jpg"
        },
        {
            id:9,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706070750.jpg"
        },
    ]
    

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='section2-design'>
      <h1>Our Design Works</h1>
      <div className="section2-designitems">
      {style.map((item)=>{
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

export default Design
