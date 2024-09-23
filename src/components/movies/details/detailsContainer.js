import React from "react";
import PropTypes from "prop-types";
import useNavigateBack from "./hooks/useNavigateBack";
import { DetailsInfo } from "./detailsInfo";
import { getPoster } from "../list/hooks/usePoster";
import { FaCircleLeft } from "react-icons/fa6";
import "./detailsContainer.less";

export const DetailsContainer = ({
  imdbID,
  Year,
  Plot,
  Title,
  Ratings,
  Genre,
  Poster,
  Runtime,
  Actors,
  Director,
}) => {
  const { navigateBack } = useNavigateBack();
  const rating = Ratings && Ratings.length ? Ratings[0].Value : "N/A";
  return (
    <article className="m-details__container">
      <div className="m-details__info">
        <FaCircleLeft
          aria-label="Go Back"
          className="m-button"
          onClick={navigateBack}
        />
        <h1 className="a-details__title">{`${Title} (${Year})`}</h1>
        <DetailsInfo
          imdbID={imdbID}
          rating={rating}
          genre={Genre}
          runtime={Runtime}
        />
        <h2 className="a-details__smallTitle">Plot</h2>
        <p className="a-details__paragraph">{Plot}</p>
        <h2 className="a-details__smallTitle">Actors</h2>
        <p className="a-details__paragraph">{Actors}</p>
        <h2 className="a-details__smallTitle">Director</h2>
        <p className="a-details__paragraph">{Director}</p>
      </div>
      <img
        alt={Title}
        className="a-details__image"
        src={getPoster(Poster)}
      ></img>
    </article>
  );
};

DetailsContainer.propTypes = {
  imdbID: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Plot: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Ratings: PropTypes.arrayOf(PropTypes.shape({})),
  Genre: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Runtime: PropTypes.string.isRequired,
  Actors: PropTypes.string.isRequired,
  Director: PropTypes.string.isRequired,
};

export default DetailsContainer;
