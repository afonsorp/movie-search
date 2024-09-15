import { render, screen, waitFor } from "@testing-library/react";
import { Pagination } from "./pagination";
import userEvent from "@testing-library/user-event";

const params = {
  currentPage: 5,
  totalPages: 10,
  setCurrentPage: jest.fn(),
};

test("should show current and totalPages", () => {
  render(<Pagination {...params} />);
  const pagination = screen.getByText(
    `${params.currentPage}/${params.totalPages}`
  );
  expect(pagination).toBeInTheDocument();
});

test("must have 4 buttons", () => {
  render(<Pagination {...params} />);
  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(4);
});
