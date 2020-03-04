import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Beranda from "./user/Beranda";
import ApproveTiket from "./user/ApproveTiket";
import Ticket from "./user/Ticket";
import TiketDetail from "./user/TiketDetail";
import Payment from "./user/Payment";
import IndexAdmin from "./admin/IndexAdmin";
import AddTiket from "./admin/AddTiket";
import ALBeranda from "./user/ALBeranda";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <IndexAdmin />
        </Route>
      </Switch>
      <Switch>
        <Route path="/ALBeranda">
          <ALBeranda />
        </Route>
      </Switch>
      <Switch>
        <Route path="/Ticket">
          <Ticket />
        </Route>
      </Switch>
      <Switch>
        <Route path="/TiketDetail">
          <TiketDetail />
        </Route>
      </Switch>
      <Switch>
        <Route path="/Payment">
          <Payment />
        </Route>
      </Switch>
      <Switch>
        <Route path="/ApproveTiket">
          <ApproveTiket />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
