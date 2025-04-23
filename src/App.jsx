
import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";
import CartModal from "./components/CartModal/CartModal";
import ProfileModal from "./components/ProfileModal/ProfileModal";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen,setIsProfileOpen]=useState(false);
  const [user,setUser]=useState({
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main Street, City, Country",
  })

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const delFromCart=(product)=>{
    const ncart=cart.filter((c)=> c.id !== product.id);
    setCart(ncart);
  };

  const updateUser = (newUserData) => {
    setUser(newUserData);
  };

  return (
    <>
      <Header cartCount={cart.length} 
      onCartClick={() => setIsCartOpen(true) } 
      onProfileClick={() => setIsProfileOpen(true)}
      />
      <ProductList addToCart={addToCart} />
      {isCartOpen && 
      <CartModal 
      cartItems={cart} 
      delFromCart={delFromCart} 
      onClose={() => setIsCartOpen(false)} />}

      {isProfileOpen && (
        <ProfileModal
          user={user}
          onSave={updateUser}
          onClose={() => setIsProfileOpen(false)}
        />
      )}  
    </>
  );
};

export default App
