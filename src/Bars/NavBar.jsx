import React from "react";
import { Link } from "react-router-dom";
import UserWidget from "../User/UserWidget";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to='/' type="button" className="navName">
        <p>e-commerce</p>
      </Link>
      <div className="navButtons">
        <Link to='/' type="button" className="navButton">
          Inicio
        </Link>
        <button className=" navButton btn btn-secondary dropdown-toggle shadow-none" type="button" id="dropdownCategory" data-bs-toggle="dropdown" aria-expanded="false">
        Categoría
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownCategory">
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
          <li>abc</li>
        </ul>
        <button className=" navButton btn btn-secondary dropdown-toggle shadow-none" type="button" id="dropdownSearch" data-bs-toggle="dropdown" aria-expanded="false">
        Búsqueda
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownSearch">
          <li>abc</li>
        </ul>
        <Link to='/contact' type="button" className="navButton">
        Contacto
        </Link>
      </div>
      <UserWidget />
    </div>
  );
};

export default NavBar;
