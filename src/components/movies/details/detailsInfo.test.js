import { render, screen } from "@testing-library/react";
import { DetailsInfo } from "./detailsInfo";
import useFavorites from "../../favorites/hooks/useFavorites";
import userEvent from "@testing-library/user-event";
jest.mock("../../favorites/hooks/useFavorites.js");

const params = {
  rating: "90/100",
  genre: "Comedy",
  imdbID: "tt4324",
  runtime: "90 min",
};

const setFavorites = jest.fn();
const MOCK_FAV_RETURN = {
  favorites: [],
  setFavorites,
};

test("should show favorites, ratings type and runtime", () => {
  useFavorites.mockReturnValue(MOCK_FAV_RETURN);
  render(<DetailsInfo {...params} />);
  const roleNames = ["Rating", "Genre", "RunTime"];
  const favButton = screen.getByTitle(/favorite/i);

  for (let name of roleNames) {
    const elm = screen.getByRole("generic", { name });
    expect(elm).toBeInTheDocument();
  }
  expect(favButton).toBeInTheDocument();
});
test("should call setFavorites function on click", async () => {
  useFavorites.mockReturnValue(MOCK_FAV_RETURN);
  render(<DetailsInfo {...params} />);
  const favButton = screen.getByTitle(/favorite/i);
  await userEvent.click(favButton);
  expect(setFavorites).toHaveBeenCalled();
});
