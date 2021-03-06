import React from "react";
import Header from "./components/header-footer-bandeau/Header";

import Homepage from "./components/Homepage";
import Pokecall from "./components/fichePokemon/PokeCall";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//router et switch permette de faire les liens entre les différentes liens du site
// router and switch allows to make the links between the different links of the site
function App() {
  return (
    <Router>
      <Switch>
        <>
          <Header />
          <main>
            <Route exact path="/" component={Homepage} />
            <Route path="/Pokemon/:pokemonName" component={Pokecall} />
          </main>
        </>
      </Switch>
    </Router>
  );
}

export default App;
