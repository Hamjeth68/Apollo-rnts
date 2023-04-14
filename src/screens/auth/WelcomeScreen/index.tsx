import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Colors from "@/src/utils/Colors";

const backgroundImage = require("../../../assets/images/Splash1.png");

const WelcomeScreen = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.root}>
      <ScrollView>
        <Image
          source={require("../../../assets/images/Logo_tm.png")}
          style={styles.logo}
        />
        <Text style={styles.content}>
          Please activate the apollo mobile app with a supported streaming
          device
        </Text>
        <TouchableOpacity style={styles.mainButtonView}>
          <Text style={styles.mainButtonText}>Login with Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccountContainer}>
          <Text style={styles.createAccountText}>Create new account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.accountButtonView}>
          <Ionicons name="logo-google" size={35} color={Colors.theme} />
          <Text style={styles.accountButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountButtonView}>
          <Ionicons name="logo-apple" size={35} color={Colors.theme} />
          <Text style={styles.accountButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountButtonView}>
          <FontAwesome5 name="microsoft" size={35} color={Colors.theme} />
          <Text style={styles.accountButtonText}>Continue with Microsoft</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default WelcomeScreen;
