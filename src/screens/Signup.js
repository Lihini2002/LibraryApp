
import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions,  TextInput, Image, TouchableOpacity} from 'react-native'
import {colors, parameters, TextStyle} from "../global/styles.js"
import { Button } from 'react-native-paper';
import Header from '../componants/Header.js'
import Logo  from '../componants/Logo.js'

export default function SignUp()
{
    
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('')
    const [ ConfPassword , setConfPassword] = useState('')
    
    const handleNameChange = (text) => {
        setName(text);
      };

    const handleEmailChange = (text) => {
      setEmail(text);
    };

    const handlePasswordChange = (pword) => {
        setPassword(pword);
      };

    const handleConfirmPassword = (conpword) => {
        setConfPassword(conpword);
      };

    const HandleSignUp = (e) => {
         // Check if all fields are filled
    if (!name || !email || !password || !ConfPassword || !phoneNumber) {
        alert('Please fill all fields');
        return;
    }

 // Check if password and confirm password match
    if (password !== ConfPassword) {
        alert('Passwords do not match');
        return;
    }

  // Check if phone number is valid
    const phoneRegex = /^[0-9]{10}$/; // Only 10 digit phone numbers are valid
    if (!phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid phone number');
        return;
    }

      };

    return( 
        <View style= {styles.container}>
            <Header></Header>
         
            <Logo></Logo>
                 <Text style={styles.Title}>Create an account</Text>
            <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
 

        <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

<TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry = {true}
        value={ConfPassword}
        onChangeText={setConfPassword}
      />
        
        <View style={styles.BtnCOnt}>
        <Button 
        mode="contained" 
        contentStyle={styles.signupBtn}
        onPress={(e) => HandleSignUp()} labelStyle={styles.signupBtnLabel}>
            Sign up
         </Button>

         <Text style={[styles.Title, {marginTop: 15, marginBottom:15 ,fontWeight:600}]}>OR</Text>

         <Button 
        mode="contained" 
        contentStyle={[styles.signupBtn , {backgroundColor:colors.Peach}]}
        onPress={() => {}} labelStyle={styles.signupBtnLabel }>
            Log in
         </Button>

        </View>
  </View>
        

   

    )
}


{/**styles */}
const styles = StyleSheet.create({
    container :{
        flex:1, 
        justifyContent: 'flex-start',
        alignItems: 'center', 
        backgroundColor:colors.Violet
      
        
    },

    
    Title :{
        fontSize: 26,
      fontWeight: '800',
      color: colors.White, 
      fontFamily: 'monospace',
      textAlign: 'center', 
      
      
    }
, 
    
    input:{
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
    signupBtn:{
        
        height:60,
        width:200,
        backgroundColor: colors.Purple
       
       
        
    }
    , 
    BtnCOnt:
    {
        marginTop: 30
    }

    , 
    signupBtnLabel:
    {
        fontSize:23, 
        fontWeight: 800,
        padding:2
    }

})
