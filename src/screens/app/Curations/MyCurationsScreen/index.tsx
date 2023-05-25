import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import CurationsCard from "@/components/cards/CurationsCard";
import { FlatList } from "react-native";

const MyCurationsScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CurationsCard
            cardType={item.cardType}
            scenes={item.scenes}
            title={item.title}
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
    title: "David Yarrow Curations",
    scenes: 6,
    cardType: 2,
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
  {
    title: "David Yarrow Curations",
    scenes: 8,
    cardType: 5,
  },
];

export default MyCurationsScreen;
