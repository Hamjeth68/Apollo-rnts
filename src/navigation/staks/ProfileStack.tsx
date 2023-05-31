import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "@/models/Navigation-Modal";

import ProfileScreen from "@/screens/Profile/ProfileScreen";
import ProfileManagementScreen from "@/screens/Profile/ProfileManagementScreen";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="ProfileManagementScreen"
        component={ProfileManagementScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
