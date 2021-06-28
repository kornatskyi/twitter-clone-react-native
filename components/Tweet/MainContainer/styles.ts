import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:10,
    

  },
  tweetHeaderContainer: {
    flexDirection: "row",
    justifyContent:'space-between',
    
  },
  tweetHeaderNames: {
   flexDirection:'row',
   flexWrap:'wrap',
   marginRight:16,


   
  },
  name: {
    fontWeight: "bold",
    marginRight:5,
  },
  userName: {
    marginRight: 5,
    color: "grey",
  },
  createdAt: {
    marginRight: 5,
    color: "grey",
  },
  content: {
      lineHeight:18,
  },
  image: {
    marginVertical:10,
    width: '100%',
    height:150,
    resizeMode:"cover",
    borderRadius:15,
    overflow:'hidden',
  }

});

export default styles;
