import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { List } from "./list";

const MOCK_DATA = [
  {
    Title: "Alien",
    Year: "1979",
    imdbID: "tt0078748",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  },
  {
    Title: "Alien³",
    Year: "1992",
    imdbID: "tt0103644",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTNiYmQzNTctNzAyZC00ODY2LWE3ZjgtODU1NDA0NGI5ZDY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Alien: Covenant",
    Year: "2017",
    imdbID: "tt2316204",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzVkMjRhNzctOGQxMC00OGE2LWJhN2EtNmYyODRiMDNlM2ZmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
];

test("should receive a list of movies and add them to the list", async () => {
  render(
    <MemoryRouter>
      <List movies={MOCK_DATA} />
    </MemoryRouter>
  );
  const listItems = await screen.findAllByRole("listitem");
  expect(listItems).toHaveLength(3);
});
