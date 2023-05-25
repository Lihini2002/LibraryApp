import * as React from 'react';
import { StyleSheet } from 'react-native'
import { BottomNavigation, Text } from 'react-native-paper';
import { colors, FontSize } from '../global/styles';
import Dashboard from '../screens/Dashboard';
import Collections from '../screens/Collection';
import MyAccount from '../screens/MyAccount';
import Notifications from '../screens/Notifications';


export default function BottomNavigationComp (){
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'dashboard', title: 'Dashboard', focusedIcon: 'home-circle'
, unfocusedIcon: 'home-circle-outline'},
    { key: 'collections', title: 'Colections', focusedIcon: 'bookshelf' },
    { key: 'account', title: 'My Account', focusedIcon: 'account-box' , unfocusedIcon:'account-box-outline'},
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: Dashboard,
    collections: Collections,
    account: MyAccount,
    notifications: Notifications
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle =   {{   backgroundColor:colors.Violet}
     
  
       }
      activeColor= {colors.Peach}
      inactiveColor ={colors.White}
      

    />
  );
};

const styles = StyleSheet.create({
 
 
});
