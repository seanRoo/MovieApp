import { renderHook } from "@testing-library/react-hooks";
import useFetchMovies from "./useFetchMovies.hook";

const mockMovies = [
  { Poster: "test src", Title: "Star Wars", Year: 1998 },
  { Poster: "test src", Title: "Shrek", Year: 2002 },
  { Poster: "test src", Title: "BladeRunner", Year: 2020 },
  { Poster: "test src", Title: "Back to the future", Year: 1994 },
];

describe("useFetchMovies", () => {
  test("returns correct data after successful API call", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ Search: mockMovies }),
      })
    );

    const expectedResponse = {
      error: false,
      movies: [
        { Poster: "test src", Title: "Star Wars", Year: 1998 },
        { Poster: "test src", Title: "Shrek", Year: 2002 },
        { Poster: "test src", Title: "BladeRunner", Year: 2020 },
        { Poster: "test src", Title: "Back to the future", Year: 1994 },
      ],
    };
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchMovies({ query: "" })
    );

    await waitForNextUpdate();
    expect(result.current).toEqual(expectedResponse);
  });

  test("returns error and empty array after unsuccessful API call", async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error()));

    const expectedResponse = {
      error: true,
      movies: [],
    };
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchMovies({ query: "" })
    );

    await waitForNextUpdate();
    expect(result.current).toEqual(expectedResponse);
  });
});
