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
  },
  card1: {
    backgroundColor: "#F8F8F8",
    marginLeft: wp(5),
    marginRight: wp(5),
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    marginTop: hp(2),
  },
  leftContainer: {
    justifyContent: "center",
  },
  title: {
    fontSize: RFValue(13),
    fontWeight: "600",
    color: Colors.themeText1,
  },
  description: {
    color: "#7E7E7E",
    fontWeight: "600",
    fontSize: RFValue(10),
  },
  rightContainer: {
    flexDirection: "row",
  },
  views: {
    backgroundColor: "#757575",
    marginRight: 2,
    width: wp(13),
    height: hp(12),
  },

  card2: {
    backgroundColor: "#F8F8F8",
    marginLeft: wp(5),
    marginRight: wp(5),
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    marginTop: hp(0.5),
  },
  rowView: {
    flexDirection: "row",
    marginBottom: 2,
  },
  views2: {
    backgroundColor: "#757575",
    marginRight: 2,
    width: wp(19.8),
    height: hp(5),
  },
});
