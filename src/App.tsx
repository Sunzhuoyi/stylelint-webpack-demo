import * as React from "react";
import "./App.css";
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
           <div>
               test for stylelint
           </div>
        );
    }

}