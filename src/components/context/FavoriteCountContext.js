// FavoriteCountContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as API from "../../apiservice/services";
import { useNavigate } from 'react-router-dom';


const FavoriteCountContext = createContext();

export function useFavoriteCount() {
  return useContext(FavoriteCountContext);
}

export function FavoriteCountProvider({ children }) {
    console.log("favoritecount provider called", children)

  let navigate = useNavigate()
    

  const [favoriteCount, setFavoriteCount] = useState(0);

  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  const updateFavoriteCount = async () => {
    console.log("update favorite count called...")
    try {
      const token = localStorage.getItem("token");
      
      if (token) {
        const response = await API.getCountOfFavoriteItem();
        setFavoriteCount(response.data.data);
      } else {
       /// navigate('/'); // Redirect to the login page when the token is not available
      }
    } catch (error) {
      // Handle errors if needed
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    updateFavoriteCount();
    
  }, []);

  if (loading) {
    // Return loading UI or any other UI state you prefer while loading
    return <div>Loading...</div>;
  }

 

  return (
    <FavoriteCountContext.Provider value={{ favoriteCount, updateFavoriteCount }}>
      {children}
    </FavoriteCountContext.Provider>
  );
}
