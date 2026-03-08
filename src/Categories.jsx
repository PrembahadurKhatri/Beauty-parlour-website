import React from 'react'

import  {useNavigate}  from 'react-router-dom'
const Categories = () => {
    const navigate=useNavigate();

const categories= [
    {id:100, name: "Skincare", price: 1000,route:"/skincare", image: "https://backend.bmgpharmacy.com/media/catalog/product//s/o/solo_130.jpg"},
    {id:200, name: "Makeup", price: 1200,route:"/makeup",  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6sZjBMwGckm1bPR6xEXRWYpNvlXTUHEVAyp3mEMSaWeH-9Lwd_Gxb20SdCPOVBsFV0gKzsqb_AWQ_f49Wiwm9ERuqwukOc9V9xzOyNA8f4_DwKSTcVdVrhbp-qw5ei0hcwvkFTjdg6wY_/s1600/cover+girl+flamed+out+mascara.png"},
    {id:300, name: "Hair & Body", price: 1500,route:"/hair-body",  image: "https://np-live-21.slatic.net/kf/S5b6fc46b229e49cbac1493e7090d31b0k.jpg"},
    {id:400, name: "Health and wellness",route:"/health",  price: 800, image: "https://www.epharmacy.com.np/content/images/thumbs/5e09d822a47b590001f1a66f_himalaya-purifying-neem-face-wash-gel-50ml.jpeg"},
    {id:500, name: "Fragnance",route:"/fragnance",  price: 2500, image: "https://www.wildstone.in/cdn/shop/files/Artboard_1_07c0cfd4-d136-4954-9c08-f7a84bcdf2be.jpg?v=1723099347"},
    {id:600, name: "Accessories",route:"/accessories",  price: 8000, image: "https://simongjewelry.com/cdn/shop/files/butterfly-pendant-necklace-in-18k-gold-with-diamonds-lp4815-2t-18k-x-2t-369924_1024x.jpg?v=1729951673"}
   
];

  return (
      <div>
  
   
      <div className="categories">Categories</div>
<div className="products">
        {categories.map((product) => (
          <div key={product.id} className="product-card">
           <button className='img-btn'   onClick={() => navigate(product.route)}>
             <img src={product.image} alt={product.name} className="product-image" /></button>  
            <p className="product-name">{product.name}</p>
          </div>
        ))}
</div>


    </div>
  )
}

export default Categories
