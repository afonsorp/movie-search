import { render, screen } from "@testing-library/react";
import { Message } from "./message";

test("should show message", () => {
  render(<Message />);
  const message = screen.getByRole("paragraph");
  expect(message).toBeInTheDocument();
});
