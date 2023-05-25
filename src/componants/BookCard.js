
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { Col, Grid } from 'react-native-easy-grid';
import { colors } from '../global/styles';
import { managePanProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import { green100 } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';



const images = {
  bookCover: require('/Users/lihini/Documents/Alexandria2/assets/6._SX120_.jpg'),
};

const typography = StyleSheet.create({
  bookTitle: {
    fontWeight: '700',
    fontSize: 20,
    width: '90%',
    color: colors.Black

  },
  bookAuthor: {
    fontSize: 16,
    fontWeight: '600',
  },
  dueDate: {
    paddingVertical: 8,
    fontSize: 20,
    fontWeight: '800',
    color: '#3ab107',
  },
  buttonText: {
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: '900',
  },

  ReturnedStatus:{
    fontSize: 22, 
    paddingVertical: 5,
    color: colors.Purple, 
    fontWeight: "700",
  },
    DaysL:{
      paddingVertical:9, 
      fontSize: 19,
      fontWeight: '700',
      color: colors.Purple


    }, 
    DaysO:{
      paddingVertical:9, 
      fontSize: 19,
      fontWeight: '700',
      color: '#ff6054'


    }

  
});

const spacing = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    padding: 7,
    flexDirection: 'row',
    backgroundColor: colors.White,
    borderRadius: 15,

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  bookCover: {
    padding: 10,
    margin: 5,
    borderRadius: 15,
  },
  cardContent: {
    flexDirection: 'column',
    textAlign: 'left',
    margin: 8,
  },
  bookTitleContainer: {
    rowGap: 4,
  },
  button: {
    fontSize: 13,
    width: 100,
    textAlign:"right",
    cursor: "pointer"
  },

  
});

export default function BookCard(props) {
  return (
    <View style={spacing.card}>
      <Image style={spacing.bookCover} source={images.bookCover} />
      <View style={spacing.cardContent}>
        <View style={spacing.bookTitleContainer}>
          <Text style={typography.bookTitle}>{props.BookTitle}</Text>
          <Text style={typography.bookAuthor}>{props.BookAuthor}</Text>
        </View>

        <View>
      {props.returnedStatus ? (
        <Text style={typography.ReturnedStatus}>RETURNED</Text>
      ) : (
        <>
         
          {props.daysLeft> 0 && <Text style={typography.DaysL}>Days left:  {props.daysLeft}</Text>}
          {props.daysOverdue > 0 && <Text style={typography.DaysO}>Days Overdue: {props.daysOverdue}</Text>}
        </>
      )}
    </View>

        
        <Button
          style={spacing.button}
          mode="contained"
          buttonColor={colors.Violet}
          textColor={colors.White}
          labelStyle={typography.buttonText}
        >
          Renew
        </Button>
      </View>
    </View>
  );
}