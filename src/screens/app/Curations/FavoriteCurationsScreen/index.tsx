import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import CurationsCard from "@/components/cards/CurationsCard";

const FavoriteCurationsScreen = () => {
  return (
    <View style={styles.root}>
      <CurationsCard />
    </View>
  );
};

export default FavoriteCurationsScreen;
