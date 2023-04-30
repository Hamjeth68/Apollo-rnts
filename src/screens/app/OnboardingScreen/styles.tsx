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
  header: {
    flexDirection: "row",
    marginLeft: wp(5),
    marginTop: hp(2),
    alignItems: "center",
  },
  logo: {
    width: wp(7),
    resizeMode: "contain",
  },
  title: {
    color: Colors.themeText1,
    fontSize: RFValue(20),
    fontWeight: "bold",
    marginLeft: wp(15),
  },
  subTitle: {
    marginLeft: wp(5),
    marginTop: hp(1),
    color: Colors.themeText1,
    fontSize: RFValue(16),
    fontWeight: "bold",
  },
  onBodingView: {
    alignSelf: "center",
    marginTop: hp(2),
  },
  onBodingContainer: {
    backgroundColor: Colors.theme,
  },
  image: { height: hp(45) },

  onBodingTitle: {
    color: Colors.themeText1,
    fontSize: RFValue(18),
    fontWeight: "bold",
    marginLeft: wp(6),
  },
  onBodingContent: {
    color: Colors.themeText1,
    fontSize: RFValue(14),
    marginTop: hp(1),
    marginLeft: wp(6),
    marginRight: wp(6),
    marginBottom: hp(5),
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(1),
  },
  leftButton: {
    backgroundColor: "#fff",
    width: wp(43),
    height: hp(6),
    alignItems: "center",
    justifyContent: "center",
  },
  leftButtonText: {
    color: Colors.themeText1,
    fontSize: RFValue(15),
    fontWeight: "600",
  },
  rightButton: {
    backgroundColor: "#000",
    width: wp(43),
    height: hp(6),
    alignItems: "center",
    justifyContent: "center",
  },
  rightButtonText: {
    color: Colors.themeText2,
    fontSize: RFValue(15),
    fontWeight: "600",
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  dotView: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: hp(3),
    marginBottom: hp(3),
  },
});
