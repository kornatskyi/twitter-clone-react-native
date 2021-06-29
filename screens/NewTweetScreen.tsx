import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar as NativeStatusBar,
  Platform,
  TextInput,
} from "react-native";
import ProfilePicture from "../components/ProfilePicture";

import { Text, View } from "../components/Themed";

import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";

import { useNavigation } from "@react-navigation/native";

export default function NewTweetScreen() {
  const [tweet, setTweet] = useState("Hello");
  const [imageUrl, setImageUrl] = useState("");

  const navigation = useNavigation();

  const onPostTweet = () => {
    console.log("Posting the tweet:", tweet, "Image", imageUrl);
  };

  const closeNewTweetScreen = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign
          name="close"
          size={30}
          color={Colors.light.tint}
          onPress={() => {
            closeNewTweetScreen();
          }}
        ></AntDesign>
        <TouchableOpacity style={styles.button} onPress={onPostTweet}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture
          image={
            "https://lh3.googleusercontent.com/ogw/ADea4I7I63F88WWUyN07qmDo1HfXsZUn8NiAFUAye1v2=s32-c-mo"
          }
        />
        <View style={styles.inputContainer}>
          <TextInput
            value={tweet}
            onChangeText={(value) => setTweet(value)}
            multiline
            placeholder={"What's happening?"}
            style={styles.tweetInput}
            numberOfLines={3}
          ></TextInput>
          <TextInput
            placeholder={"Image url(optional)"}
            style={styles.imageInput}
            value={imageUrl}
            onChangeText={(value) => setImageUrl(value)}
          ></TextInput>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS === "android" ? NativeStatusBar.currentHeight : 0,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 15,
  },
  newTweetContainer: {
    flexDirection: "row",
    padding: 15,
  },
  inputContainer: {
    marginLeft: 10,
  },
  tweetInput: {
    maxHeight: 300,
    fontSize: 20,
    textAlignVertical: "top",
  },
  imageInput: {},
});
