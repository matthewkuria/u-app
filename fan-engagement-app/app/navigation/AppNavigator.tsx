import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./AuthNavigator";
import TabsNavigator from "./TabsNavigator";
import { useAuth } from "../context/AuthContext"; // Import AuthContext

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Main" component={TabsNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
