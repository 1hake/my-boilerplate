import React from "react";
import Header from "./layout/MyHeader";
import { makeStyles } from "@material-ui/core/styles";
import IntroText from "./layout/IntroText";
import WhiteSpace from "./shared/WhiteSpace";
import Showcase from "./layout/Showcase";
import Contact from "./layout/Contact";
import RapsodieTitle from "./components/RapsodieTitle";
import RapsodieGradient from "./components/RapsodieGradient";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#100f0c",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column"
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Header />
      <WhiteSpace />
      <RapsodieTitle text={"Viens nous checker"} />
      <WhiteSpace />
      <RapsodieGradient text={"Rap x Data"} />
      <WhiteSpace />
      <IntroText />
      <WhiteSpace />
      <Showcase />
      <WhiteSpace />
      <Contact />
      <WhiteSpace /> */}
    </div>
  );
}

export default App;
