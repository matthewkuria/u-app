import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import NewsListScreen from "../screens/News/NewsListScreen";
import TeamListScreen from "../screens/Teams/TeamListScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import { Ionicons } from "@expo/vector-icons"; // Icon package for tabs

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Dashboard") iconName = "home";
          else if (route.name === "News") iconName = "newspaper";
          else if (route.name === "Teams") iconName = "people";
          else if (route.name === "Settings") iconName = "settings";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="News" component={NewsListScreen} />
      <Tab.Screen name="Teams" component={TeamListScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
