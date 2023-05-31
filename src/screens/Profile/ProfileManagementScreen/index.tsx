import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Switch,
} from "react-native";
import React, { useEffect, useState } from "react";
import MainNavigationBar from "@/components/NavigationBars/MainNavigationBar";
import { styles } from "./styles";
import ProfileCard from "@/components/cards/ProfileCard";
import Colors from "@/src/utils/Colors";

const ProfileManagementScreen = ({ navigation }: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.root}>
      <MainNavigationBar
        onPress={() => {
          navigation.goBack();
        }}
        title="Profile Management Screen"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          horizontal
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={({ item }) => <ProfileCard isActive={item == 1} />}
          contentContainerStyle={styles.profileCardView}
          showsHorizontalScrollIndicator={false}
        />

        <TouchableOpacity style={styles.addProfileButton}>
          <Text style={styles.addProfileButtonText}>Add New Profile</Text>
        </TouchableOpacity>

        <View style={styles.buttonView}>
          <Text style={styles.buttonViewTitle}>Account Settings</Text>
          <TouchableOpacity
            style={[
              styles.profileButton,
              { borderTopWidth: 1, borderBottomWidth: 0.5 },
            ]}
          >
            <Text style={styles.profileButtonTitle}>Subscription Type</Text>
            <Text style={styles.profileButtonTitleRight}>Premier+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.profileButton, { borderWidth: 0.5 }]}
          >
            <Text style={styles.profileButtonTitle}>
              Change Account details
            </Text>
            <Text style={styles.profileButtonTitleRight}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.profileButton,
              { borderTopWidth: 0.5, borderBottomWidth: 1 },
            ]}
          >
            <Text style={styles.profileButtonTitle}>Dark mode</Text>
            <Switch
              trackColor={{ false: "#D9D9D9", true: Colors.yellow }}
              thumbColor={isEnabled ? "#fff" : "#fff"}
              ios_backgroundColor="#D9D9D9"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.switchStyle}
            />
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

export default ProfileManagementScreen;
