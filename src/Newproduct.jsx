import React,{useContext} from 'react'
import { CartContext } from './CartContext'
const Newproduct = () => {
    const {addToCart} = useContext(CartContext);
    const newProduct = [
        { id: 19, name: "Butterfly Necklace",price:500 , image: "https://simongjewelry.com/cdn/shop/files/butterfly-pendant-necklace-in-18k-gold-with-diamonds-lp4815-2t-18k-x-2t-369924_1024x.jpg?v=1729951673" },
        { id: 1, name: "Cetaphil",price:1500, image: "https://www.epharmacy.com.np/content/images/thumbs/65df168a4a13c8d6e9440583_cetaphil-gentle-skin-cleanser-500ml.jpeg" },
        { id: 33, name: "Sunsilk",price:500, image: "https://www.milanwholesale.com/storage/products/2024/November/27/000_1732683242.jpg" },
        { id: 8, name: "Joy Alover Cream ",price:1500 , image: "https://images-static.nykaa.com/media/catalog/product/1/c/1c25b27NYJOY00000003_10.jpg?tr=w-500" },
        { id: 24, name: "Gucci Bag",price:5000, image: "https://cdn-images.farfetch-contents.com/19/24/88/02/19248802_56127200_600.jpg" },
        { id: 27, name: "Pilgrim Black  Eyeliner Pencil",price:800, image: "https://img.drz.lazcdn.com/static/np/p/d3ba8ddeea5bf1d7513ece7e1e07a63f.jpg_720x720q80.jpg" },
    ]
    return (
        <div>
            <div className='wi'>
            <h3 className='Blue'>Best Selling Products</h3>
            <p>Explore crowd favorites: top-rated essentials loved worldwide.</p>
            </div>
       <div className="newproducts">
      {newProduct.map((item) => (
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
export default Newproduct;