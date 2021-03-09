import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundError() {
  return (
    <div className="page-wrap d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-md-12 text-center">
            <div className="mb-5">
              <h1 className="display-1">404</h1>
              <h3 className="display-3">Not Found Error</h3>
              <h3 className="lead">The page you are looking for was not found.</h3>
            </div>
            <Link to="/home" className="btn btn-outline-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
