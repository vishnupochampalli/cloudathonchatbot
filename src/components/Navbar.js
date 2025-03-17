import React from "react";
import { Link } from "react-router-dom";
import "./../styles.css"; // Ensure styles are applied

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Developer Help Center</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/chatbot">Chatbot</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
