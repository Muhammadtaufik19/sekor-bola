// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// component
import Head from "./component/Head";
import DaftarTeam from "./component/DaftarTeam";
import Klasemen from "./component/Klasemen";
import JadwalPertandingan from "./component/JadwalPertandingan";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <div>
        <Head />
      </div>
      <Home />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="daftar-team" component={DaftarTeam} />
        <Route path="klasemen" component={Klasemen} />
        <Route path="jadwal-pertandingan" component={JadwalPertandingan} />
      </Switch>
    </Router>
  );
}

export default App;
