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
import Suggested from "@/screens/app/SelectArtworks/Suggested";

const Tab = createMaterialTopTabNavigator();

const SelectArtworksTopTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#181818",
        tabBarInactiveTintColor: "#000",
        swipeEnabled: false,
        tabBarIndicatorContainerStyle: {
          marginLeft: wp(2),
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#F2CD33",
          height: 5,
        },
        tabBarLabelStyle: {
          fontSize: RFValue(11),
          fontWeight: "bold",
          textAlign: "left",
        },

        tabBarStyle: {
          height: hp(6),
          //  width: wp(90),
          marginLeft: wp(5),
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Suggested"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={styles.title}>Suggested</Text>
          ),
        }}
        component={Suggested}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={styles.title}>Favorites</Text>
          ),
        }}
        component={Suggested}
      />
      <Tab.Screen
        name="Recent"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={styles.title}>Recent</Text>
          ),
        }}
        component={Suggested}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={styles.title}>Search</Text>
          ),
        }}
        component={Suggested}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#000",
    fontSize: RFValue(11),
    fontWeight: "bold",
  },
});
export default SelectArtworksTopTab;
