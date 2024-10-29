import React from "react";
import "./nav.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navba = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>
          Foodiesland<span className="dot">.</span>
        </span>
      </div>

      <ul className="navbar-links">
        <li>
          <a className="d-flex d-md-flex d-sm-none" href="/">
            {" "}
            Home{" "}
          </a>
          <i className=" d-none d-md-flex bi bi-house"></i>
        </li>
        <li>
          <a href="/recipes">Recipes</a>
          <i className="bi bi-book"></i>
        </li>
        <li>
          <a href="/blog">Blog</a>
          <i className="bi bi-pages"></i>
        </li>
        <li>
          <a href="/contact">Contact</a>
          <i className="bi bi-Contact"></i>
        </li>
        <li>
          <a href="/about">About us</a>
          <i className="bi bi-Contact"></i>
        </li>
      </ul>

      <div className="navbar-social">
        <a href="#">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="#">
          <i className="bi bi-youtube"></i>
        </a>
        <a href="#">
          <i className="bi bi-whatsapp"></i>
        </a>
        <div className="african-design">
          <span>BB</span> {/* This can be any initials or icon */}
        </div>
      </div>
    </nav>
  );
};

export default Navba;
