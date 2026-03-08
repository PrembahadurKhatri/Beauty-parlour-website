import React,{useContext} from 'react'
import { CartContext } from './CartContext'

const Health = () => {
    const {addToCart} = useContext(CartContext);
  const health = [
    { id: 10, name: "Serum ", price: 1000, image: "https://img.drz.lazcdn.com/static/np/p/5b21a297db1fcf087b20ce36b76843c7.jpg_720x720q80.jpg" },
    { id: 11, name: "Cleansers", price: 800, image: "https://en-chatelaine.mblycdn.com/ench/resized/2023/08/w767/best-beauty-products-august-2023-the-body-shop-camomile-jelly-one-step-cleanser.jpg" },
    { id: 12, name: "Maxipeel Cleanser", price: 5000, image: "https://shopsuki.ph/cdn/shop/files/4800119220292_1_1024x.png?v=1713428185" },
  ]
  return (
    <div>

      <div className="newproducts">
        {health.map((item) => (
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

export default Health
