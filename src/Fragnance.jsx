
import React,{useContext} from 'react'
import { CartContext } from './CartContext'
const Fragnance = () => {
    const {addToCart} = useContext(CartContext);
    const fragnance= [
    {id:15, name: "Fogg Perfume", price: 1300, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kKtDHvnART3ApgnHFrTdZYZ4SMsjs1URBw&s"},
    {id:16, name: "Engage Perfume", price: 1600, image: "https://www.nepal.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTF3TGgwamhQTUwuX1NTNDAwXy5qcGc.jpg"},
    {id:17, name: "Engage Pocket Perfume", price: 900, image: "https://dealayo.com/media/catalog/product/e/n/engage-pocket-perfume-cool-marine-17ml_m_-1-nepal.jpg?width=265&height=265&store=default&image-type=image"},
    {id:18, name: "Wildstone", price: 2200, image: "https://www.wildstone.in/cdn/shop/files/Artboard_1_07c0cfd4-d136-4954-9c08-f7a84bcdf2be.jpg?v=1723099347"},
    ]
  return (
        <div>
  
  <div className="newproducts">
      {fragnance.map((item) => (
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

export default Fragnance

