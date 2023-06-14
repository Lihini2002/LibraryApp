import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import HomeBookCard from './HomeBookCard';

const SearchResults = ({ books }) => {
  return (
    <View>
      <Text style={styles.SearchResults}>Search Results:</Text>
      {books.map((book) => (
        <HomeBookCard key={book.id} book={book} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
   SearchResults:{
    fontSize:15,
    fontWeight:'bold',
    fontFamily:'monospace',
    color:'#FDD8D2',
    marginBottom:10,
   }
})

export default SearchResults;