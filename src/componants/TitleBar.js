import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {colors, parameters} from "../global/styles.js"

import Waitlist from '../screens/Waitlist.js'
export default function TitleBar(props)
{
  return(
    <View style={styles.header}>
      
    <Text style={styles.headingpage}>{props.Title}</Text>
  
    {props.buttontext && (
      <Button
        style={styles.button}
        icon="bookmark-multiple"
        mode="contained"
        buttonColor={colors.Peach}
        textColor={colors.Black}
        onPress={() => navigation.navigate({Waitlist} )}
      
      >
        {props.buttontext}
      </Button>
    )}
  </View>
  
    
  )
}

const styles = StyleSheet.create(
  {
       header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginHorizontal: 15,
      padding: 20,
      marginVertical: 5


    }
    ,
    headingpage: {
      fontSize: 23,
      fontFamily: 'monospace',
      color: colors.White,
      fontWeight: "800"
    }
    
    ,
    button: {
      fontSize: 13,
      width: 130,


    }
  }
)