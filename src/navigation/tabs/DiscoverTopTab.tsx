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

const Tab = createMaterialTopTabNavigator();

const DiscoverTopTab = () => {
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
          width: wp(20),
          textAlign: "left",
        },

        tabBarStyle: {
          height: hp(6),
          width: wp(80),
          alignSelf: "flex-end",
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Discover"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={styles.title}>Discover</Text>
          ),
        }}
        component={DiscoverView}
      />
      <Tab.Screen
        name="Nfts"
        options={{
          tabBarLabel: ({ focused }) => <Text style={styles.title}>NFTs</Text>,
        }}
        component={NFTsScreen}
      />
      <Tab.Screen
        name="Artists"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={styles.title}>Artists</Text>
          ),
        }}
        component={ArtistsScreen}
      />
      <Tab.Screen
        name="Genres"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={styles.title}>Genres</Text>
          ),
        }}
        component={GenresScreen}
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
export default DiscoverTopTab;
