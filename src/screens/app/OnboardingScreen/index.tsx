import {
  View,
  Text,
  ScrollView,
  Image,
  VirtualizedList,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "./styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableRipple } from "react-native-paper";
import { AuthStackScreenProps } from "@/models/Navigation-Modal";

const backgroundImage = require("../../../assets/images/Onboarding_Bg.png");

const imageData = [
  { image: require("../../../assets/images/start_consume/1.png") },
  { image: require("../../../assets/images/start_consume/2.png") },
  { image: require("../../../assets/images/start_consume/3.png") },
  { image: require("../../../assets/images/start_consume/4.png") },
];

const OnboardingScreen = ({
  navigation,
}: AuthStackScreenProps<"OnboardingScreen">) => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollViewRef = useRef();

  const Image_Width = wp(89);
  const scrollToIndex = async (i: number) => {
    setScrollIndex(i);
    scrollViewRef.current.scrollTo({
      x: Image_Width * i,
      y: 0,
      animated: true,
    });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.root}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to Apollo</Text>
      </View>
      <ScrollView>
        <Text style={styles.subTitle}>Getting Started</Text>
        <View style={[styles.onBodingView, { width: Image_Width }]}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}
            onMomentumScrollEnd={(ev) => {
              setScrollIndex(
                Math.round(ev.nativeEvent.contentOffset.x / Image_Width)
              );
            }}
          >
            {imageData.map((item, index) => (
              <View style={[styles.onBodingContainer, { width: Image_Width }]}>
                <Image
                  key={index}
                  style={[{ width: Image_Width }, styles.image]}
                  resizeMode="contain"
                  source={item.image}
                />
                <Text style={styles.onBodingTitle}>
                  3. Activate Smart Display
                </Text>
                <Text style={styles.onBodingContent}>
                  Download the apollo art app on your apple TV or android TV.
                  Open the apollo app from your mobile and Go to Device Pairing
                  in top right menu.Input the code provided by your Smart TV app
                  or scan the QA code to activate the display.
                </Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.buttonContainer}>
            {scrollIndex == 0 ? (
              <TouchableOpacity
                style={styles.leftButton}
                onPress={() => {
                  navigation.navigate("PreferencesScreen");
                }}
              >
                <Text style={styles.leftButtonText}>Skip</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.leftButton}
                onPress={() => {
                  scrollToIndex(scrollIndex - 1);
                }}
              >
                <Text style={styles.leftButtonText}>Back</Text>
              </TouchableOpacity>
            )}

            {scrollIndex == imageData.length - 1 ? (
              <TouchableOpacity
                style={styles.rightButton}
                onPress={() => {
                  navigation.navigate("PreferencesScreen");
                }}
              >
                <Text style={styles.rightButtonText}>Got it!</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.rightButton}
                onPress={() => {
                  scrollToIndex(scrollIndex + 1);
                }}
              >
                <Text style={styles.rightButtonText}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.dotView}>
            {imageData.map((item, index) => (
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      scrollIndex == index ? "#fff" : "rgba(256,256,256,0.4)",
                  },
                ]}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default OnboardingScreen;
