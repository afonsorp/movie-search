import React from "react";
import useLoading from "../../loading/hooks/useLoading";
import { Loading } from "../../loading/loading";
import useFetchDetails from "./hooks/useFetchDetails";
import { Message } from "../../message/message";
import { DetailsContainer } from "./detailsContainer";
import { HelmetComponent } from "../../helmet/helmetComponent";

export const Details = () => {
  const { loading, stopLoading } = useLoading(true);
  const { details, error } = useFetchDetails(stopLoading);
  const {
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
  } = details;
  return (
    <>
      <HelmetComponent
        title={`${Title || "Details"}`}
        description="Movie Search Details Page"
      />
      <Loading loading={loading} />
      {!loading && error && <Message message={error} />}
      {details.imdbID && (
        <DetailsContainer
          imdbID={imdbID}
          Year={Year}
          Plot={Plot}
          Title={Title}
          Ratings={Ratings}
          Genre={Genre}
          Poster={Poster}
          Runtime={Runtime}
          Actors={Actors}
          Director={Director}
        />
      )}
    </>
  );
};

export default Details;
