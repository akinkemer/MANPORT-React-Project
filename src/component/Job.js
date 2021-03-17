import React, { Component } from 'react'

export default class Job extends Component {
    render() {
        const { job,index } = this.props;
        let color = "success";
        if (job.impactStatus === "HIGH") color = "danger";
        else if (job.impactStatus === "MEDIUM") color = "orange"
        else if (job.impactStatus === "LOW") color = "yellow";
        return (
            <div className={`bg-${color} col-4 p-2 border rounded text-center`}>
                {job.name===null ?`Job${index}` : job.name}
            </div>
        )
    }
}
