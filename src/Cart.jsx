import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './App.css'; 

const Cart = () => {
  const { cart, totalitems, totalprice, removeitem, increaseQuantity, decreaseQuantity, clearcart, checkout } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>My Cart ({totalitems} items)</h2>
      
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img"/>
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>Rs {item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeitem(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total Price: Rs {totalprice}</h3>
            <div className="cart-buttons">
              <button className="checkout-btn" onClick={checkout}>Checkout</button>
              <button className="clear-btn" onClick={clearcart}>Clear Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;