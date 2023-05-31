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
  profileContainer: {
    backgroundColor: "#F8F8F8",
    marginLeft: wp("5%"),
    marginRight: wp("5%"),
    marginTop: hp(3),
    flexDirection: "row",
    padding: wp(2.5),
    alignItems: "center",
    borderRadius: 10,
  },
  profileImage: {
    width: wp(22),
    height: wp(22),
    borderRadius: 50,
    resizeMode: "cover",
  },
  profileSubContainer: {
    marginLeft: wp(5),
  },
  profileTitle: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    marginBottom: hp(0.5),
  },
  profileSubTitle: {
    fontSize: RFValue(12),
    fontWeight: "500",
    marginBottom: hp(0.7),
  },
  profileStatesView: {
    backgroundColor: Colors.yellow,
    width: wp(13),
    alignItems: "center",
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 50,
  },
  profileStatus: {
    fontSize: RFValue(11),
  },
  buttonView: {
    marginTop: hp(5),
    marginBottom: hp(5),
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
  },
  buttonIcon: {},
  profileButtonTitle: {
    fontSize: RFValue(15),
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
    left: wp(20),
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
