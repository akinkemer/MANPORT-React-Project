import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { VscWarning } from "react-icons/vsc";
import { VscTools } from "react-icons/vsc";
import { VscRemoteExplorer } from "react-icons/vsc";
import { VscLink } from "react-icons/vsc";
import { Animate } from "react-simple-animate";

export default function Home() {
  return (
    <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
    <div className="container text-center">
      <div className="row mb-4 m-2">
      <div className="col-md-4 grow">
          <Link to="/monitoring-dashboard" type="button" className="btn btn-block shadow h-100 p-4">
            <VscRemoteExplorer size="8em" className="mb-3" />
            <h5 className="card-title">Monitoring Dashboard</h5>
          </Link>
        </div>
        <div className="col-md-4 grow">
          <Link to="/application-management" type="button" className="btn btn-block shadow h-100 p-4">
            <VscTools size="8em" className="mb-3" />
            <h5 className="card-title">Application Management</h5>
          </Link>
        </div>
        <div className="col-md-4 grow">
          <Link to="/logged-issues" type="button" className="btn btn-block shadow h-100 p-4">
            <VscWarning size="8em" className="mb-3" />
            <h5 className="card-title">Logged Issues</h5>
          </Link>
        </div>
      </div>
      <div className="row m-2 mb-4">
        <div className="col-12 grow">
          <Link to="/quick-links" type="button" className="btn btn-block shadow p-4">
            <VscLink size="8em" />
            <h5 className="card-title">Quick Links</h5>
          </Link>
        </div>
      </div>
      </div>
      </Animate>
  );
}
