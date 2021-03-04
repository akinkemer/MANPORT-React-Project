import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Job from '../component/Job';

export default class Production extends Component {
    render() {
        const { production } = this.props;
        return (
            <div className="row">
                <div className="col border rounded bg-light text-center">
                {production.name}
                </div>
                <div className="row mx-auto">
                    {production.jobs && production.jobs.map((job) => {
                        return (
                            <Job key={uuidv4()} job={job}/>
                    );})}
                </div>
            </div>
        )
    }
}
