import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  text: {
    fontSize: "2em",
    fontFamily: "Barlow",
    fontWeight: "bold",
    color: "white"
  }
});

function Main(props) {
  // const dispatch = useDispatch();
  const item = useSelector(state => state.item);
  const classes = useStyles();

  return <h1 className={classes.text}>Ready to get {item}!</h1>;
}

export default Main;
