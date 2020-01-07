import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "10vh",
    position: "sticky",
    backgroundColor: "white",
    color: "black",
    width: "100%"
  },
  link: {
    textDecoration: "none!important",
    color: "black",
    fontSize: "1em",
    fontFamily: "Barlow",
    fontWeight: "bold"
  }
});

function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link className={classes.link} to="/">
        <h1>Home</h1>
      </Link>
      <Link className={classes.link} to="/about">
        <h1>About</h1>
      </Link>
    </div>
  );
}

export default Header;
