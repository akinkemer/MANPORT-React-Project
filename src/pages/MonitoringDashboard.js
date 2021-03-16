import React, { Component } from "react";
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
                <div className="col-md-6 text-center">
                  <h4 className="display-4">MONITORING DASHBOARD</h4>
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
