import React from "react";
import { Grid } from "@material-ui/core";
import Movie from "../elements/Movie";
import useStyles from "../App.styles";

const MovieList = ({ movies }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.movieListContainer}>
      {movies?.map((movie, index) => {
        return (
          <Grid
            item
            xs={6}
            sm={3}
            md={3}
            key={`movie-${index}`}
            data-testid={`movie-${index}`}
          >
            <Movie movie={movie} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MovieList;
