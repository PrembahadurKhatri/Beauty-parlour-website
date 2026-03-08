import React,{useContext} from 'react'
import { CartContext } from './CartContext'
const Hair = () => {
  const {addToCart} = useContext(CartContext);
    const hair= [
    {id:13, name: "Sunsilk Shampoo", price: 1100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_pgogWq2dU3d8HhGwkbC_HrhhqMtewj9Kw&s"},
    {id:14, name: "Head and shoulder", price: 3000, image: "https://np-live-21.slatic.net/kf/S5b6fc46b229e49cbac1493e7090d31b0k.jpg"},
    ]

  return (
    <div>
  
  <div className="newproducts">
      {hair.map((item) => (
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

export default Hair
