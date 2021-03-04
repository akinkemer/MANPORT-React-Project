import React, { Component } from "react";
import Production from "./Production";

export default class Country extends Component {
  render() {
    const { country } = this.props;
    return (
      <div className="col">
        <div
          key={country.id}
          className="col border rounded bg-light text-center font-weight-bold"
        >
          {country.name}
        </div>
        {country.prod &&
          country.prod.map((production) => {
            return <Production key={production.id} production={production} />;
          })}
      </div>
    );
  }
}
