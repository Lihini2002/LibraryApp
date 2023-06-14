import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import BottomNavigationComp from '../componants/BottomNavigation';
import { colors } from '../global/styles';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="Login" 
      component={Login}   
      options={{
          title: 'Login', // Set a custom title for the header
          headerStyle: {
            backgroundColor: colors.Purple, // Set a custom background color for the header
          },
          headerTintColor: colors.Pink, // Set a custom text color for the header
          headerTitleStyle: {
        fontWeight: '600',
        fontSize: 20,
        fontFamily:'monospace' 
            

            
             // Set custom styles for the header title
          },
        }} />
      <Stack.Screen name="BottomComponent" component={BottomNavigationComp}   options={{
         
            
             // Set custom styles for the header title
          
        }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStack;

