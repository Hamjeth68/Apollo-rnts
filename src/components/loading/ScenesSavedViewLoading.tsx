import { View, Text } from "react-native";
import React from "react";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ScenesSavedViewLoading = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <ContentLoader
        speed={2}
        width={"100%"}
        height={"100%"}
        viewBox="0 0 500 800"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <Rect x="15" y="35" rx="0" ry="0" width="475" height="165" />
        <Rect x="15" y="205" rx="0" ry="0" width="475" height="165" />
        <Rect x="15" y="375" rx="0" ry="0" width="475" height="165" />
        <Rect x="15" y="545" rx="0" ry="0" width="475" height="165" />
        <Rect x="15" y="715" rx="0" ry="0" width="475" height="165" />
      </ContentLoader>
    </View>
  );
};

export default ScenesSavedViewLoading;
