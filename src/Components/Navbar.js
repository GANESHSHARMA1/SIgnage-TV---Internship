import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="navbar sticky-top bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <img
            src="https://signagetv.in/wp-content/uploads/2021/08/LOGO-NEW-scaled-e1629978879145-326x46.jpg"
            alt="logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            <div className="d-flex me-2">
              {/* <button type="button" className="btn btn-primary btn-sm">
                login/signUp
              </button> */}
              <Link
                className="nav-link active btn btn-primary btn-sm"
                to="/login"
                style={{ height: "30px", padding: "5px" }}
              >
                Login/Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
