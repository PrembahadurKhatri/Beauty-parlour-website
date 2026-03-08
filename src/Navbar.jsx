import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from './CartContext';
const Navbr = () => {
  const navigate = useNavigate();
  const goToPrivacyPolicy = () => { navigate('/privacy-policy');}
  const goToHome = () => {navigate('/');}
  const goToFAQ = () => {navigate('/faq');}
  const goToStore = () => { navigate('/store'); }
  const goToSale = () => {navigate('/sale');}
  const goToSkincare = () => {navigate('/skincare');}
  const goToMakeup = () => {navigate('/makeup');}
  const goToHairBody = () => {navigate('/hair-body'); }
  const goToAccessories = () => {navigate('/accessories'); }
  const goToHealth = () => {navigate('/health');}
  const goToFragnance = () => {navigate('/fragnance'); }
  const goToLogin = () => {navigate('/login');}
  const [search, setSearch] = useState("");
  const { totalitem } = useContext(CartContext);
  const goTo = (path) => navigate(path);
  return (
    <div>
      {/* TOP NAV */}
      <div className='nav'>
        <div className='image'>
          <a target='_blank' href="https://www.instagram.com/obsession_cosmetics/">
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/415/non_2x/instagram-logo-instagram-icon-transparent-free-png.png" alt="instagram" width={40} />
          </a>
          <a target='_blank' href="https://www.facebook.com">
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png" alt="facebook" width={40} />
          </a>
          <a target='_blank' href="https://www.gmail.com">
            <img src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png" alt="Gmail" width={40} />
          </a>
        </div>

        <p className="delivery-text">Get Express Delivery all over Nepal.</p>

        <div className='top-buttons'>
          <button className='btn' onClick={goToStore}>Our Stores</button>
          <button className='btns' onClick={goToPrivacyPolicy}>Privacy Policy</button>
          <button className='btns' onClick={goToFAQ}>FAQ</button>
        </div>
      </div>

      {/* LOGO + SEARCH + ICONS */}
      <div className='nav-buttom'>
        <div className='nav-left'>
          <button className='btn' onClick={goToHome}><img src="https://png.pngtree.com/png-vector/20240607/ourmid/pngtree-gold-gradient-womens-hair-salon-logo-design-png-image_12617839.png" width={100} alt="logo" /></button>
          <button className='bttn' onClick={goToStore}>Our Shop</button>
          <button className='bttn' onClick={goToSale}>On Sale</button>
        </div>

        <div className='gaps'>
          <input type="text" placeholder='Search products'
            value={search} onChange={(e) => setSearch(e.target.value)}
            className='inp' />

          <button className='red'
            onClick={() => navigate(`/sale?search=${search}`)}
          >Search</button>
        </div>

        <div className='gapa'>
           {/* CART BUTTON WITH COUNT */}
          <button className='btn' onClick={() => goTo('/cart')} style={{ position: 'relative' }}>
            <img src="https://img.icons8.com/glyph-neue/1200/bag-front-view.jpg" alt="bag" width={30} />
            {totalitem > 0 && <span className="cart-count">{totalitem}</span>}
          </button>


          <button className='btn'><img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" alt="profile" width={30}
            onClick={goToLogin}
          /></button>
        </div>
      </div>

      {/* CATEGORY BUTTONS + COUPON */}
      <div className='third-nav'>
        <div className='category-buttons'>
          <button className='Btn' onClick={goToSkincare}>Skincare</button>
          <button className='Btn' onClick={goToMakeup}>Makeup</button>
          <button className='Btn' onClick={goToHairBody}>Hair & Body</button>
          <button className='Btn' onClick={goToHealth} >Health & Wellness</button>
          <button className='Btn' onClick={goToFragnance}>Fragrance</button>
          <button className='Btn' onClick={goToAccessories}>Accessories</button>
        </div>
        <p className='coupen'>COUPON CODE: ENJOY100</p>
      </div>
    </div>
  )
}

export default Navbr


/*
import React, { useState } from 'react'
const [search, setSearch] = useState('');
<div className='gaps'>
  <input
    type="text"
    placeholder='Search products'
    className='inp'
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <button
    className='red'
    onClick={() => navigate(`/sale?search=${search}`)}
  >
    Search
  </button>
</div>



*/