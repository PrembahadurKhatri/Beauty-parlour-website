
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Slider = () => {
const navigate = useNavigate();

  const images = [
    "https://static.wixstatic.com/media/f2837c_e821f29f810f40e1a35feb8084b2aa80~mv2.png/v1/fit/w_2500,h_1330,al_c/f2837c_e821f29f810f40e1a35feb8084b2aa80~mv2.png",
    "https://i.shgcdn.com/9365f930-255f-4e75-9ffc-6117f8df08b9/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    "https://img.nivea.com/-/media/nivea/local/gh/products/opt_prod_bnr.jpg?rx=0&ry=0&rw=6400&rh=2500&hash=D4EEE5DD6BD4ABCC0A99F1540075ED2C",
    "https://eparkville.com/cdn/shop/files/Banner_2160_x_1080.png?v=1762446063&width=3000",
    "https://essano.co.nz/cdn/shop/files/Hydration_Banner_1.png?v=1767672805&width=3000"
  ];

  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);// Update index to show the next image, looping back to the start
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);// Add images.length as a dependency to ensure the effect runs again if the number of images changes
 
  const products = [
   {id:9, name: "Skincare", price: 1000,route:"/skincare", image: "https://backend.bmgpharmacy.com/media/catalog/product//s/o/solo_130.jpg"},
    {id:30, name: "Makeup", price: 1200,route:"/makeup",  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6sZjBMwGckm1bPR6xEXRWYpNvlXTUHEVAyp3mEMSaWeH-9Lwd_Gxb20SdCPOVBsFV0gKzsqb_AWQ_f49Wiwm9ERuqwukOc9V9xzOyNA8f4_DwKSTcVdVrhbp-qw5ei0hcwvkFTjdg6wY_/s1600/cover+girl+flamed+out+mascara.png"},
    {id:14, name: "Hair & Body", price: 1500,route:"/hair-body",  image: "https://np-live-21.slatic.net/kf/S5b6fc46b229e49cbac1493e7090d31b0k.jpg"},
    {id:10, name: "Health and wellness",route:"/health",  price: 800, image: "https://img.drz.lazcdn.com/static/np/p/5b21a297db1fcf087b20ce36b76843c7.jpg_720x720q80.jpg"},
    {id:18, name: "Fragnance",route:"/fragnance",  price: 2500, image: "https://www.wildstone.in/cdn/shop/files/Artboard_1_07c0cfd4-d136-4954-9c08-f7a84bcdf2be.jpg?v=1723099347"},
    {id:19, name: "Accessories",route:"/accessories",  price: 8000, image: "https://simongjewelry.com/cdn/shop/files/butterfly-pendant-necklace-in-18k-gold-with-diamonds-lp4815-2t-18k-x-2t-369924_1024x.jpg?v=1729951673"},
]

  

  return (
    <div>
      <div >
        <img
          src={images[index]}
          alt="Slider"
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="categories">On Sale Now</div>
<div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
           <button className='img-btn' onClick={()=>navigate(product.route)}> <img src={product.image} alt={product.name} className="product-image" /></button>  
            <p className="product-name">{product.name}</p>
          </div>
        ))}
</div>

  
    </div>
  );
};

export default Slider
