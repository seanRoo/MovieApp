import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BiMoviePlay } from "react-icons/bi";
import useStyles from "../App.styles";

const Movie = ({ movie: { Poster, Title, Year } }) => {
  const classes = useStyles();
  return (
    <Card className={classes.movieCard}>
      {Poster && Poster !== "N/A" && (
        <CardMedia component="img" height="340" image={Poster} />
      )}
      {!Poster ||
        (Poster === "N/A" && (
          <div className={classes.emptyPosterContainer}>
            <BiMoviePlay style={{ fontSize: 100 }} />
          </div>
        ))}
      <CardContent className={classes.cardContent}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className={classes.movieTitle}
        >
          {Title}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          style={{ fontSize: "1em" }}
        >
          {Year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          className={classes.actionButton}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default Movie;
