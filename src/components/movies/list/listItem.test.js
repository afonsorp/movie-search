import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import ListItem from "./listItem";

const MOCK_DATA = {
  Title: "Alien",
  Year: "1979",
  imdbID: "tt0078748",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
};

const params = {
  movie: MOCK_DATA,
  setFavorites: jest.fn(),
  favorites: [],
};

test("should receive a list of movies and add them to the list", () => {
  render(
    <MemoryRouter>
      <ListItem {...params} />
    </MemoryRouter>
  );
  const listItems = screen.getByRole("listitem");
  expect(listItems).toBeInTheDocument();
});

test("should have one title one image and two actions (favorites and details)", () => {
  render(
    <MemoryRouter>
      <ListItem {...params} />
    </MemoryRouter>
  );
  const title = screen.getByRole("heading");
  const image = screen.getByRole("img");
  const favButton = screen.getByTitle(/favorite/i);
  const detailButton = screen.getByTitle(/details/i);
  const elements = [title, image, favButton, detailButton];

  for (let element of elements) {
    expect(element).toBeInTheDocument();
  }
});

test("should call setFavorites when icon is clicked", async () => {
  render(
    <MemoryRouter>
      <ListItem {...params} />
    </MemoryRouter>
  );

  const favButton = screen.getByTitle(/favorite/i);
  await userEvent.click(favButton);
  expect(params.setFavorites).toHaveBeenCalled();
});

test("should have correct href (details)", async () => {
  render(
    <MemoryRouter>
      <ListItem {...params} />
    </MemoryRouter>
  );

  const detailButton = screen.getByTitle(/details/i);

  expect(detailButton).toHaveAttribute(
    "href",
    `/details/${params.movie.imdbID}`
  );
});
