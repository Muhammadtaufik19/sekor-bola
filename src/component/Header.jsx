import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a href="#" className="navbar-brand">
          BOLA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Daftar Tim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Klasemen
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Jadwal pertandingan
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
