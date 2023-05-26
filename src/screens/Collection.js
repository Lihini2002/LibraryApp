import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import { Button, Caption } from 'react-native-paper'
import BookCard from '../componants/BookCard.js';
import { colors, parameters, TextStyle } from "../global/styles.js"
import Logo from '../componants/Logo.js'
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import useDateCalculator from '../Hooks/useDateCalculator.js';


export default function Collections() {
  const CurrentMemberId = "m3";
  const [books, setBooks] = useState([]);
  const { processDays } = useDateCalculator();

  useEffect(() => {
    const Reference = firebase.app().database('https://library-project-efd46-default-rtdb.asia-southeast1.firebasedatabase.app/');
    const LoansReference = Reference.ref('loans');
    const memberLoanRef = LoansReference.orderByChild("memberid").equalTo(CurrentMemberId);
    const booksArray = [];

    memberLoanRef.on('value', (snapshot) => {
      const memberLoans = snapshot.val();
      Object.keys(memberLoans).forEach((loanKey) => {
        const loan = memberLoans[loanKey];
        const bookID = loan.bookid;
        const { loandate, returneddate } = loan;
    
        const borrowedDate = loan.loandate
        const returnedDate = loan.returneddate
        console.log("borrowed and returned dates")
        console.log( borrowedDate)
        console.log(returnedDate)
        
        const { daysLeft, daysOverdue} = processDays(borrowedDate, returnedDate);
        const bookReference = Reference.ref('Books/' + bookID);
        bookReference.on('value', (snapshot) => {
          const book = snapshot.val();
          if (book) {
            const bookTitle = book.title;
            const bookAuthor = book.author;

            booksArray.push({
              title: bookTitle,
              author: bookAuthor,
              daysleft: daysLeft,
              daysoverdue: daysOverdue,
              returnstatus: !(returneddate === "")
            });

            setBooks([...booksArray]);
          } else {
            console.log("the book isn't available man");
          }
     
        });
      });
    });
  }, []);

  return (

    

    <View style={styles.container}>
         <View style={styles.header}>
        <Text style={styles.headingpage}>My Collection</Text>
        <Button style={styles.button} icon="bookmark-multiple" mode="contained" buttonColor={colors.Peach} textColor={colors.Black} onPress={() => console.log('Pressed')}>
          Waitlist
        </Button>
      </View>
      {/* Render a BookCard component for each book in the array */}
      {books.map((book, index) => (
        <BookCard key={index} BookTitle={book.title} BookAuthor={book.author} daysLeft={book.daysleft} daysOverdue={book.daysoverdue} returnedStatus={book.returnstatus} />
      ))}
    </View>
  );
}


const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: colors.Purple,
      flex: 1,
      flexDirection: 'column',
      rowGap: 40,



    }
    ,
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