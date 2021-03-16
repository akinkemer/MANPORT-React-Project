import React, { Component } from "react";
import "../styles/home.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import Country from "./Country";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  changeVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    const { appStyle, app } = this.props;
    const color = "success";

    const headerId = "headerId"+app.id;
    const dataId = "dataId"+app.name+app.id;

    return (
      <div className={appStyle}>
        <div id={headerId}>
          <div className="card border-0">
            <a
              className="card-link"
              data-toggle="collapse"
              onClick={this.changeVisibility}
              href={`#${dataId}`}
            >
              <div className={`btn btn-outline-${color} btn-block`}>
                <ul className="nav justify-content-between">
                  <li className="nav-item font-weight-bold">{app.name}</li>
                  <li className="nav-item">
                    {this.state.isVisible ? (
                      <IoMdArrowDropup size="1.5em" />
                    ) : (
                      <IoMdArrowDropdown size="1.5em" />
                    )}
                  </li>
                </ul>
              </div>
            </a>

            <div
              id={dataId}
              className="collapse hide"
              data-parent={`#${headerId}`}
            >
              <div className={`card-body border border-${color}`}>
                <div className="row">
                  {app.countries &&
                    app.countries.map((country) => {
                      return <Country key={country.id} country={country} />;
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Application;
