import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  appContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "whitesmoke",
  },
  searchInputContainer: {
    width: "100%",
    justifyContent: "center",
    height: 60,
    display: "flex",
    paddingTop: 20,
    marginBottom: 20,
  },
  searchInput: {
    width: "50%",
    marginBottom: 20,
  },
  movieListContainer: {
    minHeight: 600,
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: "black",
    backgroundColor: "lightblue",
    borderRadius: 14,
  },
  emptyMessageContainer: {
    height: 300,
    width: "90%",
    backgroundColor: "lightblue",
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  movieCard: {
    maxWidth: 300,
    margin: "auto",
    borderWidth: 0.5,
    borderColor: "gray",
    borderStyle: "groove",
    borderRadius: 14,
  },
  emptyPosterContainer: {
    height: 320,
    display: "flex",
    alignItems: "center",
    justfifyContent: "center",
  },
  cardContent: {
    padding: 4,
    paddingLeft: 12,
  },
  movieTitle: {
    fontSize: "1em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  actionButton: {
    textTransform: "none",
    borderRadius: 14,
  },
  resultsText: {
    marginBottom: 16,
    fontSize: 24,
    "& span": {
      fontWeight: "bold",
    },
  },
});
