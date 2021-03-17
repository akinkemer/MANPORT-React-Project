import React, { Component } from "react";
import { Animate } from "react-simple-animate";

class QuickLinks extends Component {
  render() {
    return (
      <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
        <div className="container">
          <h4 className="display-5 text-center">Quick Links</h4>
        </div>
      </Animate>
    );
  }
}
export default QuickLinks;
