import { View, Text } from "react-native";
import React from "react";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

const GenresLoading = () => {
  return (
    <View>
      <ContentLoader
        speed={2}
        width={"100%"}
        height={"100%"}
        viewBox="0 0 500 800"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <Rect x="7" y="18" rx="0" ry="0" width="160" height="160" />
        <Rect x="172" y="18" rx="0" ry="0" width="160" height="160" />
        <Rect x="337" y="18" rx="0" ry="0" width="160" height="160" />

        <Rect x="7" y="188" rx="0" ry="0" width="80" height="17" />
        <Rect x="172" y="188" rx="0" ry="0" width="80" height="17" />
        <Rect x="337" y="188" rx="0" ry="0" width="80" height="17" />

        <Rect x="7" y="223" rx="0" ry="0" width="160" height="160" />
        <Rect x="172" y="223" rx="0" ry="0" width="160" height="160" />
        <Rect x="337" y="223" rx="0" ry="0" width="160" height="160" />

        <Rect x="7" y="393" rx="0" ry="0" width="80" height="17" />
        <Rect x="172" y="393" rx="0" ry="0" width="80" height="17" />
        <Rect x="337" y="393" rx="0" ry="0" width="80" height="17" />

        <Rect x="7" y="428" rx="0" ry="0" width="160" height="160" />
        <Rect x="172" y="428" rx="0" ry="0" width="160" height="160" />
        <Rect x="337" y="428" rx="0" ry="0" width="160" height="160" />

        <Rect x="7" y="598" rx="0" ry="0" width="80" height="17" />
        <Rect x="172" y="598" rx="0" ry="0" width="80" height="17" />
        <Rect x="337" y="598" rx="0" ry="0" width="80" height="17" />

        <Rect x="7" y="633" rx="0" ry="0" width="160" height="200" />
        <Rect x="172" y="633" rx="0" ry="0" width="160" height="200" />
        <Rect x="337" y="633" rx="0" ry="0" width="160" height="200" />
      </ContentLoader>
    </View>
  );
};

export default GenresLoading;
