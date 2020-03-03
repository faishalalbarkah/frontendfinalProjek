import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Beranda from "./user/Beranda";
import ApproveTiket from "./user/ApproveTiket";
import Ticket from "./user/Ticket";
import TiketDetail from "./user/TiketDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TiketDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
