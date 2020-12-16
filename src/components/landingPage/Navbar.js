import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <div className="nav" id="topnav">
      <Link to="/" className="logo">
        Phantoms
      </Link>
      <div className="nav_content">
        <Link to="/" className="links">
          {" "}
          Home{" "}
        </Link>
        <Link to="/about" className="links">
          {" "}
          About{" "}
        </Link>
        <Link to="/contact" className="links">
          {" "}
          Contact{" "}
        </Link>
        <Link to="/login" className="links">
          {" "}
          Login{" "}
        </Link>
        <select className="language">
          <option>Kiny</option>
          <option>English</option>
          <option>Francais</option>
        </select>
      </div>
      <a href="topnav"  className="icon" >
          <i className="fa fa-bars"></i>
        </a>
    </div>
  );

};

export default Navbar;
