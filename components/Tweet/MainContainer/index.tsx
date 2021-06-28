import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { TweetType } from "../../../types";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import moment from 'moment'

import Footer from './Footer/index'

export type MainContainerProps = {
  tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tweetHeaderContainer}>
        <View style={styles.tweetHeaderNames}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.userName}>@{tweet.user.userName}</Text>
          <Text style={styles.createdAt}>{moment(tweet.createdAt).fromNow()}</Text>
        </View>
        <Entypo
        style={{position:'absolute', right:0, }}
          name={"chevron-down"}
          size={16}
          color={"grey"}
        />
      </View>
      <View >
        <Text style={styles.content}>{tweet.content}</Text>
        {!!tweet.image && <Image style={styles.image} source={{ uri: tweet.image }}></Image>}
      </View>
      <Footer tweet={tweet}/>
    </View>
  );
};

export default MainContainer;
