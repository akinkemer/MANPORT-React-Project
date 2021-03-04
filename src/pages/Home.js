import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { ImWarning } from "react-icons/im";
import { FiTool } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

export default function Home() {
  return (
    <div className="container text-center">
      <div className="row mb-4">
      <div className="col-md-4 grow">
          <Link to="/monitoring-dashboard" type="button" className="btn btn-block shadow h-100">
            <AiOutlineFundProjectionScreen size="8em" />
            <h4 className="card-title">Monitoring Dashboard</h4>
          </Link>
        </div>
        <div className="col-md-4 grow">
          <Link to="/application-management" type="button" className="btn btn-block shadow h-100">
            <FiTool size="8em" />
            <h4 className="card-title">Application Management</h4>
          </Link>
        </div>
        <div className="col-md-4 grow">
          <Link to="/logged-issues" type="button" className="btn btn-block shadow h-100">
            <ImWarning size="8em" />
            <h4 className="card-title">Logged Issues</h4>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12 grow">
          <Link to="/quick-links" type="button" className="btn btn-block shadow">
            <BiLink size="8em" />
            <h4 className="card-title">Quick Links</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
