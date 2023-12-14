import React, { useEffect } from 'react'

const Idcards = () => {

    const indoor = [
        {
            id:1,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210427112600.jpg"
        },
        // {
        //     id:2,
        //     img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210427112457.jpg"
        // },
        // {
        //     id:3,
        //     img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210427112314.jpg"
        // },
    ]

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className='section2-design'>
      <h1>ID CARDS & DADGES</h1>
      {/* <div className='section2-printer-nav'>
        <h3>Car Branding</h3>
        <h3>Road Show Vehicles</h3>
        <h3>Led Display Vehicles</h3>
        
      </div> */}
      <div className="section2-designitems">
      {indoor.map((item)=>{
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

export default Idcards
