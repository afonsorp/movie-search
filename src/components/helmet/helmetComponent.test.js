import { render, waitFor } from "@testing-library/react";
import { HelmetComponent } from "./helmetComponent";

const params = {
  title: "Title",
  description: "Description",
};

test("sets the page title and meta description using Helmet", async () => {
  render(<HelmetComponent {...params} />);

  await waitFor(() => {
    expect(document.title).toBe(`Movie Search | ${params.title}`);
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription).toHaveAttribute("content", params.description);
  });
});
