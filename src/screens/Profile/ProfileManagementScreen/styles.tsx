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
  profileCardView: {
    marginLeft: wp(5),
    marginTop: hp(3),
    paddingRight: wp(10),
  },

  addProfileButton: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    height: hp(5),
    marginTop: hp(3),
    width: wp(45),
    alignSelf: "center",
  },
  addProfileButtonText: {
    color: "#fff",
    fontSize: RFValue(14),
    fontWeight: "500",
  },

  buttonView: {
    marginTop: hp(5),
    marginBottom: hp(5),
  },
  buttonViewTitle: {
    fontSize: RFValue(14),
    marginLeft: wp(7),
    fontWeight: "600",
    marginBottom: hp(2),
  },

  profileButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: wp(7),
    borderTopColor: "#F7F7F7",
    borderBottomColor: "#F7F7F7",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    height: hp(8),
    justifyContent: "space-between",
  },
  profileButtonTitle: {
    fontSize: RFValue(12),
    fontWeight: "600",
    textAlign: "left",
  },

  switchStyle: { borderColor: "#C9C9C9", marginRight: wp(5) },

  profileButtonTitleRight: {
    fontSize: RFValue(12),
    fontWeight: "600",
    textAlign: "left",
    marginRight: wp(5),
    textDecorationLine: "underline",
  },

  logoutButton: {
    backgroundColor: "#000",
    marginLeft: wp(5),
    marginRight: wp(5),
    justifyContent: "center",
    alignItems: "center",
    height: hp(6),
    marginTop: hp(1),
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: RFValue(15),
    fontWeight: "600",
  },
  DeleteButton: {
    marginLeft: wp(5),
    marginRight: wp(5),
    justifyContent: "center",
    alignItems: "center",
    height: hp(6),
    borderColor: "#000",
    borderWidth: 1,
    marginTop: hp(1),
    marginBottom: hp(3),
  },
  DeleteButtonText: {
    color: "#000",
    fontSize: RFValue(14),
    fontWeight: "600",
  },
});
