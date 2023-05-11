import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoverTopTab from "./DiscoverTopTab";
import { DiscoverBottomTabParamList } from "@/models/Navigation-Modal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "@/src/utils/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DiscoverScreen from "@/screens/app/DiscoverScreen";
import FavoriteScreen from "@/screens/app/FavoriteScreen";
import ScenesScreen from "@/screens/app/ScenesScreen";
import ScenesStack from "../staks/ScenesStack";

const Tab = createBottomTabNavigator<DiscoverBottomTabParamList>();

const DiscoverBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#D9D9D9",
        tabBarInactiveTintColor: "#000",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#b3b3b3",
          borderTopWidth: Platform.OS == "ios" ? 1.5 : 3,
          height: Platform.OS == "ios" ? hp(12) : hp(10),
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconView}>
              <Ionicons
                name="search"
                size={Platform.OS == "ios" ? 25 : 35}
                color={color}
              />
              <Text style={[styles.tabIconText, { color: color }]}>
                Discover
              </Text>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconView}>
              <Ionicons
                name="ios-heart"
                size={Platform.OS == "ios" ? 25 : 35}
                color={color}
              />
              <Text style={[styles.tabIconText, { color: color }]}>
                Favorite
              </Text>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="ScenesStack"
        component={ScenesStack}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconView}>
              <Ionicons
                name="laptop-sharp"
                size={Platform.OS == "ios" ? 25 : 35}
                color={color}
              />
              <Text style={[styles.tabIconText, { color: color }]}>Scenes</Text>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="DiscoverTopTab4"
        component={DiscoverTopTab}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconView}>
              <Ionicons
                name="list"
                size={Platform.OS == "ios" ? 25 : 35}
                color={color}
              />
              <Text style={[styles.tabIconText, { color: color }]}>
                Curation
              </Text>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="DiscoverTopTab5"
        component={DiscoverTopTab}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconView}>
              <FontAwesome
                name="user-circle"
                size={Platform.OS == "ios" ? 25 : 35}
                color={color}
              />
              <Text style={[styles.tabIconText, { color: color }]}>
                Profile
              </Text>
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconView: {
    alignItems: "center",
  },
  tabIconText: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: Platform.OS == "ios" ? RFValue(9) : RFValue(11),
    fontWeight: "500",
  },
});

export default DiscoverBottomTab;
