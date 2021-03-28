import * as React from "react";

interface IProps {
    name: string;
}

export class Hello extends React.Component<IProps, null> {
    render() {
        return (
            <div style={{ fontFamily: "Arial" }}>
                <p>Hello {this.props.name}</p>
            </div>
        );
    }
}
