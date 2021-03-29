/// <reference types="react" />
declare module "src/Button" {
    interface IButton {
        text: string;
    }
    export function Button(props: IButton): JSX.Element;
}
declare module "src/Hello" {
    import * as React from "react";
    interface IProps {
        name: string;
    }
    export class Hello extends React.Component<IProps, null> {
        render(): JSX.Element;
    }
}
declare module "src/Presenter" {
    import * as React from "react";
    export class Presenter extends React.Component {
        render(): JSX.Element;
    }
}
declare module "index" { }
declare module "src/exporter" {
    import { Hello } from "src/Hello";
    import { Button } from "src/Button";
    export { Hello, Button };
}
