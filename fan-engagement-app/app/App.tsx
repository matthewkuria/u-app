import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { PreferencesProvider } from "./context/PreferencesContext";
import AppNavigation from "./navigation/AppNavigator";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <PreferencesProvider>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </PreferencesProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
