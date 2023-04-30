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
  searchContainer: {
    flexDirection: "row",
    borderColor: "#b3b3b3",
    borderWidth: hp(0.18),
    marginTop: hp(7),
    width: wp(88),
    height: hp(5.5),
    alignSelf: "center",
    borderRadius: 50,
    marginBottom: hp(2),
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    marginLeft: wp(5),
    fontWeight: "600",
  },
  searchIcon: {
    marginRight: wp(5),
  },
  newButton: {
    zIndex: 99999,
    position: "absolute",
    top: hp(16),
    left: wp(6),
  },
  newButtonText: {
    color: "#000",
    fontSize: RFValue(11),
    fontWeight: "bold",
  },
});
