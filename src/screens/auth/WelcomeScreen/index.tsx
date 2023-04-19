import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Colors from "@/src/utils/Colors";
import { AuthStackScreenProps } from "@/models/Navigation-Modal";

const backgroundImage = require("../../../assets/images/Splash1.png");

const WelcomeScreen = ({
  navigation,
}: AuthStackScreenProps<"WelcomeScreen">) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.root}>
      <ScrollView>
        <Image
          source={require("../../../assets/images/Logo_tm.png")}
          style={styles.logo}
        />

        <Text style={styles.welcome}>WELCOME</Text>
        <Text style={styles.content}>
          Discover and display an endless curation of fine art
        </Text>
        <TouchableOpacity style={styles.accountButtonView}>
          <Image
            style={styles.buttonIcon}
            source={require("../../../assets/images/google_iconx3.png")}
          />
          <Text style={styles.accountButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountButtonView}>
          <Image
            style={styles.buttonIcon}
            source={require("../../../assets/images/apple_iconx3.png")}
          />
          <Text style={styles.accountButtonText}>Sign in with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountButtonView}>
          <Image
            style={styles.buttonIcon}
            source={require("../../../assets/images/microsoft_iconx3.png")}
          />
          <Text style={styles.accountButtonText}>Sign in with Microsoft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountButtonView}>
          <Image
            style={styles.buttonIcon}
            source={require("../../../assets/images/mail_iconx3.png")}
          />
          <Text style={styles.accountButtonText}>Sign in with Email</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don't have an account ?{" "}
          <TouchableWithoutFeedback>
            <Text style={styles.signUpText}>Sign up Now</Text>
          </TouchableWithoutFeedback>
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default WelcomeScreen;
