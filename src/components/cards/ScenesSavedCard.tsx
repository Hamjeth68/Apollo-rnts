import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "@/src/utils/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import { Image } from "react-native";

interface Props {
  title?: string;
  total?: number;
  uri1: string;
  uri2: string;
  uri3: string;
}

const ScenesSavedCard = (props: Props) => {
  const { title, total, uri1, uri2, uri3 } = props;
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subTitleView}>
          <Text style={styles.total}>{total}</Text>
          <Text style={styles.curations}>Curations</Text>
        </View>
      </View>
      <View style={styles.imageView}>
        <Image resizeMode="cover" source={{ uri: uri1 }} style={styles.image} />
        <Image resizeMode="cover" source={{ uri: uri2 }} style={styles.image} />
        <Image resizeMode="cover" source={{ uri: uri3 }} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: wp(5),
    marginRight: wp(5),
    backgroundColor: Colors.background1,
    padding: 8,
    marginTop: hp(1),
  },
  container: {
    width: "40%",
  },
  title: {
    fontSize: RFValue(12),
    fontWeight: "bold",
    color: Colors.themeText1,
  },
  subTitleView: {
    flexDirection: "row",
    marginTop: hp(2),
    alignItems: "center",
  },
  total: {
    fontSize: RFValue(10),
    fontWeight: "bold",
    color: "#626060ca",
    backgroundColor: "#e5e5e5",
    height: wp(5),
    width: wp(5),
    textAlign: "center",
    paddingTop: wp(0.5),
  },
  curations: {
    fontSize: RFValue(10),
    fontWeight: "bold",
    color: "#626060ca",
    marginLeft: wp(1),
  },
  imageView: {
    flexDirection: "row",
  },
  image: {
    marginRight: 2,
    width: wp(13),
    height: hp(12),
  },
});

export default ScenesSavedCard;
