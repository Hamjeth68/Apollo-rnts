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

interface propsTypes {
  title?: string;
  scenes?: number | string;
  favorite?: boolean;
  cardType: number;
}
const CurationsCard = (props: propsTypes) => {
  const { title, cardType, scenes } = props;
  return (
    <TouchableOpacity style={styles.root}>
      {cardType == 1 ? (
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
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyDojzyvSLRb3DHwEE7fRdS4jZwKPxco4s-eo2jvqbgQ&s",
            }}
          />
          <Image
            style={styles.image1}
            source={{
              uri: "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }}
          />
        </View>
      ) : null}

      {cardType == 2 ? (
        <View style={styles.image4Container}>
          <View style={styles.fourImageRow}>
            <Image
              style={styles.fourImage}
              source={{
                uri: "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000",
              }}
            />
            <Image
              style={styles.fourImage}
              source={{
                uri: "https://img.freepik.com/premium-photo/colorful-illustration-planet-with-planet-moon_470226-366.jpg?w=2000",
              }}
            />
          </View>
          <View style={styles.fourImageRow}>
            <Image
              style={styles.fourImage}
              source={{
                uri: "https://img.freepik.com/premium-photo/high-quality-colorful-background_809796-16.jpg",
              }}
            />
            <Image
              style={styles.fourImage}
              source={{
                uri: "https://img.freepik.com/premium-photo/painting-lake-with-castle-mountain-background_579873-1042.jpg",
              }}
            />
          </View>
        </View>
      ) : null}

      {cardType == 3 ? (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image3}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7b4qdih9G-kDB1hYb9whD_nWkCdBmmW4l8kNYogJ&s",
            }}
          />
          <Image
            style={styles.image3}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyDojzyvSLRb3DHwEE7fRdS4jZwKPxco4s-eo2jvqbgQ&s",
            }}
          />
        </View>
      ) : null}

      {cardType == 4 ? (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image4}
            source={{
              uri: "https://img.freepik.com/premium-photo/painting-mountain-landscape-with-chinese-style-scene_878402-3703.jpg",
            }}
          />
          <Image
            style={styles.image3}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjFDWDz3AX4WjggyiLjPNlmrO0rpHdRUc9RZNL18rramyLrUXtd5thDC9JPQgGkDfTFU&usqp=CAU",
            }}
          />
        </View>
      ) : null}

      {cardType == 5 ? (
        <View style={styles.image4Container}>
          <Image
            style={styles.image5}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCoDzOJbUFeNqA6cXvT6snYHovUHI6ZaaDngI0gBHwbrtqfapNU5t6pErJSlKdqwhUpY&usqp=CAU",
            }}
          />

          <Image
            style={styles.image5}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6S8MRNVMK9LH78ImBUTZk6_rXBCYhjRQ-Sy0Wf-86u_aOEyZ1LBQxU58r1ixGMX1AjCo&usqp=CAU",
            }}
          />
        </View>
      ) : null}

      <View style={styles.mainView}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.countView}>
          <Text style={styles.count}>{scenes}</Text>
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
    marginTop: hp(0.5),
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

  image4Container: {
    marginLeft: wp(2),
  },
  fourImage: {
    width: wp(18.5),
    height: hp(4.5),
    resizeMode: "cover",
    marginLeft: wp(0.5),
    marginBottom: wp(0.5),
  },
  fourImageRow: {
    flexDirection: "row",
  },

  image3: {
    width: wp(18.5),
    height: hp(10),
    resizeMode: "cover",
    marginLeft: wp(0.5),
  },
  image4: {
    width: wp(18.5),
    height: hp(5),
    resizeMode: "cover",
    marginLeft: wp(0.5),
    alignSelf: "center",
  },

  image5: {
    width: wp(38),
    height: hp(4.5),
    resizeMode: "cover",
    marginLeft: wp(0.5),
    marginBottom: wp(0.5),
  },
});

export default CurationsCard;
