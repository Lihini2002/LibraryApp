import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { app } from '../config';
import HomeScreen from './HomeScreen';
import { CommonActions } from '@react-navigation/native';
import {colors} from "../global/styles.js";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
       
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        );
      })
      .catch(error => {
        // Handle login error
        setError('Invalid email or password');
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo-no-background-lightpink.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={colors.Pink}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={colors.Pink}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>How to Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.Purple
  },
  logo: {
    height:50,
    width:300,
    marginBottom: 100,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: colors.Violet,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    color:colors.Pink
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: colors.Pink,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor:colors.Peach
  },
  buttonText: {
    color: colors.Purple,
    fontSize: 16,
    fontWeight:'bold'
  },
  linkText: {
    color: colors.Pink,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  errorText: {
    color: colors.Peach,
    marginBottom: 10,
  },
});

export default LoginScreen;
