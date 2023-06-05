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
  logo: {
    resizeMode: "contain",
    width: wp(10),
    height: wp(10),
    marginLeft: wp(5),
    marginTop: hp(7),
  },
  title: {
    fontSize: RFValue(18),
    fontWeight: "600",
    color: Colors.themeText1,
    marginTop: hp(18),
    marginLeft: wp(5),
  },
  buttonView: {
    marginLeft: wp(5),
    marginRight: wp(5),
    marginTop: hp(4),
  },
  button1: {
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    justifyContent: "center",
    height: hp(5.5),
    marginTop: hp(0.7),
  },
  button1Text: {
    fontSize: RFValue(14),
    fontWeight: "600",
    color: Colors.themeText1,
  },

  button2: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    height: hp(5.5),
    marginTop: hp(0.7),
  },
  button2Text: {
    fontSize: RFValue(14),
    fontWeight: "600",
    color: Colors.themeText2,
  },
});
