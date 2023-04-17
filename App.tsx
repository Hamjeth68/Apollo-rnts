import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "@/screens/auth/WelcomeScreen";
import Routes from "./src/navigation/Routes";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="light" />
      <Routes />
    </PaperProvider>
  );
}
