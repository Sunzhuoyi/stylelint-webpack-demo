import * as React from "react";
import "./app.css";
import {withRouter, Switch, Route, Redirect} from "react-router-dom";
import "antd/dist/antd.css";

interface AppProps {

}

interface AppState {

}

export default class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return (
           <div className="Main">
               test for stylelint
           </div>
        );
    }

}