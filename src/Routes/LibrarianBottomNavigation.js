import * as React from 'react';
import { StyleSheet } from 'react-native'
import { BottomNavigation, Text } from 'react-native-paper';
import { colors, FontSize } from '../global/styles';
import Payments from '../ScreensStaff.js/Payments';
import Returns from '../ScreensStaff.js/Returns';
import Loans from '../ScreensStaff.js/LibrarianLoan';
import Members from '../ScreensStaff.js/Members';


export default function BottomNavigationLibrary (){
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'loans', title: 'loans', focusedIcon: 'home-circle'
, unfocusedIcon: 'home-circle-outline'},
    { key: 'returns', title: 'returns', focusedIcon: 'bookshelf' },
    { key: 'payments', title: 'payments', focusedIcon: 'account-box' , unfocusedIcon:'account-box-outline'},
    { key: 'members', title: 'members', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    loans: Loans,
    returns: Returns,
    payments: Payments,
    members: Members
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