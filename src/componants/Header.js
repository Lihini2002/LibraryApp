import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {colors, parameters} from "../global/styles.js"
export default function Header()
{
  return(
    <View style={styles.header} >
    </View>
    
  )
}

const styles = StyleSheet.create(
  {
    header:{
            flexDirection : "row",
            backgroundColor:colors.Purple,
            height : parameters.headerHeight,
           }
  }
)