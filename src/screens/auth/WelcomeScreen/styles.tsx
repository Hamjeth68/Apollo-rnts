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
  content: {
    color: Colors.themeText2,
    fontSize: RFValue(14),
    width: wp(70),
    marginLeft: wp(5),
    marginTop: hp(25),
    marginBottom: hp(7),
  },

  mainButtonView: {
    backgroundColor: Colors.theme,
    width: wp(90),
    height: hp(6),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  mainButtonText: {
    color: Colors.themeText1,
    fontSize: RFValue(15),
    fontWeight: "bold",
  },

  createAccountContainer: {
    marginLeft: wp(5),
    marginTop: hp(4),
  },
  createAccountText: {
    color: "#F2CD33",
    fontSize: RFValue(15),
    fontWeight: "500",
    marginBottom: hp(7),
  },

  accountButtonView: {
    flexDirection: "row",
    marginLeft: wp(5),
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    width: wp(90),
    height: hp(6),
    paddingLeft: wp(15),
    marginTop: hp(1),
  },
  accountButtonText: {
    color: Colors.themeText2,
    fontSize: RFValue(15),
    fontWeight: "400",
    marginLeft: wp(6),
  },
});
