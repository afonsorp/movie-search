import { render, screen } from "@testing-library/react";
import { Loading } from "./loading";

test("should show loading component", () => {
  render(<Loading loading={true} />);
  const loadingElement = screen.getByRole("generic", { name: /loading/i });
  expect(loadingElement).toBeInTheDocument();
});

test("should NOT show loading component", () => {
  render(<Loading loading={false} />);
  const loadingElement = screen.queryByRole("generic", { name: /loading/i });
  expect(loadingElement).toEqual(null);
});
