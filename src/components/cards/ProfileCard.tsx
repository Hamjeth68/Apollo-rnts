import {
  View,
  Text,
  StyleSheet,
  Image,
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

interface propsType {
  isActive?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const ProfileCard = (props: propsType) => {
  const { isActive, onPress } = props;
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Image
        style={styles.profileImage}
        source={{
          uri: "https://www.clipartmax.com/png/middle/42-427582_sign-in-my-profile-icon-png.png",
        }}
      />
      <Text style={styles.title}>Default Profile</Text>

      {isActive ? <Text style={styles.active}>Active</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: wp(27),
    height: hp(24),
    marginRight: wp(1),
    backgroundColor: "#F7F7F7",
  },

  profileImage: {
    width: wp(26),
    height: wp(24),
    borderRadius: 50,
    resizeMode: "cover",
    alignSelf: "center",
    marginTop: wp(1),
  },
  title: {
    fontSize: RFValue(12),
    marginTop: hp(3),
    marginLeft: wp(3),
    marginRight: wp(3),
  },

  active: {
    backgroundColor: Colors.yellow,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingLeft: wp(3),
    fontSize: RFValue(11),
    paddingTop: 2,
    paddingBottom: 2,
  },
});

export default ProfileCard;
