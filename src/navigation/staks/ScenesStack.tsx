import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScenesScreen from "@/screens/app/ScenesScreen";
import { ScenesStackParamList } from "@/models/Navigation-Modal";
import SelectDisplayScreen from "@/screens/app/SelectDisplayScreen";
import DisplayConfigurationScreen from "@/screens/app/DisplayConfigurationScreen";
import SelectArtworksScreen from "@/screens/app/SelectArtworks";

const Stack = createNativeStackNavigator<ScenesStackParamList>();

const ScenesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ScenesScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ScenesScreen" component={ScenesScreen} />
      <Stack.Screen
        name="SelectDisplayScreen"
        component={SelectDisplayScreen}
      />
      <Stack.Screen
        name="DisplayConfigurationScreen"
        component={DisplayConfigurationScreen}
      />
      <Stack.Screen
        name="SelectArtworksScreen"
        component={SelectArtworksScreen}
      />
    </Stack.Navigator>
  );
};

export default ScenesStack;
