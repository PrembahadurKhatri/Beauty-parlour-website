
import React ,{createContext,useState,useEffect} from 'react';
// 1️⃣ Create the global CartContext 
export const CartContext=createContext();


// 2️⃣ CartProvider wraps your app and provides global cart state
 export const CartProvider = ({children}) =>{


  // Load cart from localStorage on app load
  const [cart,setCart] =useState(() =>{
    const savedCart=localStorage.getItem('cart');
    return savedCart ?JSON.parse(savedCart):[];
  });


   // Save cart to localStorage whenever cart changes
 useEffect(()=>{
  localStorage.setItem('cart',JSON.stringify(cart));
 },[cart]);


  // ADD TO CART
 const addToCart = (product) =>{
  const existitem =cart.find((item)=>item.id === product.id);
  if(existitem){
     // If already exists, increase quantity
    setCart(cart.map(item =>item.id === product.id?
      {...item,quantity:item.quantity+1}:item));
  }
  else{
     // Add new item with quantity 1
    setCart([...cart,{...product,quantity:1}]);
  }
 };
 //increase quantity ko lagi
 const increaseQuantity = (id) =>{
  setCart(cart.map(item =>
    item.id ===id?
    {...item,quantity:item.quantity+1}:item
  ));
 }
 //decrease ko lagi
const decreaseQuantity = (id) =>{
  setCart(cart.map(item =>
    item.id ===id && item.quantity > 1
    ?{...item,quantity:item.quantity-1}:item
  ));
};

const totalprice =cart.reduce((total,item) => total+item.quantity*item.price,0);
const totalitem =cart.reduce((total,item) => total+item.quantity,0);
const removeitem = (id) =>{setCart(cart.filter(item =>item.id !==id))};

const clearcart =() =>{setCart([])};
 const checkout =() => {alert("Order placed sucessfully ");setCart([]);};
  // Provide all functions and state to the app
  return (
<CartContext.Provider value={{
  cart,addToCart,increaseQuantity,decreaseQuantity,removeitem,totalprice,totalitem,checkout,clearcart}}>
    {children}
</CartContext.Provider>
  );
};

