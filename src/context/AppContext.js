import React, { Component } from "react";
import axiosInstance,{ applications } from "../api/RestPathVariables";

const AppContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_APP":
      return {
        ...state,
        apps: state.apps.filter((app) => action.payload !== app.id),
      };
    case "ADD_APP":
      return {
        ...state,
        apps: [...state.apps, action.payload],
      };
    case "UPDATE_APP":
      return {
        ...state,
        apps: state.apps.map((app) =>
          app.id === action.payload.id ? action.payload : app
        ),
      };
    default:
      return state;
  }
};

export class AppProvider extends Component {
  state = {
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  componentDidMount = async () => {
    const response = await axiosInstance.get(applications);
    console.log(response.data)
    this.setState({ apps: response.data });
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default AppContext;
