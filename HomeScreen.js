import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Card from '../components/Card';
import GenreList from '../components/GenreList';
import getBooks from '../consts/books';
import SearchResults from '../components/SearchResults';
import {colors} from "../global/styles.js";




const HomeScreen = ({ navigation }) => {

  // Array of genres
  const genres = ['All','Fantasy', 'Sci-Fi', 'Horror', 'Mystery', 'Romance'];

  // State variables
  const [genreIndex, setGenreIndex] = useState(0); // Index of the selected genre
  const [books, setBooks] = useState([]);// All books
  const [searchQuery, setSearchQuery] = useState('');// Search query
  const [filteredBooks, setFilteredBooks] = useState([]);// Books filtered by genre and search query

  // Handler for search bar text change
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  // Fetch books when the component mounts
  useEffect(() => {
    getBooks()
      .then((fetchedBooks) => {
        setBooks(fetchedBooks);
      })
      .catch((error) => console.log(error));
  }, []);

  // Filter books based on the search query and selected genre
  useEffect(() => {
    const lowercaseQuery = searchQuery.toLowerCase().trim();
    let filteredBooksByGenre = books;
    if (lowercaseQuery !== '') {
      filteredBooksByGenre = filteredBooksByGenre.filter(
        (book) => book.name && book.name.toLowerCase().includes(lowercaseQuery)
      );
    }
    setFilteredBooks(getBooksByGenre(filteredBooksByGenre));
  }, [searchQuery, books, genreIndex]);

  // Get books by genre
  const getBooksByGenre = (booksToFilter) => {
    const genre = genres[genreIndex];
    if (genre === 'All') {
      return booksToFilter;
    } else {
      return booksToFilter.filter((book) => book.genre === genre);
    }
  };

  // Render individual book items
  const renderBookItem = ({ item }) => {
    return <Card book={item} onPress={() => navigation.navigate('Info', { book: item })} />;
  };

  // Render the component
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={require('../assets/logo-no-background-lightpink.png')} style={styles.logo} />
        </View>
      </View>
      <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
      <GenreList genres={genres} genreIndex={genreIndex} setGenreIndex={setGenreIndex} />
      {searchQuery !== '' && filteredBooks.length === 0 ? (
      <Text style={styles.noResults}>No results found</Text>
    ) : (
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10, paddingBottom: 50 }}
        numColumns={2}
        data={filteredBooks} 
        renderItem={renderBookItem}
        keyExtractor={(item) => item.id.toString()}
      />
    )}
    {searchQuery !== '' && filteredBooks.length > 0 && (
      <SearchResults books={filteredBooks} />
    )}
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:20,
      paddingTop:20,
      backgroundColor:colors.Purple,
    },
    header:{
      marginTop:40,
      marginBottom:20,
      justifyContent:'space-between',
      backgroundColor:colors.Purple,
      alignItems:'center'
    },
    logo:{
        height:50,
        width:300
    },
    headerText:{
        fontSize:25,
        fontWeight:'bold',
        color:colors.Pink,
        fontFamily:'monospace'
    },
    noResults:{
       fontSize:20,
       fontWeight:'bold',
       fontFamily:'monospace',
       color:colors.Pink,
       alignContent:'center',
       flex:1
    }
    
  });

export default HomeScreen;