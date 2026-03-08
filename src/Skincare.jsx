import React,{useContext} from 'react'
import { CartContext } from './CartContext'
const Skincare = () => {
    const {addToCart} = useContext(CartContext);
    const skincare= [
    {id:1, name: "Cetaphil", price: 1000, image: "https://www.epharmacy.com.np/content/images/thumbs/65df168a4a13c8d6e9440583_cetaphil-gentle-skin-cleanser-500ml.jpeg"},
    {id:2, name: "Cetaphil oily skin", price: 1200, image: "https://aljawaher.online/cdn/shop/files/320054032_885c671f-8d96-4ae3-893a-142b590cae07.jpg?v=1739772168"},
    {id:3, name: "Papaya sunscream", price: 1500, image: "https://static-01.daraz.com.np/p/e62852c822ddd97a59401ddb8f10bdb0.jpg"},
    {id:4, name: "Himalayan Herbal cream", price: 800, image: "https://www.epharmacy.com.np/content/images/thumbs/5e09d822a47b590001f1a66f_himalaya-purifying-neem-face-wash-gel-50ml.jpeg"},
    {id:5, name: "Clean and Clear facewash", price: 2500, image: "https://img.drz.lazcdn.com/static/np/p/fd33f51845e2c63d967a61d8c3f400f4.jpg_720x720q80.jpg"},
    {id:6, name: "Himalayan skin cream", price: 8000, image: "https://static-01.daraz.com.np/p/a0a6dc0513d38137217a2dbeb860942e.jpg"},
    {id:7, name: "Nivea Moisturizer", price: 900, image: "https://static-01.daraz.com.np/p/7f3f71143f8893ef4a8e0621e986746e.jpg"},
    {id:8, name: "Joy Alover Cream", price: 700, image: "https://img.drz.lazcdn.com/g/kf/S7c89e153ed724bdba14f674bfc2bd1eaa.jpg_720x720q80.jpg"},
    {id: 9, name: "Skincare",price:600 ,image: "https://backend.bmgpharmacy.com/media/catalog/product//s/o/solo_130.jpg" },
    ]
  return (
   <div>
  
  <div className="newproducts">
      {skincare.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.name} />
          <div className="card-body">
            <h3>{item.name}</h3>
            <p>Rs {item.price}</p>
            <button className='add' onClick={() => addToCart(item)}>🛒 Add to cart</button>
          </div>
        </div>
      ))}
    </div>
    
        </div>
  )
}

export default Skincare
