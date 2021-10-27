import { render } from "@testing-library/react";
import React from "react";
import "./FunComponent.css";

function FunComponent() {
        return (
            <div className="function-component">
                <h3>This is created using function component</h3>
                <p>This is done using external CSS</p>
                <p style={{ color: "blue" }}>This is done using inline CSS</p>
            </div>
        );
    }


export default FunComponent;