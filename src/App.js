import logo from "./logo.svg";
import { Component } from "react";
import FunComponent from "./components/FunComponent";
import ClassComponent from "./components/ClassComponent";
import DisplayButton from "./components/DisplayButton";

import "./App.css";

class App extends Component {
  state = {
    isClassVisible: false,
    isFunctionVisible: false,
  };

  displayFunction = () => {
    this.setState((prevState) => ({
      isFunctionVisible: !prevState.isFunctionVisible,
    }));
  };

  displayClass = () => {
    this.setState((prevState) => ({
      isClassVisible: !prevState.isClassVisible,
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Styling Using Functional and Class Component</h2>
        </div>

        <div className="main-container">
          <div className="container1">
            <DisplayButton
              propsDisplayFunction={this.displayFunction}
              propsClassName="functional-component-btn"
              propsButtonText="To see styling in functional component"
            />
            <DisplayButton
              propsDisplayFunction={this.displayClass}
              propsClassName="class-component-btn"
              propsButtonText="To see styling in class component"
            />
          </div>

          <div className="container2">
            <div className="tabs">
              {this.state.isFunctionVisible === true ? (
                <div>
                  <FunComponent />
                </div>
              ) : null}{" "}
              ;
              {this.state.isClassVisible === true ? (
                <div>
                  <ClassComponent />
                </div>
              ) : null}{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
