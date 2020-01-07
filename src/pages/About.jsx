import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  text: {
    fontSize: "2em",
    fontFamily: "Barlow",
    fontWeight: "bold",
    color: "white"
  }
});
function About(props) {
  const classes = useStyles();
  return <h1 className={classes.text}>There is nothing to see...</h1>;
}

export default About;
