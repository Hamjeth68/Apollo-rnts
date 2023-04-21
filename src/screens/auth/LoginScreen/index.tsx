import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Colors from "@/src/utils/Colors";
import { AuthStackScreenProps } from "@/models/Navigation-Modal";
import LoadingModal from "@/components/loading/LoadingModal";
import { TextInput } from "react-native-paper";

const backgroundImage = require("../../../assets/images/Login.png");

const LoginScreen = ({ navigation }: AuthStackScreenProps<"LoginScreen">) => {
  const [loading, setLoading] = useState(false);

  const onPressSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("OnboardingScreen");
    }, 2000);
  };
  return (
    <ImageBackground source={backgroundImage} style={styles.root}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={require("../../../assets/images/Logo_tm.png")}
          style={styles.logo}
        />

        <View style={styles.loginContainer}>
          <TextInput
            placeholder="Enter Address"
            underlineColor="#fff"
            activeUnderlineColor="#fff"
            placeholderTextColor="#fff"
            textColor="#fff"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            underlineColor="#fff"
            activeUnderlineColor="#fff"
            placeholderTextColor="#fff"
            textColor="#fff"
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.mainButtonView}>
            <Text style={styles.mainButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.createAccountContainer}>
            <Text style={styles.createAccountText}>Forgot password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createAccountContainer}>
            <Text style={styles.createAccountText}>Create new account</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.accountButtonView}
          onPress={() => {
            onPressSubmit();
          }}
        >
          <Image
            style={styles.buttonIcon}
            source={require("../../../assets/images/google_iconx3.png")}
          />
          <Text style={styles.accountButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.accountButtonView}
          onPress={() => {
            onPressSubmit();
          }}
        >
          <Image
            style={styles.buttonIcon}
            source={require("../../../assets/images/apple_iconx3.png")}
          />
          <Text style={styles.accountButtonText}>Sign in with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.accountButtonView}
          onPress={() => {
            onPressSubmit();
          }}
        >
          <Image
            style={styles.buttonIcon}
            source={require("../../../assets/images/microsoft_iconx3.png")}
          />
          <Text style={styles.accountButtonText}>Sign in with Microsoft</Text>
        </TouchableOpacity>
      </ScrollView>
      <LoadingModal transparent visible={loading} />
    </ImageBackground>
  );
};

export default LoginScreen;
