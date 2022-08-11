import React from "react";
import { Typography } from "@material-ui/core";
import { FaTheaterMasks } from "react-icons/fa";
import useStyles from "../App.styles";

const EmptyMessageComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.emptyMessageContainer}>
      <FaTheaterMasks style={{ fontSize: 100 }} />
      <Typography component="h2" style={{ fontSize: 24 }}>
        No results found
      </Typography>
    </div>
  );
};

export default EmptyMessageComponent;
