import React, { useContext } from 'react'
import { CartContext } from './CartContext'
const Accesories = () => {
  const {addToCart} = useContext(CartContext);
      const accessories= [
   {id:19, name: "Butterfly Necklace", price: 1800, image: "https://simongjewelry.com/cdn/shop/files/butterfly-pendant-necklace-in-18k-gold-with-diamonds-lp4815-2t-18k-x-2t-369924_1024x.jpg?v=1729951673"},
    {id:20, name: "Floral Necklace", price: 1400, image: "https://shopgirlscrew.com/cdn/shop/files/FL-N392-RCOMPRESSED.jpg?v=1720420625&width=1800"},
    { id:21, name: "Heart Necklace",price:250 , image: "https://gem-noir.com/cdn/shop/files/image-1_6239ba25-c882-4872-a004-470b2cdbca6c.webp?v=1758627535" },
    {id:22, name: "Ring", price: 1700, image: "https://ganapatijewellers.com/wp-content/uploads/2025/11/2-hearts.jpg"},
    {id:23, name: "Couple Ring", price: 600, image: "https://i.etsystatic.com/50708543/r/il/fc1129/5886538147/il_500x500.5886538147_272k.jpg"},
    {id:24, name: "Gucci Bag", price: 800, image: "https://cdn-images.farfetch-contents.com/19/24/88/02/19248802_56127200_600.jpg"},
    {id:25, name: "CHANAL bag", price: 2000, image: "https://www.chanel.com/images/as/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_428/-80070064.jpg"},
    {id:26, name: "Hand Bag", price: 2500, image: "https://img.freepik.com/free-photo/pink-handbags_1203-7829.jpg?semt=ais_rp_progressive&w=740&q=80"},
    ]
  return (
        <div>

  <div className="newproducts">
      {accessories.map((item) => (
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

export default Accesories
