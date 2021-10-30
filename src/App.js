import logo from "./logo.svg";
import { Component } from "react";
import FunComponent from "./components/FunComponent";
import ClassComponent from "./components/ClassComponent";

import "./App.css";

class App extends Component {
  state = {
    isClassVisible: false,
    isFunctionVisible: false,
  };

  displayFunction = () => {
    if (this.state.isFunctionVisible == true) {
      this.setState({ isFunctionVisible: false });
    } else {
      this.setState({ isFunctionVisible: true });
    }
  };

  displayClass = () => {
    if (this.state.isClassVisible == true) {
      this.setState({ isClassVisible: false });
    } else {
      this.setState({ isClassVisible: true });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Styling Using Functional and Class Component</h2>
        </div>
        <div className="main-container">
          <div className="container1">
            <div className="functional-component-btn">
              <button onClick={this.displayFunction}>
                <h3>To see styling in functional component</h3>
              </button>
            </div>

            <div className="class-component-btn">
              <button onClick={this.displayClass}>
                <h3>To see styling in class component</h3>
              </button>
            </div>
          </div>

          <div className="container2">
            <div className="tabs">
              <div
                style={{
                  display: this.state.isFunctionVisible ? "block" : "none",
                }}
              >
                <FunComponent />
              </div>
              <div
                style={{
                  display: this.state.isClassVisible ? "block" : "none",
                }}
              >
                <ClassComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
