import React, { Component } from "react";
import Application from "../component/Application";


class MonitoringDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: [
        {
          id: "a",
          name: "FLR",
          countries: [
            { name: "Turkey" },
            { name: "Russia" },
            { name: "Germany" },
            { name: "England" },
            { name: "France" },
          ],
        },
        {
          id: "b",
          name: "CLR",
          countries: [{ name: "Turkey" }],
        },
        {
          id: "c",
          name: "ACM",
          countries: [
            { name: "Turkey" },
            { name: "Russia" },
            { name: "Germany" },
          ],
        },
        {
          id: "d",
          name: "BDM",
          countries: [
            { name: "Turkey" },
            { name: "Russia" },
            { name: "Germany" },
          ],
        },
        {
          id: "e",
          name: "CMP",
          countries: [
            { name: "Turkey" },
            { name: "Russia" },
            { name: "Germany" },
          ],
        },
        {
          id: "f",
          name: "TRP",
          countries: [
            { name: "Turkey" },
            { name: "Russia" },
            { name: "Germany" },
          ],
        },
        {
          id: "g",
          name: "UTP",
          countries: [
            { name: "Turkey" },
            { name: "Russia" },
            { name: "Germany" },
          ],
        },
        {
          id: "h",
          name: "URM",
          countries: [
            { name: "Turkey" },
            { name: "Russia" },
            { name: "Germany" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.apps.map((app) => {
            const colSize = 2 * app.countries.length;
            const appStyle = `col-md-${colSize} mx-auto`;
            return (
              <Application appStyle={appStyle} app={app}/>
            );
          })}
        </div>
      </div>
    );
  }
}
export default MonitoringDashboard;
