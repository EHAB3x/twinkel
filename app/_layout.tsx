import React from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { EvilIcons, FontAwesome, FontAwesome6, Ionicons } from "@expo/vector-icons";
import HomeScreen from "./(tabs)/index"; // Adjust the path as necessary
import ChatPage from "./(tabs)/chat"; // Adjust the path as necessary

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#EFEBF1",
            tabBarInactiveTintColor: "#efebf175",
            tabBarStyle: {
              position: "absolute",
              backgroundColor: "#3A0C87",
              borderColor: "transparent",
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="moon-o" color="#EFEBF1" size={24} />
              ),
            }}
          />

          <Tab.Screen
            name="Doctors"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="user-doctor" color="#EFEBF1" size={24} />
              ),
            }}
          />

          <Tab.Screen
            name="Stats"
            component={HomeScreen}
            options={{
              tabBarStyle:{
                display:"flex"
              },
              tabBarIcon: ({ color, size }) => (
                <EvilIcons name="gear" color="#EFEBF1" size={24} />
              ),
            }}
          />

          <Tab.Screen
            name="Settings"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="user-doctor" color="#EFEBF1" size={24} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 60,
    right: 20,
    backgroundColor: "#3A0C87",
    width: 50,
    height: 50,
    borderRadius: 25,
    elevation: 5, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
