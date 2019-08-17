import React from "react";
import { YellowBox, StatusBar } from "react-native";

import "~/config/ReactotronConfig";

import Routes from "~/routes";

YellowBox.ignoreWarnings(['componentWillUpdate is deprecated']);

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    <Routes />
  </>
);

export default App;
