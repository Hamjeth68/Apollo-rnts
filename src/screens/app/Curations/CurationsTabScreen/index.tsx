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
import MainNavigationBar from "@/components/NavigationBars/MainNavigationBar";
import FavoriteCurationsScreen from "../FavoriteCurationsScreen";
import Colors from "@/src/utils/Colors";
import { styles } from "./styles";
import MyCurationsScreen from "../MyCurationsScreen";

const Tab = createMaterialTopTabNavigator();

const CurationsTabScreen = ({ navigation }: any) => {
  return (
    <View style={styles.root}>
      <MainNavigationBar
        onPress={() => {
          navigation.goBack();
        }}
        title="Curations"
      />

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#181818",
          tabBarInactiveTintColor: "#000",
          swipeEnabled: false,

          tabBarIndicatorStyle: {
            backgroundColor: "#F2CD33",
            height: 5,
            marginLeft: wp(3.5),
            width: wp(23),
          },
          tabBarLabelStyle: {
            fontSize: RFValue(11),
            fontWeight: "bold",
            textAlign: "left",
          },

          tabBarStyle: {
            height: hp(6),
            width: wp(60),
            backgroundColor: "transparent",
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="Favorites"
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={styles.title}>Favorites</Text>
            ),
          }}
          component={FavoriteCurationsScreen}
        />
        <Tab.Screen
          name="MyCurations"
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={styles.title}>My Curations</Text>
            ),
          }}
          component={MyCurationsScreen}
        />
      </Tab.Navigator>
    </View>
  );
};

export default CurationsTabScreen;
