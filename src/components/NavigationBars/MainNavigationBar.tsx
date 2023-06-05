import {
  View,
  Text,
  StyleSheet,
  Platform,
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
import Octicons from "react-native-vector-icons/Octicons";

interface propsTypes {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title?: string;
}
const MainNavigationBar = (props: propsTypes) => {
  const { onPress, title } = props;
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onPress} style={styles.backButton}>
        <Octicons name="chevron-left" size={35} color={"#000"} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.theme,
    height: hp("13"),
    flexDirection: "row",
    paddingTop: Platform.OS === "ios" ? hp(8) : 0,
    alignItems: "center",
  },
  backButton: {
    marginLeft: wp(5),
  },
  title: {
    marginLeft: wp(5),
    width: wp(75),
    textAlign: "center",
    fontWeight: "bold",
    fontSize: RFValue(16),
  },
});

export default MainNavigationBar;
