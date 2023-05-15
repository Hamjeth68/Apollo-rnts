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
  backButton: {
    marginTop: hp("7"),
    marginLeft: wp("5"),
    position: "absolute",
  },
  display: {
    marginTop: hp("8"),
    marginLeft: wp("12"),
  },
  divider: {
    borderBottomColor: Colors.themeText4,
    borderBottomWidth: 3,
    marginTop: hp("4"),
  },
  row1: {
    flexDirection: "row",
  },

  image: {
    borderColor: Colors.themeText1,
    borderWidth: 1,
    width: wp("37"),
    height: hp("9"),
    marginRight: wp("1"),
    marginBottom: wp("1"),
  },
  imageNumber: {
    color: Colors.themeText1,
    position: "absolute",
    bottom: wp("1"),
    left: wp("1"),
    fontWeight: "bold",
  },
  title: {
    color: Colors.themeText3,
    marginTop: hp(1.5),
    fontWeight: "600",
  },
});
