import { render, screen, within } from "@testing-library/react";
import MovieListContainer from "./MovieListContainer";

let mockMovies = [];

jest.mock("../hooks/useFetchMovies.hook", () => ({
  __esModule: true,
  default: () => ({ movies: mockMovies }),
}));

describe("MovieListContainer: results returned", () => {
  mockMovies = [
    { Poster: "test src", Title: "Star Wars", Year: 1998 },
    { Poster: "test src", Title: "Shrek", Year: 2002 },
    { Poster: "test src", Title: "BladeRunner", Year: 2020 },
    { Poster: "test src", Title: "Back to the future", Year: 1994 },
  ];
  it("should render results header correctly", () => {
    render(<MovieListContainer />);
    expect(screen.getByText("Results (4)")).toBeInTheDocument();
  });

  it("should render list of movies", () => {
    render(<MovieListContainer />);
    mockMovies.forEach((movie, index) => {
      const movieCard = screen.getByTestId(`movie-${index}`);
      expect(within(movieCard).getByText(movie.Title)).toBeInTheDocument();
      expect(within(movieCard).getByText(movie.Year)).toBeInTheDocument();
    });
  });
});

describe("MovieListContainer: no results", () => {
  it("should render empty message component", () => {
    mockMovies = [];
    render(<MovieListContainer />);
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });
});
