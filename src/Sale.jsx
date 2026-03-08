import React,{useContext} from 'react'
import { CartContext } from './CartContext'

import { useLocation } from 'react-router-dom'

const Sale = () => {
const location = useLocation();
const queryParams =new URLSearchParams(location.search);
const search = queryParams.get("search") || "";

  const {addToCart} = useContext(CartContext);


const itemavailable = [
    {id:1, name: "Cetaphil", price: 1000, image: "https://www.epharmacy.com.np/content/images/thumbs/65df168a4a13c8d6e9440583_cetaphil-gentle-skin-cleanser-500ml.jpeg"},
    {id:2, name: "Cetaphil oily skin", price: 1200, image: "https://aljawaher.online/cdn/shop/files/320054032_885c671f-8d96-4ae3-893a-142b590cae07.jpg?v=1739772168"},
    {id:3, name: "Papaya sunscream", price: 1500, image: "https://static-01.daraz.com.np/p/e62852c822ddd97a59401ddb8f10bdb0.jpg"},
    {id:4, name: "Himalayan Herbal cream", price: 800, image: "https://www.epharmacy.com.np/content/images/thumbs/5e09d822a47b590001f1a66f_himalaya-purifying-neem-face-wash-gel-50ml.jpeg"},
    {id:5, name: "Clean and Clear facewash", price: 2500, image: "https://img.drz.lazcdn.com/static/np/p/fd33f51845e2c63d967a61d8c3f400f4.jpg_720x720q80.jpg"},
    {id:6, name: "Himalayan skin cream", price: 8000, image: "https://static-01.daraz.com.np/p/a0a6dc0513d38137217a2dbeb860942e.jpg"},
    {id:7, name: "Nivea Moisturizer", price: 900, image: "https://static-01.daraz.com.np/p/7f3f71143f8893ef4a8e0621e986746e.jpg"},
    {id:8, name: "Joy Alover Cream", price: 700, image: "https://img.drz.lazcdn.com/g/kf/S7c89e153ed724bdba14f674bfc2bd1eaa.jpg_720x720q80.jpg"},
    {id: 9, name: "Skincare",price:600 ,image: "https://backend.bmgpharmacy.com/media/catalog/product//s/o/solo_130.jpg" },
    {id: 10, name: "Serum ",price:1000 , image: "https://img.drz.lazcdn.com/static/np/p/5b21a297db1fcf087b20ce36b76843c7.jpg_720x720q80.jpg" },
    {id: 11, name: "Cleansers",price:800 , image: "https://en-chatelaine.mblycdn.com/ench/resized/2023/08/w767/best-beauty-products-august-2023-the-body-shop-camomile-jelly-one-step-cleanser.jpg" },    
    {id:12, name: "Maxipeel Cleanser", price: 5000, image: "https://shopsuki.ph/cdn/shop/files/4800119220292_1_1024x.png?v=1713428185"},
    {id:13, name: "Sunsilk Shampoo", price: 1100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_pgogWq2dU3d8HhGwkbC_HrhhqMtewj9Kw&s"},
    {id:14, name: "Head and shoulder", price: 3000, image: "https://np-live-21.slatic.net/kf/S5b6fc46b229e49cbac1493e7090d31b0k.jpg"},
    {id:15, name: "Fogg Perfume", price: 1300, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kKtDHvnART3ApgnHFrTdZYZ4SMsjs1URBw&s"},
    {id:16, name: "Engage Perfume", price: 1600, image: "https://www.nepal.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTF3TGgwamhQTUwuX1NTNDAwXy5qcGc.jpg"},
    {id:17, name: "Engage Pocket Perfume", price: 900, image: "https://dealayo.com/media/catalog/product/e/n/engage-pocket-perfume-cool-marine-17ml_m_-1-nepal.jpg?width=265&height=265&store=default&image-type=image"},
    {id:18, name: "Wildstone", price: 2200, image: "https://www.wildstone.in/cdn/shop/files/Artboard_1_07c0cfd4-d136-4954-9c08-f7a84bcdf2be.jpg?v=1723099347"},
    {id:19, name: "Butterfly Necklace", price: 1800, image: "https://simongjewelry.com/cdn/shop/files/butterfly-pendant-necklace-in-18k-gold-with-diamonds-lp4815-2t-18k-x-2t-369924_1024x.jpg?v=1729951673"},
    {id:20, name: "Floral Necklace", price: 1400, image: "https://shopgirlscrew.com/cdn/shop/files/FL-N392-RCOMPRESSED.jpg?v=1720420625&width=1800"},
    {id:21, name: "Heart Necklace",price:250 , image: "https://gem-noir.com/cdn/shop/files/image-1_6239ba25-c882-4872-a004-470b2cdbca6c.webp?v=1758627535" },
    {id:22, name: "Ring", price: 1700, image: "https://ganapatijewellers.com/wp-content/uploads/2025/11/2-hearts.jpg"},
    {id:23, name: "Couple Ring", price: 600, image: "https://i.etsystatic.com/50708543/r/il/fc1129/5886538147/il_500x500.5886538147_272k.jpg"},
    {id:24, name: "Gucci Bag", price: 800, image: "https://cdn-images.farfetch-contents.com/19/24/88/02/19248802_56127200_600.jpg"},
    {id:25, name: "CHANAL bag", price: 2000, image: "https://www.chanel.com/images/as/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_428/-80070064.jpg"},
    {id:26, name: "Hand Bag", price: 2500, image: "https://img.freepik.com/free-photo/pink-handbags_1203-7829.jpg?semt=ais_rp_progressive&w=740&q=80"},
    {id:27, name: "Pilgrim Black Scandal Eyeliner Pencil", price: 3000, image: "https://img.drz.lazcdn.com/static/np/p/d3ba8ddeea5bf1d7513ece7e1e07a63f.jpg_720x720q80.jpg"},
    {id:28, name: "Rimmel London Lasting Finish Lipstick", price: 3500, image: "https://static.beautytocare.com/media/catalog/product/r/i/rimmel-london-lasting-finish-lipstick-170-4g.jpg"},
    {id:29, name: "Lakme Lipstick", price: 4000, image: "https://img.drz.lazcdn.com/static/np/p/e7a9338d1b1299dffbd0dbfd60fc0c8d.jpg_720x720q80.jpg"},
    { id:30, name: "Lipstick",price:400 ,image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6sZjBMwGckm1bPR6xEXRWYpNvlXTUHEVAyp3mEMSaWeH-9Lwd_Gxb20SdCPOVBsFV0gKzsqb_AWQ_f49Wiwm9ERuqwukOc9V9xzOyNA8f4_DwKSTcVdVrhbp-qw5ei0hcwvkFTjdg6wY_/s1600/cover+girl+flamed+out+mascara.png" }
    ]
const filterProducts = itemavailable.filter((item) =>
item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
); 
  return (


  <div className="newproducts">
    {filterProducts.length > 0? (
      filterProducts.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.name} />
          <div className="card-body">
            <h3>{item.name}</h3>
            <p>Rs {item.price}</p>
            <button className='add' onClick={() => addToCart(item)}>🛒 Add to cart</button>
          </div>
        </div>
      )) 
    ):(
     <p style={{ padding: '20px', fontSize: '18px' }}>
            No products found for "{search}"
          </p>
        )}
      </div>
    
  );
};

export default Sale
/*
1️⃣ useLocation:
import { useLocation } from 'react-router-dom';

react-router-dom ma useLocation hook ho.

Yo hook le current URL ko info dincha.

Example: URL ma /sale?search=cetaphil cha bhane, useLocation() le yo sab info dina sakcha:

const location = useLocation();
console.log(location);

Output jaile pani something like:

{
  pathname: "/sale",
  search: "?search=cetaphil",
  hash: "",
  state: null,
  key: "abc123"
}

pathname → page ko path (/sale)

search → URL ko query string (?search=cetaphil)

2️⃣ URLSearchParams
const queryParams = new URLSearchParams(location.search);

location.search bhaye "?search=cetaphil" jasto string.

new URLSearchParams(location.search) le query string lai object jasto parse garera get() method use garna dincha.

3️⃣ .get("search")
const search = queryParams.get("search") || "";

queryParams.get("search") le URL ko search parameter ko value dincha.

Example: /sale?search=cetaphil → search = "cetaphil"

|| "" le empty string set garxa jaba URL ma search chaina bhane, bug naa aos bhanna.

✅ Summary

useLocation → current URL ko info lina.

URLSearchParams → URL ma bhako query parameters parse garna.

get("search") → URL ko search parameter ko value lina.

💡 So, timro Sale.jsx ma:

const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const search = queryParams.get("search") || "";

Yo le URL bata user le search box ma type gareko keyword lincha.

Ani filterProducts ma use garera matra relevant products dekhaune.

*/