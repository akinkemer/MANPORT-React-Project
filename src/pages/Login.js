import React, { Component } from "react";
import { Animate } from "react-simple-animate";

export default class Login extends Component {
  render() {
    return (
      <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
      <div className="container">
        <h2 className="text-center">Login</h2>
        <hr/>
        <div className="row mx-3">
          <div className="col-md-4 mx-auto border rounded shadow p-4 mb-5 bg-light">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="name@example.com"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Login
              </button>
            </form>
          </div>
        </div>
        </div>
        </Animate>
    );
  }
}
