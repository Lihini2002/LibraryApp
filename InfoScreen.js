import React, { useState } from "react";
import { View, Text, StyleSheet, Image,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import books from "../consts/books";


const InfoScreen = ({ navigation, route }) => {
  const book = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const onFavoriteIconPress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4D2959" }}>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={28}
          color="#FDD8D2"
          onPress={() => navigation.goBack()}
        />
        <Icon
          name="bookmarks"
          size={28}
          color={isFavorite ? "#FF9B8B" : "#76567F"}
          onPress={onFavoriteIconPress}
        />
      </View>
      <View style={styles.image}>
        <Image source={{ uri: book.imageUrl }} style={{ resizeMode: "contain", flex: 1 }} />
      </View>
      <View style={styles.details}>
        <View style={{ marginLeft: 20, flexDirection: "row", alignItems: "flex-end" }}>
          <View>
            <Text style={styles.genreName}>{book.genre}</Text>
          </View>
        </View>
        <View style={{ marginLeft: 20, marginTop: 10, justifyContent: "space-between" }}>
          <Text style={styles.bookName}>{book.name}</Text>
          <Text style={styles.authorName}>{book.author}</Text>
        </View>
        <ScrollView style={{ flex: 1, paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={styles.descriptionTitle}>description</Text>
          <Text style={styles.description}>{book.description}</Text>
          <Text style={styles.library}>Available at</Text>
          <Text style={styles.libraryLocation}>{book.library}</Text>
        </ScrollView>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   header:{
    paddingHorizontal:20,
    marginTop:30,
    flexDirection:'row',
    justifyContent:'space-between',
    fontFamily:'monospace'
   },
   image:{
    flex:0.45,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
   },
   details:{
    flex:0.55,
    backgroundColor:'#FDD8D2',
    marginHorizontal:7,
    marginBottom:3,
    borderRadius:20,
    marginTop:30,
    paddingTop:30
   },
   genreName:{
    fontSize:18,
    fontWeight:'bold',
    color:'#76567F',
    fontFamily:'monospace'
   },
   bookName:{
    fontSize:22,
    fontWeight:'bold',
    color:'#4D2959',
    fontFamily:'monospace'
   },
   authorName:{
     fontSize:18,
     fontWeight:'bold',
     color:'#76567F',
     fontFamily:'monospace'
   },
   descriptionTitle:{
    fontSize:15,
    fontWeight:'bold',
    color:'#4D2959',
    fontFamily:'monospace'
   },
   description:{
    color:'#76567F',
    fontSize:16,
    lineHeight:20,
    marginTop:10,
    fontFamily:'monospace'
   },
   library:{
    color:'#0099cc',
    fontSize:20,
    textAlign:"center",
    marginTop:5,
    fontWeight:'bold',
    fontFamily:'monospace'
   },
   libraryLocation:{
    color:'#2b8864',
    fontSize:20,
    textAlign:"center",
    marginTop:5,
    fontWeight:'bold',
    fontFamily:'monospace'
   },
});

export default InfoScreen;