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
  },
  logo: {
    width: wp(wp(10)),
    resizeMode: "contain",
    marginLeft: wp(5),
    marginTop: hp(1),
  },

  welcome: {
    color: Colors.themeText2,
    fontSize: RFValue(34),
    fontWeight: "500",
    marginLeft: wp(5),
    marginTop: hp(30),
  },
  content: {
    color: Colors.themeText2,
    marginLeft: wp(5),
    marginTop: hp(0.5),
    marginBottom: hp(5),
    fontSize: RFValue(13),
    width: wp(60),
  },

  accountButtonView: {
    flexDirection: "row",
    marginLeft: wp(5),
    alignItems: "center",
    backgroundColor: Colors.themeText2,
    width: wp(90),
    height: hp(6),
    paddingLeft: wp(15),
    marginTop: hp(1),
  },
  buttonIcon: {
    resizeMode: "contain",
    width: wp(7),
    height: hp(5),
  },
  accountButtonText: {
    color: Colors.themeText1,
    fontSize: RFValue(14),
    fontWeight: "bold",
    marginLeft: wp(6),
  },

  footerText: {
    color: Colors.themeText2,
    fontSize: RFValue(13),
    marginTop: hp(2.5),
    marginLeft: wp(5),
    marginBottom: hp(10),
  },
  signUpText: {
    color: Colors.themeText2,
    fontSize: RFValue(13),
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
