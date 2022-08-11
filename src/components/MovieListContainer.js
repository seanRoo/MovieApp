import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import MovieList from "./MovieList";
import useFetchMovies from "../hooks/useFetchMovies.hook";
import EmptyMessageComponent from "../elements/EmptyMessageComponent";
import useStyles from "../App.styles";

const MovieListContainer = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");

  const { movies } = useFetchMovies({ query });

  return (
    <div className={classes.appContainer}>
      <div className={classes.searchInputContainer}>
        <TextField
          label="Search"
          size="small"
          variant="outlined"
          placeholder="Type to search"
          onChange={(e) => setQuery(e.target.value)}
          className={classes.searchInput}
        />
      </div>
      {movies?.length ? (
        <div style={{ width: "90%" }}>
          <Typography variant="h3" className={classes.resultsText}>
            Results ({movies?.length})
          </Typography>
          <MovieList movies={movies} />
        </div>
      ) : (
        <EmptyMessageComponent />
      )}
    </div>
  );
};

export default MovieListContainer;
