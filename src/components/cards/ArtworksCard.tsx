import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "@/src/utils/Colors";
import { RFValue } from "react-native-responsive-fontsize";

interface propsTypes {
  uri1: string;
  title1: string;
  uri2: string;
  title2: string;
  uri22: string;
  title22: string;
  uri3: string;
  title3: string;
  type: boolean;
}
const ArtworksCard = (props: propsTypes) => {
  const { uri1, title1, uri2, title2, uri22, title22, uri3, title3, type } =
    props;
  return type ? (
    <View style={styles.root}>
      <TouchableOpacity style={styles.imageView1}>
        <Image source={{ uri: uri1 }} style={styles.image} />
        <Text style={styles.title}>{title1}</Text>
      </TouchableOpacity>

      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.imageView2}>
            <Image source={{ uri: uri2 }} style={styles.image} />
            <Text style={styles.title}>{title2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageView2}>
            <Image source={{ uri: uri22 }} style={styles.image} />
            <Text style={styles.title}>{title22}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.imageView3}>
          <Image source={{ uri: uri3 }} style={styles.image} />
          <Text style={styles.title}>{title3}</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={styles.root}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.imageView2}>
            <Image source={{ uri: uri2 }} style={styles.image} />
            <Text style={styles.title}>{title2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageView2}>
            <Image source={{ uri: uri22 }} style={styles.image} />
            <Text style={styles.title}>{title22}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.imageView3}>
          <Image source={{ uri: uri3 }} style={styles.image} />
          <Text style={styles.title}>{title3}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.imageView1}>
        <Image source={{ uri: uri1 }} style={styles.image} />
        <Text style={styles.title}>{title1}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    // marginTop: hp(1),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    position: "absolute",
    fontSize: RFValue(11),
    color: Colors.themeText1,
    paddingLeft: wp(2),
    paddingRight: wp(2),
    backgroundColor: "#fff",
    bottom: 0,
  },
  imageView1: { width: wp(30), height: hp(30), paddingRight: wp(1) },

  imageView2: {
    width: wp(30),
    height: hp(15),
    paddingRight: wp(1),
  },

  imageView3: {
    marginTop: wp(1),
    height: hp(15),
    paddingBottom: wp(1),
    paddingRight: wp(1),
  },
});

export default ArtworksCard;
