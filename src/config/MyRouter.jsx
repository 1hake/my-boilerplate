import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "../layout/Layout";
import Main from "../pages/Main";
import Setup from "./Setup";
import About from "../pages/About";

export default function MyRouter() {
  return (
    <Router>
      <Setup>
        <Layout>
          <Switch>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/">
              <Main></Main>
            </Route>
          </Switch>
        </Layout>
      </Setup>
    </Router>
  );
}
