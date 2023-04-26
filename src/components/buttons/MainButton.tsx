import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "@/src/utils/Colors";
import { RFValue } from "react-native-responsive-fontsize";

const MainButton = () => {
  return (
    <TouchableOpacity style={styles.view}>
      <Text style={styles.text}>View All</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    borderColor: Colors.themeText1,
    borderWidth: 1,
    alignItems: "center",
    paddingTop: hp(1.6),
    paddingBottom: hp(1.6),
    marginLeft: wp(5),
    marginRight: wp(5.5),
    marginTop: hp(1),
    marginBottom: hp(3),
  },
  text: {
    fontSize: RFValue(15),
    color: Colors.themeText1,
    fontWeight: "bold",
  },
});

export default MainButton;
