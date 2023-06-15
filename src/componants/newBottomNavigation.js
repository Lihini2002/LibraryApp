import * as React from 'react';
import { StyleSheet } from 'react-native'
import { BottomNavigation, Text } from 'react-native-paper';
import { colors, FontSize } from '../global/styles';
import Dashboard from '../Screens/HomeScreen';
import Collections from '../Screens/Collections';
import MyAccount from '../Screens/MyAccount';
import Notifications from '../Screens/Notification';


export default function BottomNavigationComp ({userEmail}){
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'dashboard', title: 'Dashboard', focusedIcon: 'home-circle'
, unfocusedIcon: 'home-circle-outline'},
    { key: 'collections', title: 'Collections', focusedIcon: 'bookshelf',unfocusedIcon:'bookshelf' },
    { key: 'account', title: 'My Account', focusedIcon: 'account-box' , unfocusedIcon:'account-box-outline'},
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: Dashboard,
    collections: Collections,
    account: () => <MyAccount userEmail={userEmail} />,
    notifications: () => <Notifications userEmail={userEmail} />
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: colors.Violet }}
      activeColor={colors.Peach}
      inactiveColor={colors.White}
      // Add the style prop to the Text component and set the fontFamily
      renderLabel={({ route, focused, color }) => (
        <Text style={styles.iconText}>
          {route.title}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
     iconText:{
      fontFamily:'monospace',
      color:'#fff',
      fontSize:10,
      textAlign:'center'
     }
 
});
