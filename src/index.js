import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// component
import Head from "./component/Head";
import DaftarTeam from "./component/DaftarTeam";
import Klasemen from "./component/Klasemen";
import JadwalPertandingan from "./component/JadwalPertandingan";
import Home from "./component/Home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Head />
      </div>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/daftar-team" exact component={DaftarTeam}></Route>
        <Route path="/klasemen" exact component={Klasemen}></Route>
        <Route
          path="/jadwal-pertandingan"
          exact
          component={JadwalPertandingan}
        ></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
