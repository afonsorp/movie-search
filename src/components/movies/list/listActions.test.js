import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ListActions } from "./listActions";
import userEvent from "@testing-library/user-event";

const params = {
  imdbID: "tt12134",
  setFavorites: jest.fn(),
  favorites: [],
};

test("should have two actions (favorites and details)", () => {
  render(
    <MemoryRouter>
      <ListActions {...params} />
    </MemoryRouter>
  );

  const favButton = screen.getByTitle(/favorite/i);
  const detailButton = screen.getByTitle(/details/i);
  const elements = [favButton, detailButton];

  for (let element of elements) {
    expect(element).toBeInTheDocument();
  }
});

test("should call setFavorites when icon is clicked", async () => {
  render(
    <MemoryRouter>
      <ListActions {...params} />
    </MemoryRouter>
  );

  const favButton = screen.getByTitle(/favorite/i);
  await userEvent.click(favButton);
  expect(params.setFavorites).toHaveBeenCalled();
});

test("should have correct href (details)", async () => {
  render(
    <MemoryRouter>
      <ListActions {...params} />
    </MemoryRouter>
  );

  const detailButton = screen.getByTitle(/details/i);

  expect(detailButton).toHaveAttribute("href", `/details/${params.imdbID}`);
});
