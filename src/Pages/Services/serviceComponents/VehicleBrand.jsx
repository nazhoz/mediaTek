import React, { useEffect, useState } from 'react'

const VehicleBrand = () => {

  const [selectedCategory, setSelectedCategory] = useState('Car Branding');


    const print = [
        {
            id:1,
            name:"hlo",
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706092452.jpg"
        },
        {
            id:2,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210427112314.jpg"
        },
        {
            id:3,
            img:"https://5.imimg.com/data5/GLADMIN/Default/2023/2/IY/IL/AD/86522966/led-display-van-in-kerala-500x500.jpg"
        },
    ]
   
    const categories = [
      'Car Branding',
      'Road Show Vehicles',
      'Led Display Vehicles',
      
    ];
    const imagesByCategory = {
      'Car Branding': print.slice(0, 1),
      'Road Show Vehicles': print.slice(1, 2),
      'Led Display Vehicles': print.slice(2),
      
    };
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className='section2-design'>
      <h1>Vehicle Branding</h1>
      <div className='section2-printer-nav'>
      {categories.map((category) => (
        <h3
        key={category}
        onClick={() => handleCategoryClick(category)}
        className={selectedCategory === category ? 'selected' : ''}
        >{category}</h3>
        ))}
      </div>
      <div className="section2-designitems">
      {imagesByCategory[selectedCategory].map((item)=>{
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

export default VehicleBrand
