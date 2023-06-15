import * as React from 'react';
import { StyleSheet } from 'react-native'
import { BottomNavigation, Text } from 'react-native-paper';
import { colors, FontSize } from '../global/styles';
import LibrarianTest from '../Screens/LibrarianTest';
import LibrarianLoan from '../Screens/LibrarianLoans';
import LibrarianPayments from '../Screens/LibrarianPayments';
import LibrarianMembers from '../Screens/LibrarianMembers';


export default function BottomNavigationComp (CollectionsStack){
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'loans', title: 'loans', focusedIcon: 'home-circle'
, unfocusedIcon: 'home-circle-outline'},
    { key: 'returns', title: 'returns', focusedIcon: 'bookshelf' },
    { key: 'payments', title: 'payments', focusedIcon: 'account-box' , unfocusedIcon:'account-box-outline'},
    { key: 'members', title: 'members', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    loans: LibrarianLoan,
    returns: LibrarianTest,
    payments: LibrarianPayments,
    members: LibrarianMembers
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
