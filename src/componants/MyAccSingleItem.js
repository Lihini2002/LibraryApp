import React, { useState } from 'react';
import { List } from 'react-native-paper';
import {View, Text, StyleSheet, Dimensions, TextInput, Button,Image, TouchableOpacity} from 'react-native'
import {colors, parameters, TextStyle} from "../global/styles.js"
import Logo  from '../componants/Logo.js'
import TitleBar from '../componants/TitleBar.js';
// import { useNavigation } from '@react-navigation/native';

export default function MyAccSingleItem(props)
// {
//     const navigation = useNavigation();
   
//     const navigateToPage = (destination) => {
//     navigation.navigate(destination);
    // };{}

   { return( 
          <List.Item
            title={props.title}
            description={props.description}
            style={styles.Listitem}
            titleStyle={styles.titleStyle}
            left={props => <List.Icon {...props} icon={props.icon}/>}
            onPress={() => navigateToPage(props.destinationPage)}
             
         />

        // <View styel={styles.ListBox}>
            
        // </View>
 
    
    )
   
}


const styles = StyleSheet.create(
    {
      
      Listitem:
      {
        backgroundColor:colors.Pink, 
        height: '12%',
        width: '85%',
        borderRadius: 10,
       

        
      }
,
      titleStyle:
      {
          fontFamily:'monospace', 
          fontSize: 18, 
          fontWeight:'700'
      }


    }
  )
