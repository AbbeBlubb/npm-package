"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presenter = void 0;
var React = __importStar(require("react"));
var Button_1 = require("./Button");
var Hello_1 = require("./Hello");
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
                React.createElement(Hello_1.Hello, { name: "Elvis!" })),
            React.createElement("div", { style: { marginTop: "40px" } },
                React.createElement("p", { style: { fontWeight: "bold" } }, "Button component"),
                React.createElement(Button_1.Button, { text: "Julio!" }))));
    };
    return Presenter;
}(React.Component));
exports.Presenter = Presenter;
//# sourceMappingURL=Presenter.js.map