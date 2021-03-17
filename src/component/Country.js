import React, { Component } from "react";
import convertToColor from "../util/ImpactToColorConverter"
import Production from "./Production";

export default class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {color:convertToColor(props.country.impactStatus)};
  }

  render() {
    const { country } = this.props;
    return (
      <div className="col m-1 mb-2">
        <div
          key={country.id}
          className={`col-12 border rounded bg-${this.state.color} text-center font-weight-bold`}
        >
          {country.name}
        </div>
        {country.productions &&
          country.productions.map((production,index) => {
            return <Production key={production.id} production={production} index={index+1} />;
          })}
      </div>
    );
  }
}
