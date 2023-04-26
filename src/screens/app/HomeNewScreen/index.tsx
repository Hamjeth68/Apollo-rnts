import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import ArtistsCard from "@/components/cards/ArtistsCard";
import NewPlaylistCard from "@/components/cards/NewPlaylistCard";
import ArtworksCard from "@/components/cards/ArtworksCard";
import MainButton from "@/components/buttons/MainButton";

const HomeNewScreen = () => {
  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>What's New ?</Text>
            <TouchableOpacity style={styles.closeButton}>
              <Ionicons name="close" size={40} color={"#fff"} />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.headerImage}
            source={require("../../../assets/images/new_header.png")}
            resizeMode="cover"
          />
        </View>
        {/*  */}
        <Text style={styles.sectionTitle}>Emerging Artists</Text>

        <FlatList
          contentContainerStyle={styles.flatlist}
          horizontal
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          data={data1}
          renderItem={({ item, index }) => (
            <ArtistsCard key={index} name={item.name} imageUri={item.uri} />
          )}
        />
        <Text style={styles.NewPlaylistTitle}>Newly Curated Playlists</Text>

        <FlatList
          contentContainerStyle={styles.flatlist}
          horizontal
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          data={data2}
          renderItem={({ item, index }) => (
            <NewPlaylistCard key={index} name={item.name} imageUri={item.uri} />
          )}
        />

        <Text style={styles.ArtworkslistTitle}>Newly Added Artworks</Text>
        <FlatList
          data={data3}
          contentContainerStyle={styles.flatlist}
          nestedScrollEnabled
          renderItem={({ item, index }) => (
            <ArtworksCard
              type={index % 2 === 0 ? true : false}
              uri1={item.uri1}
              title1={item.title1}
              uri2={item.uri2}
              title2={item.title2}
              uri22={item.uri22}
              title22={item.title22}
              uri3={item.uri3}
              title3={item.title3}
            />
          )}
        />

        {/*  */}
        <MainButton />
      </ScrollView>
    </View>
  );
};

export default HomeNewScreen;

const data1 = [
  {
    name: "Tyler Shieled",
    uri: "https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png",
  },
  {
    name: "David Yarrow",
    uri: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg",
  },
  {
    name: "J.Francois Rauzier",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSga0ZLFmGU0r4EcnP8Y-Mso4OklGh2o542zg&usqp=CAU",
  },
  {
    name: "Denis Ouch",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRny6M7SVLugIiTJGIYPcr744JSqVf5oPe1Vg&usqp=CAU",
  },
  {
    name: "Mohamed Suja",
    uri: "https://www.perfocal.com/blog/content/images/2020/07/Perfocal_Male_Dating_Profile_Smile_Man.jpg",
  },
  {
    name: "Test Name",
    uri: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
  },
];

const data2 = [
  {
    name: "Minimalist",
    uri: "https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg",
  },
  {
    name: "Fashionista",
    uri: "https://e1.pxfuel.com/desktop-wallpaper/605/967/desktop-wallpaper-outdoor-natural-studio-backgrounds-nature-background.jpg",
  },
  {
    name: "In-Motion",
    uri: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Urban Vibes",
    uri: "https://media.istockphoto.com/id/1390631668/photo/modern-abstract-purple-background.jpg?b=1&s=170667a&w=0&k=20&c=lH_pK0gxnw81fcNwEUikPPA7EIhYsaC9_ybpIH-ugtI=",
  },
];

const data3 = [
  {
    uri1: "https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg",
    title1: "Vertigo",
    uri2: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg",
    title2: "5.10 to yuma",
    uri22:
      "https://marketplace.canva.com/EAFHm4JWsu8/1/0/1600w/canva-pink-landscape-desktop-wallpaper-HGxdJA_xIx0.jpg",
    title22: "Burning down..",
    uri3: "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
    title3: "Bubblegum",
  },
  {
    uri1: "https://www.androidguys.com/wp-content/uploads/2015/12/Wave-Wallpapers-1.jpg",
    title1: "The Creation...",
    uri2: "https://w.forfun.com/fetch/b4/b4d430320229744245679e19e50b6f03.jpeg",
    title2: "30 degrees...",
    uri22:
      "https://img.freepik.com/free-photo/aesthetic-dark-wallpaper-background-neon-light_53876-128291.jpg?w=2000",
    title22: "Rolls Royce...",
    uri3: "https://burst.shopifycdn.com/photos/fog-on-dark-waters-edge.jpg?width=1200&format=pjpg&exif=1&iptc=1",
    title3: "Chicago Millennium Pavilion...",
  },
];
