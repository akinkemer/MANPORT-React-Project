import React, { Component } from "react";
import Job from "../component/Job";

export default class Production extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "success" };
  }

  render() {
    const { production } = this.props;

    return (
      <div className="row">
        <div
          className={`col border rounded bg-${this.state.color} text-center`}
        >
          {production.name}
        </div>
        <div className="row mx-auto">
          {production.jobs &&
            production.jobs.map((job) => {
              return <Job key={job.id} job={job} />;
            })}
        </div>
      </div>
    );
  }
}
