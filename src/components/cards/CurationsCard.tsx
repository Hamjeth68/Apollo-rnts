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
import Ionicons from "react-native-vector-icons/Ionicons";

interface propsTypes {}
const CurationsCard = (props: propsTypes) => {
  return (
    <TouchableOpacity style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image1}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7b4qdih9G-kDB1hYb9whD_nWkCdBmmW4l8kNYogJ&s",
          }}
        />
        <Image
          style={styles.image1}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7b4qdih9G-kDB1hYb9whD_nWkCdBmmW4l8kNYogJ&s",
          }}
        />
        <Image
          style={styles.image1}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7b4qdih9G-kDB1hYb9whD_nWkCdBmmW4l8kNYogJ&s",
          }}
        />
      </View>
      <View style={styles.mainView}>
        <Text style={styles.title}>Apollo Curations</Text>
        <View style={styles.countView}>
          <Text style={styles.count}>3</Text>
          <Text style={styles.scenes}>Scenes</Text>
        </View>
        <View style={styles.favoriteView}>
          <Ionicons name="heart" size={20} color={"#F2CD33"} />
          <Text style={styles.favorite}>Favorite</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.background1,
    height: hp(14),
    flexDirection: "row",
    alignSelf: "center",
    width: wp(90),
    alignItems: "center",
  },
  imageContainer: {
    flexDirection: "row",
    marginLeft: wp(2),
  },
  image1: {
    width: wp(12),
    height: hp(10),
    resizeMode: "cover",
    marginLeft: wp(0.5),
  },
  mainView: {
    marginLeft: wp(5),
    height: hp(10),
    justifyContent: "space-between",
  },
  title: {
    fontSize: RFValue(13),
    fontWeight: "600",
    color: Colors.themeText1,
  },
  countView: {
    flexDirection: "row",
  },
  count: {
    fontSize: RFValue(13),
    color: "#7E7E7E",
    fontWeight: "600",
    backgroundColor: "#DDDDDD",
    height: wp(5),
    width: wp(5),
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  scenes: {
    color: "#7E7E7E",
    fontSize: RFValue(13),
    fontWeight: "600",
    marginLeft: wp(2),
  },
  favoriteView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp(25),
    height: hp(3),
    paddingLeft: wp(2),
    paddingRight: wp(2),
    borderColor: "#F2CD33",
    borderWidth: 1,
    borderRadius: 50,
    marginTop: hp(1),
  },
  favorite: {
    fontSize: RFValue(11),
    color: "#F2CD33",
    fontWeight: "600",
  },
});

export default CurationsCard;
