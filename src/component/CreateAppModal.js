import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import axiosInstance, { createAppViewModel } from "../api/RestPathVariables";

export default class CreateAppModal extends Component {
  state = {
    viewModel: {},
  };
  componentDidMount = async () => {
    const response = await axiosInstance(createAppViewModel);
    this.setState({ viewModel: response.data });
  };
  todayDateToString = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    return today;
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    const { viewModel } = this.state;
    return (
      <Modal
        show={true}
        onHide={this.props.onClose}
        backdrop="static"
        keyboard={false}
        size={"lg"}
      >
        <Modal.Header>
          <Modal.Title>Add New Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputShortCode">Short Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputShortCode"
                  placeholder="Short Code"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputFullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFullName"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputReleaseDate">Release Date</label>
                <input
                  type="date"
                  value={this.todayDateToString()}
                  className="form-control"
                  id="inputReleaseDate"
                  placeholder="Release Date"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="sel1">Business Area</label>
                <select class="form-control" id="sel1">
                  {viewModel.businessArea &&
                    viewModel.businessArea.map((area) => {
                      return <option>{area}</option>;
                    })}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputResponsible">Responsible</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputResponsible"
                  placeholder="Responsible"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="sel2">Responsible Team</label>
                <select class="form-control" id="sel2">
                  {viewModel.responsibleTeam &&
                    viewModel.responsibleTeam.map((team) => {
                      return <option>{team}</option>;
                    })}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="sel3">Backend</label>
                <select class="form-control" id="sel3">
                  {viewModel.backend &&
                    viewModel.backend.map((backend) => {
                      return <option>{backend}</option>;
                    })}
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputResponsible">
                  Line Count of Backend Code
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputLineCountOfBackend"
                  placeholder="Line Count of Backend Code"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="sel4">Frontend</label>
                <select class="form-control" id="sel4">
                  {viewModel.businessArea &&
                    viewModel.businessArea.map((area) => {
                      return <option>{area}</option>;
                    })}
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputResponsible">
                  Line Count of Frontend Code
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputLineCountOfFrontend"
                  placeholder="Line Count of Frontend Code"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="sel5">Database</label>
                <select class="form-control" id="sel5">
                  {viewModel.businessArea &&
                    viewModel.businessArea.map((area) => {
                      return <option>{area}</option>;
                    })}
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputLineStopRisk">
                  Line Stop Risk (activate critical issue alarms)
                </label>
                <input
                  type="checkbox"
                  class="form-control"
                  id="inputLineStopRisk"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12 text-center">
                <button className="btn btn-success">Add New Application</button>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
