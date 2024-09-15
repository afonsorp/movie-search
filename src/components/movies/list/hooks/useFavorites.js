import { useEffect, useState } from "react";
const KEY = "movie-search-favorites";

const useFavorites = () => {
  const value = JSON.parse(localStorage.getItem(KEY));
  const [favorites, setFavorites] = useState(value || []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem(KEY, JSON.stringify(favorites));
    }, 0);
  }, [favorites]);

  return {
    favorites,
    setFavorites,
  };
};

export default useFavorites;
