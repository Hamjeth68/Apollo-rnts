import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const DiscoverViewLoading = (props) => {
  return (
    <View style={styles.root}>
      <ContentLoader
        speed={2}
        width={"100%"}
        height={"100%"}
        viewBox="0 0 500 800"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <Rect x="15" y="30" rx="0" ry="0" width="210" height="22" />
        <Rect x="365" y="30" rx="0" ry="0" width="98" height="22" />

        <Rect x="15" y="65" rx="0" ry="0" width="93" height="135" />
        <Rect x="112" y="65" rx="0" ry="0" width="93" height="135" />
        <Rect x="209" y="65" rx="0" ry="0" width="93" height="135" />
        <Rect x="306" y="65" rx="0" ry="0" width="93" height="135" />
        <Rect x="403" y="65" rx="0" ry="0" width="93" height="135" />

        <Rect x="15" y="230" rx="0" ry="0" width="210" height="22" />
        <Rect x="365" y="230" rx="0" ry="0" width="98" height="22" />

        <Rect x="15" y="265" rx="0" ry="0" width="93" height="135" />
        <Rect x="112" y="265" rx="0" ry="0" width="93" height="135" />
        <Rect x="209" y="265" rx="0" ry="0" width="93" height="135" />
        <Rect x="306" y="265" rx="0" ry="0" width="93" height="135" />
        <Rect x="403" y="265" rx="0" ry="0" width="93" height="135" />

        <Rect x="15" y="430" rx="0" ry="0" width="210" height="22" />
        <Rect x="365" y="430" rx="0" ry="0" width="98" height="22" />

        <Rect x="15" y="465" rx="0" ry="0" width="135" height="135" />
        <Rect x="154" y="465" rx="0" ry="0" width="135" height="135" />
        <Rect x="293" y="465" rx="0" ry="0" width="135" height="135" />
        <Rect x="432" y="465" rx="0" ry="0" width="60" height="135" />

        <Rect x="15" y="630" rx="0" ry="0" width="210" height="22" />
        <Rect x="414" y="630" rx="0" ry="0" width="49" height="22" />

        <Rect x="15" y="665" rx="0" ry="0" width="150" height="232" />
        <Rect x="169" y="665" rx="0" ry="0" width="150" height="140" />
        <Rect x="322" y="665" rx="0" ry="0" width="170" height="140" />
        <Rect x="169" y="819" rx="0" ry="0" width="236" height="150" />
      </ContentLoader>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});

export default DiscoverViewLoading;
