import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "@/src/utils/Colors";
import { RFValue } from "react-native-responsive-fontsize";

interface propsTypes {
  imageUri?: string;
  name?: string;
}

const ArtistsScreenCard = (props: propsTypes) => {
  const { imageUri, name } = props;
  return (
    <TouchableOpacity style={styles.root}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: imageUri,
        }}
      />
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#a2a2a244",
    width: wp(30),
    marginRight: wp(0.5),
    marginBottom: wp(0.5),
    height: hp(21),
  },
  image: {
    height: wp(25),
    width: wp(25),
    borderRadius: 50,
    marginTop: hp(0.5),
    alignSelf: "center",
  },
  title: {
    fontSize: RFValue(12),
    color: Colors.themeText1,
    fontWeight: "400",
    width: wp(20),
    marginLeft: wp(1.5),
    marginTop: hp(2),
    // marginBottom: hp(1),
  },
});

export default ArtistsScreenCard;
