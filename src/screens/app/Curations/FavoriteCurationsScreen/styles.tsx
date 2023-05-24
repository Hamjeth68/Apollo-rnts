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
    backgroundColor: Colors.theme,
    paddingTop: hp(2),
  },
  title: {
    color: "#000",
    fontSize: RFValue(12),
    fontWeight: "bold",
  },
});
