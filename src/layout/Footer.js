import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-3">
      <div className="container pt-3 pb-1">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">MANPORT</h5>
            <br />
            <h6>MANUFACTURING </h6>
            <h6>&</h6>
            <h6>QUALITY SYSTEMS PORTAL</h6>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="navbar-nav">
              <li className="nav-item pb-2">
                <Link to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item pb-2">
                <Link to="/monitoring-dashboard">
                  Monitoring Dashboard
                </Link>
              </li>
              <li className="nav-item pb-2">
                <Link to="/application-management">
                  Application Management
                </Link>
              </li>
              <li className="nav-item pb-2">
                <Link to="/logged-issues">
                  Logged Issues
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="col-12 text-center p-3 mt-2"
            style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          >
            © {new Date().getFullYear()} Copyright:
            <Link to="/home" className="text-dark">
              <span>MANPORT</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
