import React, { Component } from "react";
import "../styles/app-management.css";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import { TiArrowUnsorted } from "react-icons/ti";
import { ImEye, ImBin } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import { GoCheck, GoX } from "react-icons/go";
import { Animate } from "react-simple-animate";

class ApplicationManagement extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(value) => {
          const { apps } = value;
          return (
            <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
              <div className="container">
                <div className="row mb-3">
                  <div className="col-md-8">
                    <h6 className="display-5">Application Management</h6>
                  </div>
                  <div className="col-md-2">
                    <Link to="/" className="btn btn-success btn-block mt-4">
                      Add New App
                    </Link>
                  </div>
                  <div className="col-md-2">
                    <Link to="/" className="btn btn-success btn-block mt-4">
                      Plant Management
                    </Link>
                  </div>
                </div>
                <hr className="mb-4"/>
                <div className="row">
                  <div className="col-md-12">
                    <div id="collapse1">
                      <table className="table table-bordered table-hover">
                        <thead className="thead-light">
                          <tr>
                            <th>
                              <div className="d-inline-flex">
                                <span>Application Name</span>
                                <TiArrowUnsorted
                                  className="my-auto"
                                  size="1.2em"
                                />
                              </div>
                            </th>
                            <th>Business Area</th>
                            <th>Live Plants</th>
                            <th>Line Stop Risk</th>
                            <th className="py-0">
                              <div className="d-flex flex-column">
                                <span className="text-center">Actions</span>
                                <div className="d-flex justify-content-between">
                                  <span>View</span>
                                  <span>Edit</span>
                                  <span>Delete</span>
                                  <span>Track</span>
                                </div>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {apps &&
                            apps.map((app) => {
                              return (
                                <tr key={app.id}>
                                  <td>{app.name}</td>
                                  <td>{app.businessArea}</td>
                                  <td>{app.countries.length}</td>
                                  <td>
                                    {app.lineStopRisk ? (
                                      <GoCheck color="red" size="1.5em" />
                                    ) : (
                                      <GoX color="green" size="1.5em" />
                                    )}
                                  </td>
                                  <td>
                                    <div className="d-flex justify-content-between">
                                      <ImEye size="1.5em" />
                                      <FiEdit size="1.5em" />
                                      <ImBin size="1.5em" />
                                      <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
export default ApplicationManagement;
