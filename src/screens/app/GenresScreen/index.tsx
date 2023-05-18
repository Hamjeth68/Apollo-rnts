import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import ArtistsScreenCard from "@/components/cards/ArtistsScreenCard";
import GenresScreenCard from "@/components/cards/GenresScreenCard";
import GenresLoading from "@/components/loading/GenresLoading";

const GenresScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.root}>
      {loading ? (
        <GenresLoading />
      ) : (
        <FlatList
          contentContainerStyle={styles.flatList}
          numColumns={3}
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          data={data2}
          renderItem={({ item, index }) => (
            <GenresScreenCard
              key={index}
              title={item.name}
              imageUri={item.uri}
            />
          )}
        />
      )}
    </View>
  );
};

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

  {
    name: "Ark Architectur..",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY52eIN_pIy9-bf_SwBAsbsU7hjCvGxNcVRQ&usqp=CAU",
  },
  {
    name: "Photography New",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZjT7OjkACj6MsqpiLUah8bU00a8RkBZGRuSWEbRXiOPpmAW0LVCykcarIdnFZC0nLSM&usqp=CAU",
  },
  {
    name: "New Cinematogr..",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycpPAcoKdgj5OE-OOAitm5wAKzXm5OkisobXp9Ym6X6nLdvST2vAI_gTOBK5FfvA-EKo&usqp=CAU",
  },
  {
    name: "Scenery Forest",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQtJnp0V1tLf2t9qljjESo3sMW4Mn7iIvHA&usqp=CAU",
  },
];

export default GenresScreen;
