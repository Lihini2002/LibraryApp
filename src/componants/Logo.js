import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        
      </Text>
      <Image style={styles.logo} source={require('/Users/lihini/Documents/Alexandria2/src/assets/logo-no-background.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  paragraph: {
    margin: 0,
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 46,
    width: 290,
    marginTop:0,
    marginBottom:40,
  }
});