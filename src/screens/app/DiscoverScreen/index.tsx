import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import DiscoverTopTab from "@/src/navigation/tabs/DiscoverTopTab";

const DiscoverScreen = ({ navigation }: any) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search title, genres, media or artists"
          style={styles.searchInput}
        />
        <TouchableOpacity onPress={() => {}} style={styles.searchIcon}>
          <Ionicons name="search" size={30} color={"#b3b3b3"} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.newButton}>
        <Text style={styles.newButtonText}>New</Text>
      </TouchableOpacity>
      <DiscoverTopTab />
    </View>
  );
};

export default DiscoverScreen;
