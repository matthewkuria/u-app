import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./AuthNavigator";
import TabsNavigator from "./TabsNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabsNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
