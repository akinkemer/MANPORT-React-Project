import React, { Component } from "react";
import calculateImpactColor from "../util/ImpactColorCalculator";
import sortAppsByImpactStatus from "../util/SortByImpactStatus";
import getLastThreeIssues from "../util/DateSorter"
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
  interval = null;
  state = {
    lastThreeIssues:[],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  componentDidMount = async () => {
    this.interval = setInterval(this.getData, 10*1000);
    await this.getData();
  }
  getData =async () => {
    const response = await axiosInstance.get(applications);
    calculateImpactColor(response.data);
    sortAppsByImpactStatus(response.data);
    console.log(response.data)
    this.setState({ apps: response.data });
    this.setState({ lastThreeIssues: getLastThreeIssues(response.data) });
    console.log(this.state.lastThreeIssues)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default AppContext;
