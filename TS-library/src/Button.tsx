import * as React from "react";

interface IButton {
    text: string;
}

export function Button(props: IButton): JSX.Element {
    return(
        <button style={{ backgroundColor: "aqua"  }}>{props.text ? props.text : "Click me!"}</button>
    )
}
