
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { Col, Grid } from 'react-native-easy-grid';
import { colors } from '../global/styles';


// const images = {
//   bookCover: require('/Users/lihini/Documents/Alexandria2/assets/6._SX120_.jpg'),
// };

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
  AvStatus: {
    fontSize: 22, 
    paddingVertical: 5,
    color: colors.Purple, 
    fontWeight: "700",

  }



  
});

const spacing = StyleSheet.create({
  card: {
    marginHorizontal: 20,
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
    width:"30%"
  },
  cardContent: {
    flexDirection: 'column',
    textAlign: 'left',
    margin: 8,
  },
  bookTitleContainer: {
    rowGap: 4,
  },

  
});

export default function WaitlistBookCard(props) {
  return (
    <View style={spacing.card}>
      <Image style={spacing.bookCover}   source={{ uri: props.bookCover }} />
      <View style={spacing.cardContent}>
        <View style={spacing.bookTitleContainer}>
          <Text style={typography.bookTitle}>{props.BookTitle}</Text>
          <Text style={typography.bookAuthor}>{props.BookAuthor}</Text>
        </View>

        <View>
      {/* {props.returnedStatus ? (
        <Text style={typography.ReturnedStatus}>RETURNED</Text>
      ) : (
        <>
         
          {props.daysLeft> 0 && <Text style={typography.DaysL}>Days left:  {props.daysLeft}</Text>}
          {props.daysOverdue > 0 && <Text style={typography.DaysO}>Days Overdue: {props.daysOverdue}</Text>}
        </>
      )} */}
            <Text style={typography.AvStatus}>
        {props.avStatus ? 'AVAILABLE' : 'UNAVAILABLE'}
      </Text>
     
    </View>

{/*         
        <Button
          style={spacing.button}
          mode="contained"
          buttonColor={colors.Violet}
          textColor={colors.White}
          labelStyle={typography.buttonText}
        >
          Renew
        </Button> */}
      </View>
    </View>
  );
}