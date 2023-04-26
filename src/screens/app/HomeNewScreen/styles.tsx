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
  header: {},
  titleView: {
    position: "absolute",
    top: hp(4),
    zIndex: 999,
    flexDirection: "row",
    width: wp(100),
    alignItems: "center",
  },
  titleText: {
    fontSize: RFValue(20),
    color: Colors.themeText2,
    alignSelf: "center",
    marginLeft: wp(32),
  },
  closeButton: { marginLeft: wp(16) },
  headerImage: {
    height: hp(30),
    width: wp(100),
  },
  sectionTitle: {
    fontSize: RFValue(18),
    marginBottom: hp(2),
    color: Colors.themeText1,
    marginLeft: wp(5),
    marginTop: hp(2),
    borderBottomColor: "#F2CD33",
    borderBottomWidth: 3,
    paddingBottom: hp(1),
    width: wp(50),
    fontWeight: "bold",
  },
  flatlist: {
    marginLeft: wp(5),
    paddingRight: wp(8),
  },

  NewPlaylistTitle: {
    fontSize: RFValue(18),
    color: Colors.themeText1,
    marginLeft: wp(5),
    marginTop: hp(2),
    marginBottom: hp(2),
    borderBottomColor: "#F2CD33",
    borderBottomWidth: 3,
    paddingBottom: hp(1),
    width: wp(66),
    fontWeight: "bold",
  },
  ArtworkslistTitle: {
    fontSize: RFValue(18),
    color: Colors.themeText1,
    marginLeft: wp(5),
    marginTop: hp(2),
    marginBottom: hp(2),
    borderBottomColor: "#F2CD33",
    borderBottomWidth: 3,
    paddingBottom: hp(1),
    width: wp(70),
    fontWeight: "bold",
  },
});
