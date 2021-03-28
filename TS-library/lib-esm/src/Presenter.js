var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import { Button } from "./Button";
import { Hello } from "./Hello";
var Presenter = /** @class */ (function (_super) {
    __extends(Presenter, _super);
    function Presenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Presenter.prototype.render = function () {
        return (React.createElement("div", { style: { textAlign: "center", fontFamily: "Arial" } },
            React.createElement("h1", null, "Components"),
            React.createElement("hr", { style: { width: "50%" } }),
            React.createElement("div", { style: { marginTop: "40px" } },
                React.createElement("p", { style: { fontWeight: "bold" } }, "Hello component"),
                React.createElement(Hello, { name: "Elvis!" })),
            React.createElement("div", { style: { marginTop: "40px" } },
                React.createElement("p", { style: { fontWeight: "bold" } }, "Button component"),
                React.createElement(Button, { text: "Julio!" }))));
    };
    return Presenter;
}(React.Component));
export { Presenter };
//# sourceMappingURL=Presenter.js.map