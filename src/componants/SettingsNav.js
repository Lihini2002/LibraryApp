import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import Account from './Screens/MyAccount';
import FAQs from './components/FAQs';
import Details from './components/Details';
import Support from './components/Support';
import BottomNavigationComp from './components/BottomNavigation';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import FeatherIcon from 'react-native-vector-icons/Feather';
import Account from './Screens/MyAccount';

const Stack = createStackNavigator();

const SettingsNav = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: '#4D2959',
      borderBottomWidth: 0, 
    },
  };
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="Account Details" component={Details} />
          <Stack.Screen name="Frequently Asked Questions" component={FAQs} />
          <Stack.Screen name="Support and Feedback" component={Support} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default SettingsNav;
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Select />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D2959',
  },
  
});
