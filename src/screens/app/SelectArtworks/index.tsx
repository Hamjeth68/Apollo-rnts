import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Button,
} from "react-native";
import React from "react";
import { ScenesStackProps } from "@/models/Navigation-Modal";
import MainNavigationBar from "@/components/NavigationBars/MainNavigationBar";
import { styles } from "./styles";
import { ScrollView } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { Image } from "react-native";
import SelectArtworksTopTab from "@/src/navigation/tabs/SelectArtworksTopTab";
import { useAppSelector } from "@/src/redux/stateHooks";
import { selectFirstArtworks } from "@/src/redux/slices/UserSlice";

const SelectArtworksScreen = ({
  navigation,
}: ScenesStackProps<"SelectArtworksScreen">) => {
  const FirstArtworks = useAppSelector<any>(selectFirstArtworks);
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backButton}
      >
        <Octicons name="chevron-left" size={35} color={"#000"} />
      </TouchableOpacity>
      <View style={styles.display}>
        <View style={styles.row1}>
          <ImageBackground
            style={styles.image}
            source={{ uri: FirstArtworks[0]?.image }}
          >
            <Text style={styles.imageNumber}>1</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.image}
            source={{ uri: FirstArtworks[1]?.image }}
          >
            <Text style={styles.imageNumber}>2</Text>
          </ImageBackground>
        </View>
        <View style={styles.row1}>
          <ImageBackground
            style={styles.image}
            source={{ uri: FirstArtworks[2]?.image }}
          >
            <Text style={styles.imageNumber}>3</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.image}
            source={{ uri: FirstArtworks[3]?.image }}
          >
            <Text style={styles.imageNumber}>4</Text>
          </ImageBackground>
        </View>
        <Text style={styles.title}>Select artworks for the first display</Text>
      </View>
      <View style={styles.divider} />

      {/*    <Button
        title="test"
        onPress={() => {
          console.log(FirstArtworks);
        }}
      /> */}
      <SelectArtworksTopTab />
    </View>
  );
};

export default SelectArtworksScreen;
