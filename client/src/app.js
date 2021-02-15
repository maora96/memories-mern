import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Auth from "./components/auth/auth";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
