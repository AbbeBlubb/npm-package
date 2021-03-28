import React from "react";
import { Button } from "./Button";
import { Hello } from "./Hello";

class Presenter extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center", fontFamily: "Arial" }}>
                <h1>Components</h1>
                <hr style={{ width: "50%" }} />
                <div style={{ marginTop: "40px" }}>
                    <p style={{ fontWeight: "bold" }}>Hello component</p>
                    <Hello name="Elvis!" />
                </div>
                <div style={{ marginTop: "40px" }}>
                    <p style={{ fontWeight: "bold" }}>Button component</p>
                    <Button />
                </div>
            </div>
        );
    }
}

export default Presenter;
