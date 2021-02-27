import React, { Component } from "react";
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
    return (
      <div className={appStyle}>
        <div id={app.id}>
          <div class="card">
            <a
              className="card-link"
              data-toggle="collapse"
              onClick={this.changeVisibility}
              href={"#" + app.id + app.name}
            >
              <div class="card-header text-dark">
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
              id={app.id + app.name}
              class="collapse hide"
              data-parent={"#" + app.id}
            >
              <div class="card-body">
                <div class="row">
                  <Country app={app} />
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
