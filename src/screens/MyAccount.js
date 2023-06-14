import React, { useState } from 'react';
import { List , IconButton} from 'react-native-paper';
import {View, Text, StyleSheet, Dimensions, TextInput, Button,Image, TouchableOpacity} from 'react-native'
import {colors, parameters, TextStyle} from "../global/styles.js"
import Logo  from '../componants/Logo.js'
import TitleBar from '../componants/TitleBar.js';
import MyAccSingleItem from '../componants/MyAccSingleItem.js';
import ReadThisYear from './ReadThisYear.js';
// import { useNavigation } from '@react-navigation/native';

import {IoPersonSharp} from 'react-native-vector-icons/Ionicons'

export default function MyAccount()
{
   

    return( 
    <View style={styles.container}>
    <TitleBar Title="My Account"></TitleBar>

    <View style={styles.ItemCOntainer}>

             <MyAccSingleItem
            title="Account Details"
            description="View and edit your account details"
            icon="bookshelf"
           destinationPage={ReadThisYear}
            />

<MyAccSingleItem
            title="Read this year"
            description="Keep up to date with your reading habits"
            />

<MyAccSingleItem
            title="Payment History"
            description="Fines and other payment records"
            />

<MyAccSingleItem
            title="FAQs"
            description="Find commonly asked questions"
            />
   </View>
  
       
    </View>
    )
   
}

const styles = StyleSheet.create(
    {
      container: {
        backgroundColor: colors.Purple,
        flex: 1,
    
      }
    
      ,
      button: {
        fontSize: 13,
        width: 130,
  
  
      }, 
      ItemCOntainer:{
        flexDirection: 'column',
        rowGap: 20,
        flex: 0.90, 
        alignItems:'center'
      }
    
    }
  )
