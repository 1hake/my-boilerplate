import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  vertical: {
    width: "20px"
  },
  horizontal: {
    height: "10px"
  },
  bigHeight: { height: "40px" }
});

function WhiteSpace(props) {
  const classes = useStyles();
  return (
    <div className={props.size ? classes[props.size] : classes.horizontal} />
  );
}

export default WhiteSpace;
