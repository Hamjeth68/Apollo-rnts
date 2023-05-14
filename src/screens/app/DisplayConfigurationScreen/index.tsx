import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ScenesStackProps } from "@/models/Navigation-Modal";
import MainNavigationBar from "@/components/NavigationBars/MainNavigationBar";
import { styles } from "./styles";
import { ScrollView } from "react-native";

const DisplayConfigurationScreen = ({
  navigation,
}: ScenesStackProps<"DisplayConfigurationScreen">) => {
  return (
    <View style={styles.root}>
      <MainNavigationBar
        onPress={() => {
          navigation.goBack();
        }}
        title="Display Configuration"
      />
      <Text style={styles.text1}>
        Select which type of display configuration
      </Text>
      <Text style={styles.text2}>To use for the new scene</Text>

      <ScrollView contentContainerStyle={styles.list}>
        <TouchableOpacity style={styles.card1}>
          <Text style={styles.title}>
            Display four individual pieces of artworks
          </Text>
          <View>
            <View style={styles.card1Row}>
              <View style={styles.card1Obj}>
                <Text style={styles.objNumber}>1</Text>
              </View>

              <View style={styles.card1Obj}>
                <Text style={styles.objNumber}>2</Text>
              </View>
            </View>

            <View style={styles.card1Row}>
              <View style={styles.card1Obj}>
                <Text style={styles.objNumber}>3</Text>
              </View>

              <View style={styles.card1Obj}>
                <Text style={styles.objNumber}>4</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card1}>
          <Text style={styles.title}>
            Display one artworks across all zones
          </Text>
          <View style={styles.view2}>
            <Text style={styles.objNumber2}>1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card1}>
          <Text style={styles.title}>
            Display two pieces Of artworks horizontally
          </Text>
          <View style={styles.view3}>
            <Text style={styles.objNumber2}>1</Text>
          </View>

          <View style={styles.view3}>
            <Text style={styles.objNumber2}>2</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card1}>
          <Text style={styles.title}>
            Display two pieces of artwork vertically
          </Text>

          <View style={styles.card1Row}>
            <View style={styles.view4}></View>

            <View style={styles.view4}></View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DisplayConfigurationScreen;
