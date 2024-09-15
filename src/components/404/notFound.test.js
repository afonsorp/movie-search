import { render, screen } from "@testing-library/react";
import { NotFound } from "./notFound";

test("should show 404 message", () => {
  render(<NotFound />);
  const message = screen.getByRole("paragraph");
  expect(message).toBeInTheDocument();
});
