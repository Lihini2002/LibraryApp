
import React from 'react';
import { useState , useEffect} from 'react';
import { View, StyleSheet, Image, Text, Alert } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { Col, Grid } from 'react-native-easy-grid';
import { colors } from '../global/styles';
import { RenewBtn } from './RenewBtn';
import { useFinesCalculator } from '../Hooks/useFinesCalculator';
import { black } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
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
      color: '#24202b'


    }, 
    FineStatus:{
      fontSize:20,
      fontWeight:'800',
      color: "#340055"

    }
,
    Fines:{
      fontSize:20,
      fontWeight:'800',
      color: "#340055"
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
  button: {
    fontSize: 13,
    width: 100,
    textAlign:"right",
    cursor: "pointer"
  },
  fines:{
  flexDirection:'row',
  justifyContent:'space-between',
  backgroundColor:'#cebee8', 
  padding: 10,
  borderRadius:10
  
  }

  
});


export default function BookCard(props) {
  // const [paymentAm, setPaymentAmount] = useState(0);
  // const [paymentStat, setPaymentStatus] = useState(false)
  const { updateFines } = useFinesCalculator();
  console.log(props.loanid)
  console.log("props.loanid")
  const { fineAmount, fineStatus} = updateFines(props.loanid , props.daysOverdue)
      // setPaymentAmount(paymentAmount);
      // setPaymentStatus(paymentStatus);

;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { paymentAmount, paymentStatus } = await updateFines(props.loanid, props.daysOverdue);
  //     setPaymentAmount(paymentAmount);
  //     setPaymentStatus(paymentStatus);
  //   };
    
  //   fetchData();
  // }, [updateFines, props.loanid, props.daysOverdue]);

  return (
    
    <View style={spacing.card}>
      <Image style={spacing.bookCover} source={{ uri: props.bookCover }} />
      <View style={spacing.cardContent}>
        <View style={spacing.bookTitleContainer}>
          <Text style={typography.bookTitle}>{props.BookTitle}</Text>
          <Text style={typography.bookAuthor}>{props.BookAuthor}</Text>
        </View>

        <View>
          {!props.returnedStatus && (
            <Button
              style={spacing.button}
              mode="contained"
              buttonColor={colors.Violet}
              textColor={colors.White}
              labelStyle={typography.buttonText}
              onPress={() => {
                Alert.alert("The book is renewed.");
              }}
            >
              Renew
            </Button>
          )}

          {props.returnedStatus ? (
            <Text style={typography.ReturnedStatus}>RETURNED</Text>
          ) : (
            <>
              {props.daysLeft > 0 && <Text style={typography.DaysL}>Days left: {props.daysLeft}</Text>}
              {props.daysOverdue > 0 && (
                <Text style={typography.DaysO}>Days Overdue: {props.daysOverdue}</Text>
              )}
              {/* Use the paymentAmount and paymentStatus values in your component */}
                <View style={spacing.fines}>
                <Text style={typography.Fines}>Rs.{fineAmount}</Text>
              <Text style={typography.FineStatus}> {fineStatus ? 'Paid' : 'Unpaid'}</Text>
                </View>

            </>
          )}
        </View>
      </View>
    </View>
  );
}
