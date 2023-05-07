import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import ArtistsCard from "@/components/cards/ArtistsCard";
import GenresCard from "@/components/cards/GenresCard";
import NewPlaylistCard from "@/components/cards/NewPlaylistCard";
import Entypo from "react-native-vector-icons/Entypo";
import ArtworksCard from "@/components/cards/ArtworksCard";
import DiscoverViewLoading from "@/components/loading/DiscoverViewLoading";

const DiscoverView = ({ navigation }: any) => {
  const [viewArtworks, setViewArtworks] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.root}>
      {true ? (
        <DiscoverViewLoading />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollView}>
          {/*  */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Explore artists</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllButtonText}>View All</Text>
            </TouchableOpacity>
          </View>
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
          {/*  */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Explore genres</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllButtonText}>View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={styles.flatlist}
            horizontal
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
            data={data2}
            renderItem={({ item, index }) => (
              <GenresCard key={index} title={item.name} imageUri={item.uri} />
            )}
          />
          {/*  */}
          {/*  */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Playlist for every mood</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllButtonText}>View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={styles.flatlist}
            horizontal
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
            data={data3}
            renderItem={({ item, index }) => (
              <NewPlaylistCard
                key={index}
                name={item.name}
                imageUri={item.uri}
              />
            )}
          />
          {/*  */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Trending Artworks</Text>
            <TouchableOpacity
              style={styles.upDownButton}
              onPress={() => {
                setViewArtworks(!viewArtworks);
              }}
            >
              <Entypo
                name={viewArtworks ? "chevron-down" : "chevron-up"}
                size={30}
                color={"#000"}
              />
            </TouchableOpacity>
          </View>
          {viewArtworks ? (
            <FlatList
              data={data4}
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
          ) : null}
          {/*  */}
        </ScrollView>
      )}
    </View>
  );
};

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
    name: "Abstract",
    uri: "https://w.forfun.com/fetch/83/83b001d629f121eea6797b62cdcb4c68.jpeg",
  },
  {
    name: "Classics",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydhefGRBg1dJYNnVlaS-Z6aHzFFaj2HGV28-7OMK8QpfUDOifHuakqO9TjFZZQlmssvY&usqp=CAU",
  },
  {
    name: "Mixed Media",
    uri: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
  },
  {
    name: "Paintings",
    uri: "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
  },
  {
    name: "Architectur..",
    uri: "https://images.squarespace-cdn.com/content/v1/571fc5edd210b89083925aba/1587497063492-3M55NJG231XKWL9PLFL2/Liam_Wong_Tokyo_Nights_Phone_Wallpapers_Cyberpunk_Blade_Runner_TOKYOO_TO_KY_OO_Japan_BookMinutes+To+Midnight.jpg?format=1000w",
  },
  {
    name: "Photography",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROR0O2H-FusQQa0AetWhBuspFurVB7p4DAkiq9sZ8&s",
  },
  {
    name: "Cinematogr..",
    uri: "https://marketplace.canva.com/EAFJd1mhO-c/1/0/900w/canva-colorful-watercolor-painting-phone-wallpaper-qq02VzvX2Nc.jpg",
  },
  {
    name: "Scenery",
    uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v535batch2-mynt-43.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=9f602de67a347b7c50ef8eeac3835189",
  },
];

const data3 = [
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

const data4 = [
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
export default DiscoverView;
