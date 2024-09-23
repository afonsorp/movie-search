import React from "react";
import PropTypes from "prop-types";
import useFavorites from "../../favorites/hooks/useFavorites";
import { ListItem } from "./listItem";
import "./list.less";

export const List = ({ movies }) => {
  const { favorites, setFavorites } = useFavorites();
  return (
    <>
      <h1 className="m-list__title">Movie List</h1>
      <ul className="m-list__container">
        {movies.map((movie) => (
          <ListItem
            key={movie.imdbID}
            movie={movie}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </ul>
    </>
  );
};

List.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})),
};

export default List;
