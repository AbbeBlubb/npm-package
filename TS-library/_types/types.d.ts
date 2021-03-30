/// <reference types="react" />
declare module "Hello" {
    import * as React from "react";
    interface IProps {
        name: string;
    }
    export class Hello extends React.Component<IProps, null> {
        render(): JSX.Element;
    }
}
declare module "Button" {
    interface IButton {
        text: string;
    }
    export function Button(props: IButton): JSX.Element;
}
declare module "exporter" {
    import { Hello } from "Hello";
    import { Button } from "Button";
    export { Hello, Button };
}
