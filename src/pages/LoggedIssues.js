import React, { Component } from "react";
import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";
import { Animate } from "react-simple-animate";

var ws = {};
class LoggedIssues extends Component {
  componentDidMount() {
    //connect webscoket
    let socket = new SockJS("http://localhost:8080/manport-websocket");
    ws = Stomp.over(socket);
    ws.connect({}, function (frame) {
      ws.subscribe("/issue", function (message) {
        console.log("Body " + message.body);
      });
      ws.send("/manport-websocket",{},"")
    });
    
  }
  componentWillUnmount() {
   
  }

  render() {
    return (
      <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
        <div className="container">
          <h4 className="display-5 text-center">Logged Issues</h4>
        </div>
      </Animate>
    );
  }
}
export default LoggedIssues;
