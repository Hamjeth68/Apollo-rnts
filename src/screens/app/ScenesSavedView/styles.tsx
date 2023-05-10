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

  flatList: { paddingBottom: hp(12) },

  button: {
    position: "absolute",
    bottom: hp(3),
    backgroundColor: Colors.themeText1,
    width: wp(90),
    height: hp(5),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.themeText2,
    fontSize: RFValue(12),
    fontWeight: "bold",
  },
});
