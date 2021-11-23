import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from "./components/About";
import HarryPotter from "./components/HarryPotter";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/HarryPotter" exact component={HarryPotter} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
  );
};

export default App;
