import React, { useEffect, useState } from 'react'

const IndoorAd = () => {

  const [selectedCategory, setSelectedCategory] = useState('Canopy');


    const indoor = [
        {
            id:1,
            name:"hlo",
            img:"https://5.imimg.com/data5/SELLER/Default/2022/12/ZY/QU/VH/102405982/canopy-tent.jpeg"
        },
        {
            id:2,
            img:"https://5.imimg.com/data5/EJ/JW/MY-4970508/roll-up-standee.png"
        },
        {
            id:3,
            img:"https://image.made-in-china.com/202f0j00VvSWTsLcCzqD/Portable-Foldable-Promotion-Counter-Table-Aluminum-Promotion-Desk-with-Wheel.jpg"
        },
        {
            id:4,
            img:"https://ramasigns.in/wp-content/uploads/2021/07/MDF-Promo-Table_3.jpg"
        },
        {
            id:5,
            img:"https://m.media-amazon.com/images/I/71CP7eHmr+L.jpg"
        },
        {
            id:6,
            img:"https://m.media-amazon.com/images/I/81ktfPeiGYL.jpg"
        },
       
        {
            id:7,
            img:"https://rkprints.in/wp-content/uploads/2022/04/Lollipop-Board.jpg"
        },
        // {
        //     id:9,
        //     img:"https://mediaspot.in/wits_admin/uploads/gallery_image/Image-gallery-210706070750.jpg"
        // },
    ]

    const categories = [
      'Canopy',
      'Roll Up Stand',
      'Promotion Table',
      'Promo Table',
      'Magazine Stand',
      'Wood Display Stand',
      'Lollipop Boards',
    ];
    const imagesByCategory = {
      'Canopy': indoor.slice(0, 1),
      'Roll Up Stand': indoor.slice(1, 2),
      'Promotion Table': indoor.slice(2, 3),
      'Promo Table': indoor.slice(3, 4),
      'Magazine Stand': indoor.slice(4, 5),
      'Wood Display Stand': indoor.slice(5,6),
      'Lollipop Boards': indoor.slice(6),
    };
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className='section2-design'>
      <h1>Indoor ad</h1>
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

export default IndoorAd
