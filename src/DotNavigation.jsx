import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import WhiteSpace from "./shared/WhiteSpace";
import { useMediaQuery } from "react-responsive";

const useStyle = makeStyles({
  root: {
    width: "7%",
    position: "fixed",
    top: "50%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  mobileRoot: {
    width: "10%",
    position: "fixed",
    top: "85%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  activeDot: {
    transition: "0.3s ease",
    height: "20px",
    width: "20px",
    backgroundColor: "white",
    borderRadius: "100%"
  },
  dot: {
    transition: "0.3s ease",
    height: "10px",
    width: "10px",
    backgroundColor: "white",
    borderRadius: "100%"
  }
});

function scrollToRef(ref) {
  window.scrollTo(0, ref.current.offsetTop - window.innerHeight * 0.1);
}

function Dot(props) {
  const [open, setOpen] = useState(false);
  const currentPage = useSelector(state => state.currentPage);
  const ref = useSelector(state => state[props.name]);
  const classes = useStyle();
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => scrollToRef(ref)}
      style={{ backgroundColor: props.color }}
      className={
        open || currentPage === props.name ? classes.activeDot : classes.dot
      }
    ></div>
  );
}

function DotNavigation(props) {
  const classes = useStyle();
  const isLarge = useMediaQuery({
    query: "(min-width: 926px)"
  });
  return (
    <div className={isLarge ? classes.root : classes.mobileRoot}>
      <Dot color={"#00FFBE"} name={"le projet"} />
      <WhiteSpace />
      <Dot color={"#453df5"} name={"le lab"} />
      <WhiteSpace />
      <Dot color={"#ffef51"} name={"les medias"} />
    </div>
  );
}

export default DotNavigation;
