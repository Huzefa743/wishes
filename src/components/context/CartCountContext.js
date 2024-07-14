// FavoriteCountContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as API from "../../apiservice/services";
import { useNavigate } from 'react-router-dom';


const CartCountContext = createContext();

export function useCartCount() {
  return useContext(CartCountContext);
}

export function CartCountProvider({ children }) {
    console.log("cart count provider called", children)
    const token = localStorage.getItem("token");
    console.log("here ist he token value", token)

  const [cartCount, setCartCount] = useState(0);

  let navigate = useNavigate()
    


  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  const updateCartCount = async () => {
    console.log("Function called..")
    try {
      const token = localStorage.getItem("token");
      
      if (token) {
        const response = await API.getCountOfCartItem();
        console.log("Service response for cart count",)
        setCartCount(response.data.data);
      } else {
       // navigate('/'); // Redirect to the login page when the token is not available
      }
    } catch (error) {
      // Handle errors if needed
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    updateCartCount();
    
  }, []);

  if (loading) {
    // Return loading UI or any other UI state you prefer while loading
    return <div>Loading...</div>;
  }
 

  return (
    <CartCountContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartCountContext.Provider>
  );
}
