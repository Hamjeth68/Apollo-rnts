import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "@/src/utils/Colors";
import { RFValue } from "react-native-responsive-fontsize";

interface propsTypes {
  name: string;
  imageUri: string;
}
const NewPlaylistCard = (props: propsTypes) => {
  const { name, imageUri } = props;
  return (
    <TouchableOpacity style={styles.root}>
      <ImageBackground
        style={styles.image}
        source={{ uri: imageUri }}
        resizeMode="cover"
      >
        <Text style={styles.title}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: wp(25),
    height: wp(25),
    marginRight: wp(1),
  },
  image: { width: wp(25), height: wp(25) },
  title: {
    fontSize: RFValue(11),
    fontWeight: "500",
    color: Colors.themeText1,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default NewPlaylistCard;
