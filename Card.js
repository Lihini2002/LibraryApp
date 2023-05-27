import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width / 2 - 30;

const Card = ({ book }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Info", book)}>
      <View style={styles.card}>
        <View style={{ height: 164, alignItems: 'center' }}>
          <Image style={{ flex: 1, resizeMode: 'contain' }} source={{ uri: book.imageUrl }} />
        </View>
        <Text style={styles.bookTitle}>{book.name}</Text>
        <Text style={styles.bookAuthor}>{book.author}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    height: 240,
    width,
    backgroundColor: '#FDD8D2',
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    opacity: 0.8,
    shadowColor: '#4D2959',
    shadowOffset: {
      width: 0,
      height: 90,
    },
    shadowOpacity: 0.8,
    shadowRadius: 90,
  },
  bookTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#4D2959',
    padding: 3,
    fontFamily: 'monospace',
  },
  bookAuthor: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#76567F',
    fontFamily: 'monospace',
  },
});

export default Card;