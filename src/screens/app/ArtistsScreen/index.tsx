import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./styles";
import ArtistsScreenCard from "@/components/cards/ArtistsScreenCard";
import ArtistsLoading from "@/components/loading/ArtistsLoading";

const ArtistsScreen = ({ navigation }: any) => {
  const [loading, setLoading] = React.useState(true);

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
        <ArtistsLoading />
      ) : (
        <FlatList
          contentContainerStyle={styles.flatList}
          numColumns={3}
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          data={data1}
          renderItem={({ item, index }) => (
            <ArtistsScreenCard
              key={index}
              name={item.name}
              imageUri={item.uri}
            />
          )}
        />
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
  {
    name: "Wiley Ross",
    uri: "data:image/jpeg;base64,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",
  },
  {
    name: "Tim Petersen",
    uri: "https://media.gettyimages.com/id/155431546/photo/young-man-profile.jpg?s=612x612&w=gi&k=20&c=tfj42efKjN0CVHxTPTMBT57wbhV6my2UAwL61yJfrCc=",
  },
  {
    name: "Mariam Rodriquez",
    uri: "https://img.freepik.com/premium-photo/profile-handsome-man_102671-1500.jpg",
  },
  {
    name: "Kim Keever",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_lDzWpanuuL2s3VPyUWrjFWB0cOJAGXqeA&usqp=CAU",
  },
  {
    name: "Hermes Berrio",
    uri: "https://www.perfocal.com/blog/content/images/2020/07/Perfocal_Male_Dating_Profile_Smile_Man.jpg",
  },
  {
    name: "Lea Fisher",
    uri: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
  },
];

export default ArtistsScreen;
