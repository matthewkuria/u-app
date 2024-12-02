import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignupScreen from "../screens/Auth/SignupScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPasswordScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ title: "Sign Up", headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: "Forgot Password" }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
