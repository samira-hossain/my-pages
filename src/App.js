import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path="*">
            <h1>Page not found!</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}
