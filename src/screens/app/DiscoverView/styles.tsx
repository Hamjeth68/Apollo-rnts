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
  scrollView: { paddingBottom: hp(3) },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: wp(5),
    marginRight: wp(5),
    marginTop: hp(3),
  },
  titleText: {
    fontSize: RFValue(13),
    fontWeight: "bold",
  },
  viewAllButton: {
    borderBottomColor: "#000",
    borderBottomWidth: 1.5,
  },
  viewAllButtonText: { fontSize: RFValue(13), fontWeight: "bold" },
  flatlist: {
    marginLeft: wp(5),
    paddingRight: wp(8),
    marginTop: hp(1),
  },
  upDownButton: {},
});
