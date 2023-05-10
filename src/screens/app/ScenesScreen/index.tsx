import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import MainNavigationBar from "@/components/NavigationBars/MainNavigationBar";
import ArtistsCard from "@/components/cards/ArtistsCard";
import GenresCard from "@/components/cards/GenresCard";
import NewPlaylistCard from "@/components/cards/NewPlaylistCard";
import ArtworksCard from "@/components/cards/ArtworksCard";
import Entypo from "react-native-vector-icons/Entypo";
import { styles } from "./styles";
import ScenesTopTab from "@/src/navigation/tabs/ScenesTopTab";

const ScenesScreen = ({ navigation }: any) => {
  const [viewArtworks, setViewArtworks] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.root}>
      <MainNavigationBar
        onPress={() => {
          navigation.goBack();
        }}
        title="Scenes"
      />
      <ScenesTopTab />
    </View>
  );
};

export default ScenesScreen;
