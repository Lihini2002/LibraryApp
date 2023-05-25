import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { Button, Caption } from 'react-native-paper'
import {colors, parameters} from "../global/styles.js"
export default function ButtonGeneric()
{
  return(

      <View> </View> 
    
    
  )
}

const styles = StyleSheet.create(
  {

   button:{
    fontSize:13,
    width: 130,
    borderColor: colors.White, 
    borderWidth:3
  
  
   }
,
   buttontext:{
      fontSize: 15,
      letterSpacing: 1,
      fontweight: '900'
    
      
   }
   
  }
)