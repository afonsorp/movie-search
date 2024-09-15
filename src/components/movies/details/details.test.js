import { render, screen, waitFor } from "@testing-library/react";
import { Details } from "./details";
import useLoading from "../../loading/hooks/useLoading";
import useFetchDetails from "./hooks/useFetchDetails";
import { DetailsContainer } from "./detailsContainer";

jest.mock("../../loading/hooks/useLoading");
jest.mock("./hooks/useFetchDetails");
jest.mock("./detailsContainer");

const MOCK_DATA = {
  Title: "Alien",
  Year: "1979",
  imdbID: "tt0078748",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  Plot: "After investigating a mysterious transmission of unknown origin, the crew of a commercial spacecraft encounters a deadly lifeform.",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "8.5/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "93%",
    },
    {
      Source: "Metacritic",
      Value: "89/100",
    },
  ],
  Genre: "Horror, Sci-Fi",
  Runtime: "117 min",
};

const MOCK_ERROR = { details: {}, error: "Something went wrong" };

const MOCK_NO_DATA = { details: {}, error: null };

const MOCK_LOADING = { loading: true, stopLoading: jest.fn() };

const MOCK_NOT_LOADING = { loading: false, stopLoading: jest.fn() };

test("renders loading state initially", () => {
  useLoading.mockReturnValue(MOCK_LOADING);
  useFetchDetails.mockReturnValue(MOCK_NO_DATA);
  render(<Details />);

  const loadingElement = screen.getByRole("generic", { name: /loading/i });
  expect(loadingElement).toBeInTheDocument();
});

test("renders error message when error occurs", async () => {
  useLoading.mockReturnValue(MOCK_NOT_LOADING);
  useFetchDetails.mockReturnValue(MOCK_ERROR);
  render(<Details />);
  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
});

test("renders DetailsContainer when data is available", async () => {
  useLoading.mockReturnValue(MOCK_NOT_LOADING);
  useFetchDetails.mockReturnValue({
    details: MOCK_DATA,
    error: null,
  });

  DetailsContainer.mockImplementation(() => <div>{MOCK_DATA.Title}</div>);
  render(<Details />);
  await waitFor(() => screen.getByText(/alien/i));
  expect(screen.getByText(/alien/i)).toBeInTheDocument();
});
