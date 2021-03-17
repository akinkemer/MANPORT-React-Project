import React, { Component } from "react";
import convertToColor from "../util/ImpactToColorConverter"
import Job from "../component/Job";

export default class Production extends Component {
  constructor(props) {
    super(props);
    this.state = {color:convertToColor(props.production.impactStatus)};
  }

  render() {
    const { production,index } = this.props;

    return (
      <div className="row">
        <div
          className={`col border rounded bg-${this.state.color} text-center`}
        >
          {`PROD-${index}`}
        </div>
        <div className={`row mx-auto border border-top-0 border-${this.state.color} rounded`}>
          {production.jobs &&
            production.jobs.map((job,index) => {
              return <Job key={job.id} job={job} index={index+1} />;
            })}
        </div>
      </div>
    );
  }
}
