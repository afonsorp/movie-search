import { render, screen } from "@testing-library/react";
import { FavoriteIcon } from "./favoriteIcon";
import userEvent from "@testing-library/user-event";

const params = {
  favorites: ["1313", "12313", "353535"],
  id: "123121",
  setFavorites: jest.fn(),
};

test("should show icon", () => {
  render(<FavoriteIcon {...params} />);
  const favButton = screen.getByTitle(/Favorite/i);
  expect(favButton).toBeInTheDocument();
});

test("should call setFavorites function on click", async () => {
  render(<FavoriteIcon {...params} />);
  const favButton = screen.getByTitle(/Favorite/i);
  await userEvent.click(favButton);
  expect(params.setFavorites).toHaveBeenCalled();
});
