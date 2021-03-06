/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
import { Root } from "native-base";

import Router from "./src/Router";

export default class App extends Component {
  render() {
    return (
      <Root>
        <Router />
      </Root>
    );
  }
}
