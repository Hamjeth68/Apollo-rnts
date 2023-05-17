import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "@/screens/auth/WelcomeScreen";
import Routes from "./src/navigation/Routes";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar style="light" />
        <Routes />
      </PaperProvider>
    </Provider>
  );
}
