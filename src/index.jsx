"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
require("./index.css");
var App_1 = require("./App");
var initReactFastclick = require("react-fastclick");
initReactFastclick();
ReactDOM.render(<react_router_dom_1.BrowserRouter>
        <react_router_dom_1.Switch>
            <react_router_dom_1.Route path="/" component={App_1.default}/>
        </react_router_dom_1.Switch>
    </react_router_dom_1.BrowserRouter>, document.getElementById("root"));
