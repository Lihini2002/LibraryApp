import * as React from 'react';
import { Text, View, StyleSheet, StatusBar} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {colors, parameters} from "./src/global/styles.js"
import Login from './src/screens/Login.js';
import SignUp from './src/screens/Signup.js';
import BottomNavigationComp from './src/componants/BottomNavigation.js';


// You can import from local files




export default function App() {
  return (
   
    
    <SafeAreaProvider style={styles.container}>
     
    <StatusBar
    barStyle="light-content"
    backgroundColor = {colors.Purple}
    />
    
      <BottomNavigationComp></BottomNavigationComp>
       </SafeAreaProvider>
    

 
 
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Peach
  
  }
,
  safeAreaCont: {
    flex:1
  }

})
