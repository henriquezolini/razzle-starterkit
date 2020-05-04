import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./view/home";
import About from "./view/about";
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </Switch>
);

export default App;
