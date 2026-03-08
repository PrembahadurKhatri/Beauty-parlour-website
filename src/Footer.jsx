import React from 'react';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
const navigate =useNavigate();
  const goToPrivacyPolicy = () => {
    navigate('/privacy-policy');
  }
  const goToFAQ = () => {
    navigate('/faq');
  }
   const goToStore = () => {// Function to navigate to the Store page when the button is clicked
    navigate('/store');// Navigates to the '/store' route defined in the App component's Routes
  } 
  const goToSale = () => {// Function to navigate to the Sale page when the button is clicked
    navigate('/sale');// Navigates to the '/sale' route defined in the App component's Routes
  }
    const goToCategories = () =>{
      navigate('/categories');
    }
    const goToLogin =() =>{
      navigate('/login');
    }
    
  const goTo = (path) => navigate(path);
  const features = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/66/66841.png",
      title: "Free Shipping",
      desc: "All orders over Rs 3500"
    },
    {
      img: "https://freepngimg.com/save/70896-icons-money-bill-dollar-computer-bank-stock/1181x1181",
      title: "Cash on Delivery (INSIDE KATHMANDU VALLEY",
      desc: "Pay after you get it."
    },
    {
      img: "https://png.pngtree.com/png-clipart/20220117/original/pngtree-yellow-orange-warranty-shield-tick-check-mark-icon-png-psd-png-image_7126590.png",
      title: "100% Pivacy",
      desc: "Your Privacy is our concern"
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/754/754616.png",
      title: "Free Replacement",
      desc: "All order are freely replaced"
    }
  ];
  return (
    <div>
    <div className="footer">
      <div className="bck">
        {features.map((item, index) => (
          <div className="feature" key={index}>
            <img src={item.img} alt={item.title} width={40} />
            <div>
              <p className="bold">{item.title}</p>
              <span>{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="footer-second">
        <button className='nav-btn ' onClick={goToSale}>Our Shop</button>
        <button className='nav-btn'onClick={() => goTo('/cart')}>My Cart</button>
        <button className='nav-btn' onClick={goToCategories}>Categories</button>
        <button className='nav-btn' onClick={goToStore}>Our Stores</button>
    </div>
      <div className='nav-third'><img src="https://png.pngtree.com/png-vector/20240607/ourmid/pngtree-gold-gradient-womens-hair-salon-logo-design-png-image_12617839.png" alt="logo" width={150} />
      </div>
     <div className='blue'>
      <div className='nav-fourth'>
          <div className="footer-box">
        <h3>About Us</h3>
        <p>Obsession Cosmetics was born in 2014 .A beauty brand store is one of the 1st store in Nepal. Obsession cosmetics has grown to become the largest Nepal beauty retailer and the premier beauty destination for those looking for killer makeup without killing their wallet.</p>
   <div className='image'>
      <a target='_blank' href="https://www.instagram.com">
      <img src="https://static.vecteezy.com/system/resources/previews/018/930/415/non_2x/instagram-logo-instagram-icon-transparent-free-png.png" alt="instagram" width={40}/></a>
    <a target='_blank' href="https://www.facebook.com">
    <img src="https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png" alt="facebook" width={40}/></a>
   <a target='_blank' href="https://www.gmail.com">
    <img src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png" alt="Gmail" width={40}/></a>
    </div>
      </div>

      <div className="footer-box">
        <h3>Store Information</h3>
        <ul>
          <li>Bishalbazar, Kathmandu NEWROAD - 9813319958</li>
          <li>Kumaripati, Kathamandu - 9709288290</li>
          <li>Baneshwor, Kathmandu - 9810177976</li>
          <li>Durbarmarg, Kathmandu-9709020357</li>
          <li>D.B. COMPLEX, DHANGADHI (+977- 9768471070)</li>
          <li>+977-9834456765</li>
        </ul>
      </div>

      <div className="footer-box">
        <h3>Help & Support</h3>
        <ul>
          <li><button className='bot' onClick={goToFAQ}>FAQs</button></li>
           <li><button className='bot' onClick={goToLogin}>My Account</button></li>
            <li><button className='bot'>My Cart</button></li>
             <li><button className='bot' onClick={goToPrivacyPolicy}>Privacy Policy</button></li>
        </ul>
      </div>
      </div>
      </div>
      <div className="nav-last">
        Copyright 2024 © Obsession Cosmetics
      </div>
    </div>
  );
};

export default Footer;