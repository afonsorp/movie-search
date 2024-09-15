import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Search } from "./search";
import { getMovies } from "../services";
jest.mock("../services");

const MOCK_DATA = [
  {
    Title: "Alien",
    Year: "1979",
    imdbID: "tt0078748",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  },
];

const params = {
  onMovieResult: jest.fn(),
  startLoading: jest.fn(),
  stopLoading: jest.fn(),
  currentPage: 1,
  setCurrentPage: jest.fn(),
};

test("should have search box", () => {
  render(
    <MemoryRouter>
      <Search {...params} />
    </MemoryRouter>
  );

  const elm = screen.getByRole("textbox");
  expect(elm).toBeInTheDocument();
});

test("when writing on input it must call startLoading and onMovieResult", async () => {
  render(
    <MemoryRouter>
      <Search {...params} />
    </MemoryRouter>
  );

  const elm = screen.getByRole("textbox");
  await userEvent.click(elm);
  await userEvent.keyboard("alien");

  expect(params.startLoading).toHaveBeenCalled();
});

test("should make request to api when writing on input, then call onMovieResult", async () => {
  getMovies.mockResolvedValue(MOCK_DATA);

  render(
    <MemoryRouter>
      <Search {...params} />
    </MemoryRouter>
  );

  const elm = screen.getByRole("textbox");
  await userEvent.click(elm);
  await userEvent.keyboard("alien");

  await waitFor(() => {
    expect(params.onMovieResult).toHaveBeenCalled();
    expect(params.onMovieResult).toHaveBeenCalledWith(MOCK_DATA);
  });
});
