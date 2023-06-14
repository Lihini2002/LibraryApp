import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';
import { colors } from '../global/styles';

const Stack = createStackNavigator();

const HomeScreenStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="HomeScreen" 
      component={HomeScreen}   
      options={{
          title: 'Dashboard', // Set a custom title for the header
          headerStyle: {
            backgroundColor: colors.Violet, // Set a custom background color for the header
          },
          headerTintColor: colors.Pink, // Set a custom text color for the header
          headerTitleStyle: {
        fontWeight: '600',
        fontSize: 25,
        fontFamily:'monospace' 
            

            
             // Set custom styles for the header title
          },
        }} />
      <Stack.Screen name="InfoScreen" component={InfoScreen}   options={{
           // Set a custom title for the header
          headerStyle: {
            backgroundColor: colors.Violet, // Set a custom background color for the header
          },
          headerTintColor: colors.Pink, // Set a custom text color for the header
          headerTitleStyle: {
        fontWeight: '600',
        fontSize: 25,
        fontFamily:'monospace' 
            

            
             // Set custom styles for the header title
          },
        }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreenStack;

