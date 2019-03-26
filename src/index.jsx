/**
 * Copyright (C) oxidio. See LICENSE file for license details.
 */

import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

class App extends React.Component {
    render() {
        return <h1>{this.props.name}</h1>;
    }
}

ReactDOM.render(<App name="oxidio/module-pim" />, document.getElementById("app"));
