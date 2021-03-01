import React from "react";
import Hello from "./Hello";
import Button from "./Button";

class Presenter extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <div>
                    <p style={{ fontFamily: "Arial", fontWeight: "bold" }}>Hello component</p>
                    <Hello name="Elvis!" />
                </div>
                <div>
                    <p style={{ fontFamily: "Arial", fontWeight: "bold" }}>Button component</p>
                    <Button />
                </div>
            </div>
        );
    }
}

export default Presenter;
