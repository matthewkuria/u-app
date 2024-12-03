import React from "react";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import AppNavigation from "./navigation/AppNavigator";

export default function App() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <AppNavigation />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
