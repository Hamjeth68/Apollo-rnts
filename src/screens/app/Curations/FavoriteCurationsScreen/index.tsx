import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import CurationsCard from "@/components/cards/CurationsCard";
import { FlatList } from "react-native";

const FavoriteCurationsScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <CurationsCard
            cardType={item.cardType}
            scenes={item.scenes}
            title={item.title}
            favorite={index == 2 ? false : true}
          />
        )}
      />
    </View>
  );
};

const data = [
  {
    title: "Apollo Curations",
    scenes: 3,
    cardType: 1,
  },

  {
    title: "New Curations",
    scenes: 10,
    cardType: 3,
  },
  {
    title: "Westloop Curation",
    scenes: 8,
    cardType: 4,
  },
];

export default FavoriteCurationsScreen;
