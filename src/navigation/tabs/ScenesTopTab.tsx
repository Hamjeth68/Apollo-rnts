import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DiscoverView from "@/screens/app/DiscoverView";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import NFTsScreen from "@/screens/app/NFTsScreen";
import ArtistsScreen from "@/screens/app/ArtistsScreen";
import GenresScreen from "@/screens/app/GenresScreen";
import ScenesSavedView from "@/screens/app/ScenesSavedView";

const Tab = createMaterialTopTabNavigator();

const ScenesTopTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#181818",
        tabBarInactiveTintColor: "#000",
        swipeEnabled: false,

        tabBarIndicatorStyle: {
          backgroundColor: "#F2CD33",
          height: 5,
          marginLeft: wp(2),
        },
        tabBarLabelStyle: {
          fontSize: RFValue(11),
          fontWeight: "bold",
          textAlign: "left",
        },

        tabBarStyle: {
          height: hp(6),
          width: wp(90),
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Saved"
        options={{
          tabBarLabel: ({ focused }) => <Text style={styles.title}>Saved</Text>,
        }}
        component={ScenesSavedView}
      />
      <Tab.Screen
        name="Recommended"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={styles.title}>Recommended</Text>
          ),
        }}
        component={NFTsScreen}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={styles.title}>Favorites</Text>
          ),
        }}
        component={ArtistsScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#000",
    fontSize: RFValue(10),
    fontWeight: "bold",
  },
});
export default ScenesTopTab;
