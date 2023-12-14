import React, { useEffect, useState } from 'react'

const Trophy = () => {

  const [selectedCategory, setSelectedCategory] = useState('Momentum');


    const indoor = [
        {
            id:1,
            img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210427112551.jpg"
        },
        {
            id:2,
            img:"https://media.istockphoto.com/id/475688410/vector/soccer-uniform.jpg?s=612x612&w=0&k=20&c=YzUtneou4kb6-oaTQ0R2HIVzmbbG1X85VU2yBaUIMJ0="
        },
        {
            id:3,
            img:"https://media.istockphoto.com/id/1074885022/photo/blue-blank-cap-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_8bMQBMhFUzz5I35XunG2pdt5GEvqCaMBYU-LH_XX2Q="
        },
        {
          id:4,
          img:"https://nestasia.in/cdn/shop/products/Vintagepictureframe_6.jpg?v=1615551600"
      },
    ]

    const categories = [
      'Momentum',
      'Jesry',
      'Cap',
      'Photo Frame'
    ];
    const imagesByCategory = {
      'Momentum': indoor.slice(0,1),
      'Jesry': indoor.slice(1,2),
      'Cap': indoor.slice(2,3),
      'Photo Frame': indoor.slice(3),
      
    };
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className='section2-design'>
      <h1>Trophy & Momentum</h1>
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

export default Trophy
