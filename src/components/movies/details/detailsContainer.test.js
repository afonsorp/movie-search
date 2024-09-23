import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { DetailsContainer } from "./detailsContainer";

const MOCK_DATA = {
  Title: "Alien",
  Year: "1979",
  imdbID: "tt0078748",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  Plot: "After investigating a mysterious transmission of unknown origin, the crew of a commercial spacecraft encounters a deadly lifeform.",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "8.5/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "93%",
    },
    {
      Source: "Metacritic",
      Value: "89/100",
    },
  ],
  Genre: "Horror, Sci-Fi",
  Runtime: "117 min",
  Director: "Ridley Scott",
  Actors: "Sigourney Weaver, Tom Skerritt, John Hurt",
};

test("must have title, plot, actors, director and image", () => {
  render(
    <MemoryRouter>
      <DetailsContainer {...MOCK_DATA} />
    </MemoryRouter>
  );
  const title = screen.getByRole("heading", { name: /alien/i });
  const info = screen.getAllByRole("paragraph");
  const image = screen.getByRole("img");

  expect(title).toBeInTheDocument();
  expect(info).toHaveLength(3);
  expect(image).toBeInTheDocument();
});
