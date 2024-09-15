import { render, screen } from "@testing-library/react";
import { Movies } from "./movies";
import { MemoryRouter } from "react-router-dom";

test("should have search box and instructions on render", () => {
  render(
    <MemoryRouter>
      <Movies />
    </MemoryRouter>
  );

  const elements = ["textbox", "paragraph"];

  for (let element of elements) {
    const elm = screen.getByRole(element);
    expect(elm).toBeInTheDocument();
  }
});
