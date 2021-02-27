import React, { Component } from "react";

export default class Country extends Component {
  render() {
    const { app } = this.props;

    return app.countries.map((country) => {
      return (
        <div className="col border rounded bg-light text-center">
          {country.name}
        </div>
      );
    });
  }
}
