import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import searchData from "../data/searchData";
import HomeData from "../data/HomeData";
import IonIcons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Profile = () => {
  const user = searchData[0];
  return (
    <View style={Styles.container}>
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Feather name="globe" color="white" size={24} />
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Feather name="instagram" color="white" size={24} />
            <Feather name="menu" color="white" size={24} />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 20, marginTop: 20 }}>
              {user.Fullname}
            </Text>
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <Text style={{ color: "white", marginTop: 4 }}>
                {user.username}
              </Text>
              <Text
                style={{
                  backgroundColor: "gray",
                  width: 60,
                  borderRadius: 10,
                  padding: 3,
                  fontSize: 10,
                  marginTop: 5,
                }}
              >
                threads.net
              </Text>
            </View>
            <Text style={{ color: "white" }}>CS Student 🎓</Text>
            <Text style={{ color: "white" }}>Techie 🖥️</Text>
            <Text style={{ color: "white" }}>Programmer 🧑‍💻</Text>
            <Text style={{ color: "gray" }}>{user.followers} Followers</Text>
          </View>
          <View>
            <Image
              source={{ uri: user.profile }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginTop: 20,
                marginRight: 10,
              }}
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              borderColor: "black",
              borderRadius: 10,
              borderWidth: 1,
              padding: 8,
              borderWidth: 1,
            }}
          >
            <Text style={{ color: "white" }}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: "black",
              borderRadius: 10,
              borderWidth: 1,
              padding: 8,
              borderWidth: 1,
              width: 120,
            }}
          >
            <Text style={{ color: "white" }}>Share Profile</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              borderColor: "black",
              borderWidth: 1,
              padding: 8,
              borderWidth: 1,
              borderBottomColor: "white",
              width: "50%",
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Threads</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: "black",
              borderWidth: 1,
              padding: 8,
              borderWidth: 1,
              width: "50%",
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Replies</Text>
          </TouchableOpacity>
        </View>
        {HomeData.slice(0, 2).map((dta) => {
          return (
            <View
              style={{
                padding: 10,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "flex-start",
              }}
              key={dta.threadContent}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                  alignItems: "center",
                  height: "auto",
                }}
              >
                <Image
                  source={{ uri: dta.profile }}
                  style={{ width: 30, height: 30, borderRadius: 50 }}
                />
                <View
                  style={{
                    width: 1,
                    height: dta.attachment ? 300 : 10,
                    backgroundColor: "gray",
                  }}
                ></View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Image
                    source={{ uri: dta.profile }}
                    style={{ width: 14, height: 14, borderRadius: 50 }}
                  />
                  <Image
                    source={{ uri: dta.profile }}
                    style={{ width: 14, height: 14, borderRadius: 50 }}
                  />
                </View>
              </View>
              <View style={{ width: "100%" }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 13 }}>
                    {dta.username}
                  </Text>
                  <Image
                    source={require("../assets/bluetick.png")}
                    style={{ width: 12, height: 12 }}
                  />
                </View>
                <Text style={{ color: "white" }}>{dta.threadContent}</Text>
                {dta.attachment && (
                  <Image
                    source={{ uri: dta.attachment }}
                    style={{
                      width: "100%",
                      borderRadius: 8,
                      height: 300,
                      marginTop: 10,
                    }}
                  />
                )}
                <View
                  style={{
                    paddingTop: 10,
                    display: "flex",
                    flexDirection: "row",
                    gap: 3,
                  }}
                >
                  <IonIcons name="heart-outline" color="white" size={24} />
                  <FontAwesome name="comment-o" color="white" size={24} />
                  <Image
                    source={require("../assets/reshare.png")}
                    style={{ width: 30, height: 30, marginTop: -3 }}
                  />
                  <Image
                    source={require("../assets/share.png")}
                    style={{ width: 20, height: 20, marginTop: 3 }}
                  />
                </View>
                <View
                  style={{ display: "flex", flexDirection: "row", gap: 10 }}
                >
                  <Text style={{ color: "gray" }}>{dta.replies} Replies</Text>
                  <Text style={{ color: "gray" }}>{dta.likes} likes</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Profile;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 40,
  },
});
