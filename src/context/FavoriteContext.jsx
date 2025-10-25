import React, { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (product) => {
    setFavorites((prevFavs) => {
      const exists = prevFavs.find((item) => item.id === product.id);
      if (exists) {
        return prevFavs.filter((item) => item.id !== product.id);
      } else {
        return [...prevFavs, product];
      }
    });
    console.log("Updated favorites:", favorites);
  };

  const removeFavorite = (id) => {
    setFavorites((prevFavs) => prevFavs.filter((item) => item.id !== id));
  };

  const totalFavorites = favorites.length;

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite, totalFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);
