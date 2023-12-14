import React, { useEffect, useState } from 'react'

const Printer = () => {

  const [selectedCategory, setSelectedCategory] = useState('Cloth Vinyl Printing');

    const print = [
        {
            id:1,
            img:"https://img.freepik.com/premium-vector/change-typography_142392-661.jpg?size=626&ext=jpg"
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
        {
          id:10,
          img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706070550.jpg"
      },
      {
          id:11,
          img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706070611.jpg"
      },
      {
          id:12,
          img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706070702.jpg"
      }
    ]

    const categories = [
      'Cloth Vinyl Printing',
      'Eco Solvent HP Print',
      'A3 Laser Printing',
      'Wooden  Engraver',
      'UV Printing',
      'Multi Color Printing',
    ];
    const imagesByCategory = {
      'Cloth Vinyl Printing': print.slice(0, 2),
      'Eco Solvent HP Print': print.slice(2, 4),
      'A3 Laser Printing': print.slice(4, 6),
      'Wooden  Engraver': print.slice(6, 8),
      'UV Printing': print.slice(8, 10),
      'Multi Color Printing': print.slice(10),
    };
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className='section2-design'>
      <h1>Our Design Works</h1>
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

export default Printer
