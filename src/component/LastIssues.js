import React from "react";
import AppContext from "../context/AppContext";
import convertToColor from "../util/ImpactToColorConverter";
import { IoIosArrowRoundForward } from "react-icons/io";

export default class LastIssues extends React.Component {
  formatDate = (unformattedDate) => {
    const date = new Date(unformattedDate);
    const dateString = `${date.getUTCDate()} ${
      date.getMonth() + 1
    } ${date.getFullYear()} `;
    const timeString = ` ${date.getHours()}:${date.getMinutes()}`;
    return dateString + timeString;
  };
  render() {
    return (
      <AppContext.Consumer>
        {(value) => {
          const { lastThreeIssues } = value;
          return (
            <div className="card border rounded shadow mb-3">
              <div className="card-header py-1">Last Issues</div>
              <div className="card-body py-2">
              {lastThreeIssues.length ===0  && lastThreeIssues.map((issue, index) => {
                  return (
                    <div className="d-inline-flex" key={index}>
                      <h6 className="p-1 text-monospace my-auto">
                        {this.formatDate(issue.issueTime)}
                      </h6>
                      <IoIosArrowRoundForward
                        className="my-auto mx-0"
                        size="2em"
                      />
                      <h6
                        className={`text-${convertToColor(
                          issue.impactStatus
                        )} p-1 my-auto text-uppercase`}
                      >
                        {`${issue.appName}-${issue.countryName} ${issue.prodName}`}
                      </h6>
                      <IoIosArrowRoundForward className="my-auto" size="2em" />
                      <h6
                        className={`text-${convertToColor(
                          issue.impactStatus
                        )} p-1 my-auto text-uppercase`}
                      >
                        {issue.jobName}
                      </h6>
                    </div>
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
