import React, { Component } from "react";
import "./ClassComponent.css"



class ClassComponent extends Component {

    render() {
        return (
            <div className="class-component">
                <h3>This is created using class component</h3>
                <p>This is done using external CSS</p>
                <p style={{ color: "blue" }}>This is done using inline CSS</p>
            </div>
        );
    }
}

export default ClassComponent;