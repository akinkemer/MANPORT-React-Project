import React, { Component } from 'react'

export default class Job extends Component {
    render() {
        const { job } = this.props;
        let color = "success";
        if (job.status === "red") color = "danger";
        else if (job.status === "orange") color = "orange"
        else if (job.status === "yellow") color = "yellow";
        return (
            <div className={`bg-${color} col-4 p-1 border rounded text-center`}>
                {job.name}
            </div>
        )
    }
}
