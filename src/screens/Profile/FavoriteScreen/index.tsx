import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import MainNavigationBar from "@/components/NavigationBars/MainNavigationBar";
import ArtistsCard from "@/components/cards/ArtistsCard";
import GenresCard from "@/components/cards/GenresCard";
import NewPlaylistCard from "@/components/cards/NewPlaylistCard";
import ArtworksCard from "@/components/cards/ArtworksCard";
import Entypo from "react-native-vector-icons/Entypo";
import { styles } from "./styles";
import DiscoverViewLoading from "@/components/loading/DiscoverViewLoading";
import { Image } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileScreen = ({ navigation }: any) => {
  return (
    <View style={styles.root}>
      <MainNavigationBar
        onPress={() => {
          navigation.goBack();
        }}
        title="Profile"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={{
              uri: "https://www.clipartmax.com/png/middle/42-427582_sign-in-my-profile-icon-png.png",
            }}
          />
          <View style={styles.profileSubContainer}>
            <Text style={styles.profileTitle}>Default Profile</Text>
            <Text style={styles.profileSubTitle}>Individual</Text>
            <View style={styles.profileStatesView}>
              <Text style={styles.profileStatus}>Active</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={[
              styles.profileButton,
              { borderTopWidth: 1, borderBottomWidth: 0.5 },
            ]}
          >
            <FontAwesome5 name="running" size={28} color={"#000"} />
            <Text style={styles.profileButtonTitle}>Getting Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.profileButton, { borderWidth: 0.5 }]}
          >
            <MaterialIcons name="devices" size={28} color={"#000"} />
            <Text style={styles.profileButtonTitle}>Devices Manager</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.profileButton, { borderWidth: 0.5 }]}
          >
            <FontAwesome5 name="user-cog" size={25} color={"#000"} />
            <Text style={styles.profileButtonTitle}>Profile Manager</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.profileButton, { borderWidth: 0.5 }]}
          >
            <Ionicons name="help-buoy" size={28} color={"#000"} />
            <Text style={styles.profileButtonTitle}>Support</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.profileButton,
              { borderTopWidth: 0.5, borderBottomWidth: 1 },
            ]}
          >
            <MaterialCommunityIcons
              name="sort-variant-lock"
              size={28}
              color={"#000"}
            />
            <Text style={styles.profileButtonTitle}>Private Collection</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.DeleteButton}>
          <Text style={styles.DeleteButtonText}>Delete Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
