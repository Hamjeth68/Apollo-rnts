import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "@/src/utils/Colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.theme,
  },
  scrollView: {
    paddingBottom: hp(10),
  },
  filterContainer: {
    flexDirection: "row",
    height: hp(5),
    marginLeft: wp(5),
    marginRight: wp(5),
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  filterButton: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  filterText: {
    flex: 0.5,
    color: Colors.themeText1,
    fontSize: RFValue(12),
    fontWeight: "bold",
  },
});
