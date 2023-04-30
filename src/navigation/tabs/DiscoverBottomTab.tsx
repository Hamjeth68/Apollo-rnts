import { View, Text, StyleSheet } from "react-native";
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
          borderTopWidth: 3,
          height: hp(10),
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
              <Ionicons name="search" size={35} color={color} />
              <Text style={[styles.tabIconText, { color: color }]}>
                Discover
              </Text>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="DiscoverTopTab2"
        component={DiscoverTopTab}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconView}>
              <Ionicons name="ios-heart" size={35} color={color} />
              <Text style={[styles.tabIconText, { color: color }]}>
                Favorite
              </Text>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="DiscoverTopTab3"
        component={DiscoverTopTab}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIconView}>
              <Ionicons name="laptop-sharp" size={35} color={color} />
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
              <Ionicons name="list" size={35} color={color} />
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
              <FontAwesome name="user-circle" size={35} color={color} />
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
    fontSize: RFValue(11),
    fontWeight: "500",
  },
});

export default DiscoverBottomTab;
