import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const GenreList = ({ genres, genreIndex, setGenreIndex }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.genreContainer}>
          {genres &&
            genres.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setGenreIndex(index)}
                activeOpacity={0.8}
                style={styles.genreItem}
              >
                <Text
                  style={[styles.genreText, genreIndex === index ? styles.genreSelected : null]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export { GenreList };
const styles = StyleSheet.create({
  container: {
    height: 80, 
  },
  genreContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  genreItem: {
    marginRight: 19, 
  },
  genreText: {
    fontSize: 15,
    color: '#FDD8D2',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  genreSelected: {
    color: '#FF9B8B',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#FF9B8B',
  },
});

export default GenreList;