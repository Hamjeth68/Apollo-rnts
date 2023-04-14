import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "@/screens/auth/WelcomeScreen";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="light" />
      <WelcomeScreen />
    </PaperProvider>
  );
}
