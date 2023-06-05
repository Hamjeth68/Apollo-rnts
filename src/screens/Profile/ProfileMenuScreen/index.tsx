import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Image } from "react-native";

const ProfileMenuScreen = () => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.logo}
        source={require("../../../assets/images/logo.png")}
      />
      <Text style={styles.title}>Profile Menu</Text>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.button1Text}>Activate Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.button1Text}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.button1Text}>Remove Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.button2Text}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileMenuScreen;
