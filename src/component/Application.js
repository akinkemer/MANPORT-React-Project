import React, { Component } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
    changeVisibility=()=>{
      this.setState({isVisible:!this.state.isVisible});
  }

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
              <div class="card-header">
                {app.name}
                {this.state.isVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </a>

            <div
              id={app.id + app.name}
              class="collapse"
              data-parent={"#" + app.id}
            >
              <div class="card-body">
                <div class="row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Application;
