
import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, Button,Image, TouchableOpacity} from 'react-native'
import {colors, parameters, TextStyle} from "../global/styles.js"
import Header from '../componants/Header.js'
import Logo  from '../componants/Logo.js'

export default function Login()
{

    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('')

    const handleEmailChange = (text) => {
      setEmail(text);
    };

    const handlePasswordChange = (pword) => {
        setPassword(pword);
      };

    const HandleLogin = (e) => {
       alert("logged in")
      };

    return( 
        <View style= {styles.container}>
            <Header></Header>
          
            <Text style={styles.Title}>Welcome back!</Text>
            <Logo></Logo>
           
        <View style={styles.inputCont}>
      
            <TextInput style={styles.Input}
             placeholder="Enter your email"
             onChangeText={handleEmailChange}
             value={email}
             keyboardType="email-address"
             autoCapitalize="none"
             autoCompleteType="email"
             textContentType="emailAddress">
                
             </TextInput>
        </View>

        <View style={styles.inputCont}>
      
      <TextInput style={styles.Input}
       placeholder="Enter your password"
       onChangeText={handlePasswordChange}
       value={password}
       secureTextEntry= {true}
       textContentType="password">
          
       </TextInput>

        <View style={styles.buttonStyle}>
       <Button
       title='Log in'
       color={colors.Purple}
        onPress={() => {HandleLogin}}>
        </Button>
        </View >

        <View style="SignUpLabel">
            <Text>First time here? Sign up</Text>
            <View style={styles.buttonStyle}>
            <Button
            title='SignUp'
            color={colors.Purple}
                onPress={() => {HandleLogin}}>
                </Button>
                </View >
        </View>
     
  </View>
        



        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1, 
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:colors.Violet
      
        
    },
    
    Title :{
        fontSize: 42,
      fontWeight: '800',
      color: colors.White, 
      fontFamily: 'Georgia',
    
      
    }
, 
    
    Input:{
        marginTop: 5,
        backgroundColor: colors.White,
        width: 310,
        borderRadius: 15, 
        padding: 15, 
        borderColor: colors.Purple,
        borderWidth: 2,
        fontSize: 22, 
    }

    , inputCont:{
        marginTop:30,
        alignItems: "stretch",
    }

,
 
buttonStyle:{
    marginTop: 40
    
}
,

})
