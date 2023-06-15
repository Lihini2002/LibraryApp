import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, Button,Image, TouchableOpacity} from 'react-native'
import {colors, parameters, TextStyle} from "../global/styles.js"


export default function MyAccount()
{
    return( 
    <View style={styles.Test}>
        <Text style={styles.Test}>Librarian Payments page</Text>
    </View>
    );
   
}

const styles = StyleSheet.create({
    Test:{
        color:'#fff',
        backgroundColor:'#4d2959',
        marginTop:20,
        flex:1
    }
})
