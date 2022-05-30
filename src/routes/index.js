import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelCome from "../screens/WelCome";
import SignIn from "../screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="welcome" component={WelCome} />
        <Screen name="signin" component={SignIn} />
      </Navigator>
    </NavigationContainer>
  );
}
