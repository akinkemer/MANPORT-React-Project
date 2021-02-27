import React from "react";
import notfound from "../images/notfound.png"
import { Link } from "react-router-dom";

export default function NotFoundError() {
  return (
    <div className="page-wrap d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <img src={notfound} alt={"Not Found Img"} className="mx-auto d-block img-fluid w-75"/>
            <div className="mb-4">
              <h3>The page you are looking for was not found.</h3>
            </div>
            <Link to="/home">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
