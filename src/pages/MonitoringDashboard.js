import React, { Component } from "react";
import { FcHighPriority } from "react-icons/fc";
import "../styles/colors.css"
import Application from "../component/Application";
import LastIssues from "../component/LastIssues";
import AppContext from "../context/AppContext";
class MonitoringDashboard extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(value) => {
          const { apps } = value;
          return (
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center my-auto">
                  <h4 className="display-5">MONITORING DASHBOARD</h4>
                </div>
                <div className="col-md-2 text-center my-auto">
                  <FcHighPriority size="6em"/>
                </div>
                <div className="col-md-6">
                  <LastIssues />
                </div>
              </div>
              <div className="row">
                {apps &&
                  apps.map((app) => {
                    const colSize = 2 * app.countries.length;
                    const appStyle = `col-md-${colSize}`;
                    return (
                      <Application key={app.id} appStyle={appStyle} app={app} />
                    );
                  })}
              </div>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
export default MonitoringDashboard;
