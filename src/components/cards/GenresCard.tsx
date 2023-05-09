import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "@/src/utils/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";

interface propsTypes {
  imageUri: string;
  title: string;
}
const GenresCard = (props: propsTypes) => {
  const { imageUri, title } = props;
  return (
    <TouchableOpacity style={styles.root}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: imageUri }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.background1,
    width: wp(22),
    marginRight: wp(1),
    height: hp(18),
  },
  image: {
    height: wp(20),
    width: "100%",
  },
  title: {
    fontSize: RFValue(11),
    marginTop: hp(1.5),
    fontWeight: "400",
  },
});

export default GenresCard;
