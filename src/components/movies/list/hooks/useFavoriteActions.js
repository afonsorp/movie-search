import { useCallback, useMemo } from "react";

const useFavoriteActions = (id, favorites, setFavorites) => {
  const addToFavorites = useCallback(() => {
    setFavorites((old) => [...old, id]);
  }, [id, setFavorites]);

  const removeFromFavorites = useCallback(() => {
    setFavorites((old) => old.filter((elm) => elm !== id));
  }, [id, setFavorites]);

  const isFavorite = useMemo(() => {
    return favorites.includes(id);
  }, [favorites, id]);

  return {
    isFavorite,
    handleClick: isFavorite ? removeFromFavorites : addToFavorites,
  };
};

export default useFavoriteActions;
