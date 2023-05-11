import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ScenesStackProps } from "@/models/Navigation-Modal";
import MainNavigationBar from "@/components/NavigationBars/MainNavigationBar";
import { styles } from "./styles";

const SelectDisplayScreen = ({
  navigation,
}: ScenesStackProps<"SelectDisplayScreen">) => {
  return (
    <View style={styles.root}>
      <MainNavigationBar
        onPress={() => {
          navigation.goBack();
        }}
        title="Select Your Display"
      />
      <Text style={styles.text1}>Which type of display group do you</Text>
      <Text style={styles.text2}>Want use for your new scene?</Text>

      <TouchableOpacity style={styles.card1}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>Triptych</Text>
          <Text style={styles.description}>3 Portrait Displays</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.views} />
          <View style={styles.views} />
          <View style={styles.views} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card2}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>Quad</Text>
          <Text style={styles.description}>4 Landscape Displays</Text>
        </View>
        <View>
          <View style={styles.rowView}>
            <View style={styles.views2} />
            <View style={styles.views2} />
          </View>
          <View style={styles.rowView}>
            <View style={styles.views2} />
            <View style={styles.views2} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SelectDisplayScreen;
