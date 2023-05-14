import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "@/src/utils/Colors";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text1: {
    marginTop: hp(2),
    marginLeft: wp(5),
    fontWeight: "500",
  },
  text2: {
    marginLeft: wp(5),
    fontWeight: "500",
    marginBottom: hp(2),
  },

  list: {
    paddingBottom: hp(15),
  },
  card1: {
    backgroundColor: "#F8F8F8",
    marginLeft: wp(5),
    marginRight: wp(5),
    padding: 8,
    marginTop: hp(2),
    alignItems: "center",
    height: hp(24),
  },
  title: {
    color: Colors.themeText3,
    fontWeight: "600",
    fontSize: RFValue(12),
    marginTop: hp(1),
    marginBottom: hp(2),
  },

  card1Row: {
    flexDirection: "row",
  },
  card1Obj: {
    backgroundColor: "#757575",
    width: wp(30),
    height: wp(14),
    marginBottom: wp(0.8),
    marginRight: wp(0.8),
  },
  objNumber: {
    color: Colors.themeText1,
    fontSize: RFValue(12),
    fontWeight: "600",
    position: "absolute",
    left: wp(2),
    bottom: wp(2),
  },
  view2: {
    backgroundColor: "#757575",
    width: wp(61.6),
    height: wp(29.6),
  },
  objNumber2: {
    marginLeft: wp(2),
    marginTop: wp(2),
    fontSize: RFValue(12),
    fontWeight: "600",
  },

  view3: {
    backgroundColor: "#757575",
    width: wp(61.6),
    height: wp(16),
    marginBottom: wp(0.8),
  },

  view4: {
    backgroundColor: "#757575",
    width: wp(28),
    height: wp(34),
    marginBottom: wp(0.8),
    marginRight: wp(0.8),
  },
});
