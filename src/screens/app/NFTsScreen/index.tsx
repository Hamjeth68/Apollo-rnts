import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { ScrollView } from "react-native";
import NFTsCard from "@/components/cards/NFTsCard";

const NFTsScreen = () => {
  const [filter, setFilter] = useState(0);
  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            onPress={() => setFilter(0)}
            style={[
              styles.filterButton,
              { backgroundColor: filter == 0 ? "#F2CD33" : "#F7F7F7" },
            ]}
          >
            <Text style={styles.filterText}>Apollo NFTs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFilter(1)}
            style={[
              styles.filterButton,
              { backgroundColor: filter == 1 ? "#F2CD33" : "#F7F7F7" },
            ]}
          >
            <Text style={styles.filterText}>Other NFTs</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <NFTsCard
              name={item.name}
              description={item.description}
              imageUri={item.imageUri}
              type={index % 2 === 0 ? true : false}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

const data = [
  {
    name: "Pareidolia 5345",
    description: "Angie McMonigal",
    imageUri:
      "https://c4.wallpaperflare.com/wallpaper/138/853/174/artwork-battle-fantasy-art-nft-dragon-hd-wallpaper-preview.jpg",
  },
  {
    name: "JESUS ATM",
    description: "Denis Ouch",
    imageUri:
      "https://e0.pxfuel.com/wallpapers/9/451/desktop-wallpaper-nft-monkey.jpg",
  },
  {
    name: "Psycho Heart 01",
    description: "Mariam Rofriguez Otero",
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrVPGfiXti2qz95RdGz4IsLSq3qiTzBKmzA&usqp=CAU",
  },
];

export default NFTsScreen;
