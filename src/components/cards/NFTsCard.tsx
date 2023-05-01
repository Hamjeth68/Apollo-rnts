import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
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
  description?: string;
  type?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const NFTsCard = (props: propsTypes) => {
  const { imageUri, name, description, type, onPress } = props;
  return type ? (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <View style={styles.textView}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: imageUri,
        }}
      />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.root}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: imageUri,
        }}
      />
      <View style={styles.textView}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: wp(55),
    marginLeft: wp(5),
    marginRight: wp(5),
    marginTop: hp(1),
  },
  image: {
    width: wp(55),
    height: "100%",
  },
  textView: {
    flex: 1,
    marginLeft: wp(2),
    justifyContent: "flex-end",
  },
  title: {
    fontSize: RFValue(11),
    fontWeight: "600",
  },
  description: {
    fontSize: RFValue(11),
    fontWeight: "600",
  },
});

export default NFTsCard;
