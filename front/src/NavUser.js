import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const NavUser = () => {
  const navStyle = {
    color: "white",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        ReserVAMOS
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <Link to="/" className="nav-link">
            <li className="nav-item active">Inicio</li>
            <span className="sr-only">(current)</span>
          </Link>
          <Link to="/client" className="nav-link">
            <li className="nav-item active">Reservar</li>
            <span className="sr-only">(current)</span>
          </Link>
        </ul>
      </div>

      <div id="navbarNav">
        <ul className="navbar-nav navbar-right">
          <Link to="/login" className="nav-link btn-register navbar-btn">
            <li>Perfil</li>
            <span className="sr-only">(current)</span>
          </Link>
          <Link to="/formAddStore" className="nav-link">
            <li>Nuevo Establecimiento</li>
            <span className="sr-only">(current)</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavUser;
