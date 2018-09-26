import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import Home from "./screens/Home";

class RouterComponent extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Scene key="root" tabs hideTabBar hideNavBar>
          <Scene key="home" component={Home} tabs hideTabBar hideNavBar />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
