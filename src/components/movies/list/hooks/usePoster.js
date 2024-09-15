import posterImg from "../images/na.jpg";

export const getPoster = (Poster) => {
  return Poster === "N/A" ? posterImg : Poster;
};
