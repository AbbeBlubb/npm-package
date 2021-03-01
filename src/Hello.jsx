import React from "react";

class Hello extends React.Component {
    render() {
        return (
            <div style={{ fontFamily: "Arial" }}>
                <p>Hello {this.props.name}</p>
            </div>
        );
    }
}

export default Hello;
