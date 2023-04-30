import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "@/screens/auth/WelcomeScreen";
import LoginScreen from "@/screens/auth/LoginScreen";
import { AuthStackParamList } from "@/models/Navigation-Modal";
import OnboardingScreen from "@/screens/app/OnboardingScreen";
import PreferencesScreen from "@/screens/app/PreferencesScreen";
import HomeNewScreen from "@/screens/app/HomeNewScreen";
import DiscoverBottomTab from "../tabs/DiscoverBottomTab";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="PreferencesScreen" component={PreferencesScreen} />
      <Stack.Screen name="HomeNewScreen" component={HomeNewScreen} />
      <Stack.Screen name="DiscoverBottomTab" component={DiscoverBottomTab} />
    </Stack.Navigator>
  );
};

export default AuthStack;
