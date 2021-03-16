import React, { Component } from "react";
import Production from "./Production";

export default class Country extends Component {
  render() {
    const { country } = this.props;
    return (
      <div className="col m-2 mb-3">
        <div
          key={country.id}
          className="col border rounded bg-light text-center font-weight-bold"
        >
          {country.name}
        </div>
        {country.productions &&
          country.productions.map((production) => {
            return <Production key={production.id} production={production} />;
          })}
      </div>
    );
  }
}
