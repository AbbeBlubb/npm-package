import React from "react";

export class Hello extends React.Component {
    render() {
        return (
            <div style={{ fontFamily: "Arial" }}>
                <p>Hello {this.props.name}</p>
            </div>
        );
    }
}
