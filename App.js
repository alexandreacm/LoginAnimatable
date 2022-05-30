import React from "react";
import { StatusBar } from "react-native";

import Routes from "./src/routes";
import { COLORS } from "./src/theme";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={COLORS.PRIMARY_COLOR}
        barStyle="light-content"
      />
      <Routes />
    </>
  );
}
