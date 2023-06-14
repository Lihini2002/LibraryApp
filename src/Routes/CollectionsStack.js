import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Collections from '../screens/Collection';
import Waitlist from '../screens/Waitlist';
import { colors } from '../global/styles';

const Stack = createStackNavigator();

const CollectionStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="Collections" 
      component={Collections}   
      options={{
          title: 'Collections', // Set a custom title for the header
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
      <Stack.Screen name="Waitlist" component={Waitlist}   options={{
          title: 'Waitlist', // Set a custom title for the header
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

export default CollectionStack;

