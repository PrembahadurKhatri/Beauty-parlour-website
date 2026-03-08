import React,{useContext} from 'react'
import { CartContext } from './CartContext'
const Makeup = () => {
   const {addToCart} = useContext(CartContext);
    const makeup=[
    {id:27, name: "Pilgrim Black Scandal Eyeliner Pencil", price: 3000, image: "https://img.drz.lazcdn.com/static/np/p/d3ba8ddeea5bf1d7513ece7e1e07a63f.jpg_720x720q80.jpg"},
    {id:28, name: "Rimmel London Lasting Finish Lipstick", price: 3500, image: "https://static.beautytocare.com/media/catalog/product/r/i/rimmel-london-lasting-finish-lipstick-170-4g.jpg"},
    {id:29, name: "Lakme Lipstick", price: 4000, image: "https://img.drz.lazcdn.com/static/np/p/e7a9338d1b1299dffbd0dbfd60fc0c8d.jpg_720x720q80.jpg"},
    { id:30, name: "Lipstick",price:400 ,image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6sZjBMwGckm1bPR6xEXRWYpNvlXTUHEVAyp3mEMSaWeH-9Lwd_Gxb20SdCPOVBsFV0gKzsqb_AWQ_f49Wiwm9ERuqwukOc9V9xzOyNA8f4_DwKSTcVdVrhbp-qw5ei0hcwvkFTjdg6wY_/s1600/cover+girl+flamed+out+mascara.png" }
    ]
  return (
      <div>
  
  <div className="newproducts">
      {makeup.map((item) => (
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

export default Makeup
