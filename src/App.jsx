import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Privacypolicy from './Privacypolicy';
import Sale from './Sale';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';
import Newproduct from './Newproduct';
import FAQ from './FAQ';
import Store from './Store';
import Skincare from './Skincare';
import Makeup from './Makeup';
import Hair from './Hair';
import Accesories from './Accesories';
import Health from './Health';
import Fragnance from './Fragnance';
import Categories from './Categories';
import Login from './Login';
import { CartContext, CartProvider } from './CartContext';
import Cart from './Cart';
function App() {
  return (
    <CartProvider>
      <Router>

        {/* ✅ Navbar now appears on ALL pages */}
        <Navbar />

        <Routes>

          <Route path="/" element={
            <>
              <Slider />
              <Newproduct />
            </>
          } />

          <Route path="/faq" element={<FAQ />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/hair-body" element={<Hair />} />
          <Route path="/accessories" element={<Accesories />} />
          <Route path="/health" element={<Health />} />
          <Route path="/fragnance" element={<Fragnance />} />
          <Route path="/store" element={<Store />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          <Route path='/login' element={<Login />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>

        {/* ✅ Footer also global */}
        <Footer />

      </Router>
    </CartProvider>
  );
};
export default App;