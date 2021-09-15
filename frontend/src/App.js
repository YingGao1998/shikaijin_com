import "./App.css";
import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  title: {
    fontWeight: 700,
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  uwButton: {
    marginBlock: "3rem",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        hello,
      </Typography>
      <Typography variant="h3">I'm YingGao </Typography>
      
      <Typography variant="h5">Master of management</Typography>
      <Button
        size="large"
        variant="contained"
        color="primary"
        className={classes.uwButton}
        href="https://uwcssa.ca/"
      >
        UWCSSA
      </Button>
    </div>
  );
}

export default App;
