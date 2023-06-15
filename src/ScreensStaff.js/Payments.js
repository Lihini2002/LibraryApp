import React, { useEffect, useState ,useMemo,useCallback} from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import getLoans from '../consts/loan';
import getBooks from '../consts/books';
import firebase from '@react-native-firebase/app';
import { colors } from "../global/styles.js";
import { Dialog, Portal, Button, Provider } from 'react-native-paper';


const Payments = () => {
    return
    (
        <Text>This is the Payments PAge</Text>
    )
}

export default Payments
