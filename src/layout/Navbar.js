import { Link, useLocation } from "react-router-dom";

import React from "react";

export default function Navbar(props) {
  const location = useLocation().pathname;
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md bg-light navbar-light fixed-top">
        <div className="container">
          <Link to="/home" className="navbar-brand">
            MANPORT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  to="/monitoring-dashboard"
                  className={
                    location === "/monitoring-dashboard"
                      ? "nav-link font-weight-bold"
                      : "nav-link"
                  }
                >
                  Monitoring
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/application-management"
                  className={
                    location === "/application-management"
                      ? "nav-link font-weight-bold"
                      : "nav-link"
                  }
                >
                  Management
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/logged-issues"
                  className={
                    location === "/logged-issues"
                      ? "nav-link font-weight-bold"
                      : "nav-link"
                  }
                >
                  Issues
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/quick-links"
                  className={
                    location === "/quick-links"
                      ? "nav-link font-weight-bold"
                      : "nav-link"
                  }
                >
                  Links
                </Link>
              </li>
            </ul>
            <hr />
            {props.isUserAuthed ? (
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Hello, UserName
                </button>
                <div className="dropdown-menu nav-item">
                  <Link to="/" className="nav-link">
                    Settings
                  </Link>
                  <Link to="/" className="nav-link">
                    Logout
                  </Link>
                </div>
              </div>
            ) : null}

            <ul className="navbar-nav d-flex justify-content-end">
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
