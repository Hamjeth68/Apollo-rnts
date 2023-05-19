import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "@/src/utils/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import { useAppDispatch } from "@/src/redux/stateHooks";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { setFirstArtworks } from "@/src/redux/slices/UserSlice";

const EditSelectedArtworks = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.name}>Scene Name</Text>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Religious Masterpieces 04</Text>
        <TouchableOpacity>
          <FontAwesome5 name="edit" size={20} color={"#000"} />
        </TouchableOpacity>
      </View>

      <View style={styles.selectButtonView}>
        <TouchableOpacity
          style={[styles.selectButton, { backgroundColor: Colors.themeText1 }]}
        >
          <Text style={[styles.selectButtonText, { color: Colors.themeText2 }]}>
            Cast to Display
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.selectButton]}>
          <Text style={[styles.selectButtonText]}>Add to Curation</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.selectButtonView}>
        <TouchableOpacity style={[styles.selectButton]}>
          <Text style={[styles.selectButtonText]}>Edit This Scene</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.selectButton]}>
          <Text style={[styles.selectButtonText]}>Create New Scene</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: RFValue(10),
    marginTop: hp("4"),
    color: Colors.themeText1,
    marginLeft: wp("5"),
    fontWeight: "600",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: wp("6"),
    width: wp("88"),
    marginBottom: hp("7"),
  },
  title: {
    fontSize: RFValue(18),
    color: Colors.themeText1,
    fontWeight: "600",
  },
  selectButtonView: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: wp("80"),
    marginTop: hp("2"),
  },
  selectButton: {
    borderColor: Colors.themeText1,
    borderWidth: 1,
    width: wp("39"),
    height: hp("4.5"),
    justifyContent: "center",
    alignItems: "center",
  },
  selectButtonText: {
    fontSize: RFValue(12),
    fontWeight: "600",
  },
});

export default EditSelectedArtworks;
