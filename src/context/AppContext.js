import React, { Component } from "react";

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
    "apps": [
      {
        "id": "a1",
        "name": "FLR",
        "countries": [
          {
            "id": "ac1",
            "name": "Turkey",
            "prod": [
              {
                "id": "da52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "green"
                  }
                ]
              },
              {
                "id": "ds52",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "green"
                  }
                ]
              }
            ]
          },
          {
            "id": "ac2",
            "name": "Russia",
            "prod": [
              {
                "id": "dsda52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "sd",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          },
          {
            "id": "ac3",
            "name": "Germany",
            "prod": [
              {
                "id": "dsda52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "sd",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          },
          {
            "id": "ac4",
            "name": "England",
            "prod": [
              {
                "id": "dsda52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "sd",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          },
          {
            "id": "acbv5",
            "name": "France",
            "prod": [
              {
                "id": "dsda52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "sd",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "af342",
        "name": "CTS",
        "countries": [
          {
            "id": "a2cty1",
            "name": "Turkey",
            "prod": [
              {
                "id": "dsa2",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "green"
                  }
                ]
              },
              {
                "id": "2da",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "green"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "a134",
        "name": "CVQS",
        "countries": [
          {
            "id": "ac1",
            "name": "Turkey",
            "prod": [
              {
                "id": "da52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "green"
                  }
                ]
              },
              {
                "id": "dsaass52",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "green"
                  }
                ]
              }
            ]
          },
          {
            "id": "ascc2",
            "name": "Russia",
            "prod": [
              {
                "id": "dsda52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "sasdd",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          },
          {
            "id": "acsad3",
            "name": "Germany",
            "prod": [
              {
                "id": "dsda52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "sasdsad",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          },
          {
            "id": "acsad4",
            "name": "England",
            "prod": [
              {
                "id": "dsda52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "scxd",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "adfs2",
        "name": "ITSFED",
        "countries": [
          {
            "id": "a243c1",
            "name": "Turkey",
            "prod": [
              {
                "id": "ds43a2",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "green"
                  }
                ]
              },
              {
                "id": "2werda",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "green"
                  }
                ]
              }
            ]
          },
          {
            "id": "a2dfsdc1",
            "name": "Turkey",
            "prod": [
              {
                "id": "dsa2",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "green"
                  }
                ]
              },
              {
                "id": "2da",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "green"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "app5id",
        "name": "APP5",
        "countries": [
          {
            "id": "id1",
            "name": "Turkey",
            "prod": [
              {
                "id": "435435efsfdf",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "green"
                  }
                ]
              },
              {
                "id": "324fwf",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "green"
                  }
                ]
              }
            ]
          },
          {
            "id": "id2",
            "name": "Russia",
            "prod": [
              {
                "id": "vcxv3324324",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "sdfds323232",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          },
          {
            "id": "id3",
            "name": "Germany",
            "prod": [
              {
                "id": "dsdf3sf33a52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "3f3f3ff3",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          },
          {
            "id": "id4",
            "name": "England",
            "prod": [
              {
                "id": "3f3f3fssdfdsf",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "3f3f3f3",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          },
          {
            "id": "id5",
            "name": "France",
            "prod": [
              {
                "id": "3252222d",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "4f4f4dss",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          },
          {
            "id": "id6",
            "name": "France",
            "prod": [
              {
                "id": "3d3d3asd11",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "s11111d",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "a651",
        "name": "APP6",
        "countries": [
          {
            "id": "a32c1",
            "name": "Turkey",
            "prod": [
              {
                "id": "da52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "green"
                  }
                ]
              },
              {
                "id": "dswer52",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "green"
                  }
                ]
              }
            ]
          },
          {
            "id": "aewrc2",
            "name": "Russia",
            "prod": [
              {
                "id": "dsda52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "swerd",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          },
          {
            "id": "afdc3",
            "name": "Germany",
            "prod": [
              {
                "id": "dsda52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "s333d",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          },
          {
            "id": "ac3244",
            "name": "England",
            "prod": [
              {
                "id": "dsda52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "s324d",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          },
          {
            "id": "acott5",
            "name": "France",
            "prod": [
              {
                "id": "dsda52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "33sd",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          },
          {
            "id": "acbvb5",
            "name": "France",
            "prod": [
              {
                "id": "dsda52",
                "name": "PROD-1",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              },
              {
                "id": "sfdb43d",
                "name": "PROD-2",
                "jobs": [
                  {
                    "name": "Job1",
                    "status": "red"
                  },
                  {
                    "name": "Job2",
                    "status": "green"
                  },
                  {
                    "name": "Job3",
                    "status": "orange"
                  },
                  {
                    "name": "Job3",
                    "status": "yellow"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
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
