import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import InfoScreen from './Screens/InfoScreen';
import BottomNavigation from './components/BottomNavigation';
import LoginScreen from './Screens/LoginScreen';
import Register from './Screens/Register';
import LoanCards from './Screens/Librarian';
import LibrarianTest from './Screens/LibrarianTest';
import Details from './components/Details';
import FAQs from './components/FAQs';
import Support from './components/Support';
 

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle = 'dark -content' backgroundColor='#4D2959'></StatusBar>
      <Stack.Navigator screenOptions={{header:()=> null}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name='Home' component={BottomNavigation}/>  
      <Stack.Screen name='Librarian' component={LibrarianTest}/>
      <Stack.Screen name='Info' component={InfoScreen}/>
      <Stack.Screen name='AccountDetails' component={Details}/>
      <Stack.Screen name='FrequentlyAskedQuestions' component={FAQs}/>
      <Stack.Screen name='SupportandFeedback' component={Support}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
