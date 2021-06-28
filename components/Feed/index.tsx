import React from "react";
import { View, Text, FlatList } from "react-native";
import tweets from "../../data/tweets";
import Tweet from "../Tweet";



export default function Feed() {
  return (
   <View style={{ width:'100%'}}>
      <FlatList
    data={tweets}
    renderItem={({item}) => <Tweet tweet={item} />}
    keyExtractor={(item) => item.id}
    >

    </FlatList>
   </View>
  );
}
