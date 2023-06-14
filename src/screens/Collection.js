import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import BookCard from '../componants/BookCard.js';
import { colors, parameters, TextStyle } from "../global/styles.js"
import firebase from '@react-native-firebase/app';
import useDateCalculator from '../Hooks/useDateCalculator.js';
import { Button, Caption, Appbar } from 'react-native-paper'
import Waitlist from './Waitlist.js';


export default function Collections({navigation}) {
 // Use the useNavigation hook to access the navigation prop
  
 
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
        const { loandate, returneddate , loanid} = loan;
    
        const borrowedDate = loan.loandate
        const returnedDate = loan.returneddate
        console.log("borrowed and returned dates")
  
        
        const { daysLeft, daysOverdue} = processDays(borrowedDate, returnedDate);
        const bookReference = Reference.ref('Books/' + bookID);
        bookReference.on('value', (snapshot) => {
          const book = snapshot.val();
          if (book) {
            const bookTitle = book.title;
            const bookAuthor = book.author;
            const bookCover = book.image
            console.log(book.image)
            console.log("joo")

            booksArray.push({
              loanid : loanid,
              title: bookTitle,
              author: bookAuthor,
              daysleft: daysLeft,
              daysoverdue: daysOverdue,
              cover: bookCover,
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
          {/* <Text style={styles.headingpage}>Collections</Text> */}
          <Button
            style={styles.button}
            icon="bookmark-multiple"
            mode="contained"
            buttonColor={colors.Peach}
            textColor={colors.Black}
            onPress={() => navigation.navigate(Waitlist)}// Call the handleWaitlistPress function
          >
            Waitlist
          </Button>

       
        </View>
  
        {books.map((book, index) => (
        <BookCard key={index} BookTitle={book.title} BookAuthor={book.author} daysLeft={book.daysleft} daysOverdue={book.daysoverdue} returnedStatus={false} bookCover={book.cover} loanid={book.loanid}/>
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
      rowGap: 20,
   
    }
  
    ,
    button: {
      fontSize: 13,
      width: 130,
      marginTop: 5

      


    }, 
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'baseline',
      marginHorizontal: 25,
      marginVertical: 10


    }
    ,
    headingpage: {
      fontSize: 23,
      fontFamily: 'monospace',
      color: colors.White,
      fontWeight: "800"
    }
    
  
  }
)