import React from "react";
import { Link } from "react-router-dom";

export default function Head() {
  return (
    <div className="bg-head ">
      <div className="container">
        <div className="header">
          <a className="logo">
            <Link to="/">BOLA</Link>
          </a>
          <div className="header-right">
            <a className="Home">
              <Link to="/">Home</Link>
            </a>
            <a>
              <Link to="/daftar-team">Daftar Tim</Link>
            </a>
            <a>
              <Link to="/klasemen">Klasemen</Link>
            </a>
            <a>
              <Link to="/jadwal-pertandingan">Jadwal pertandingan</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
