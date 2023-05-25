import React, { useState , useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, Alert} from 'react-native'
import { Button, Caption } from 'react-native-paper'
import BookCard from '../componants/BookCard.js';
import {colors, parameters, TextStyle} from "../global/styles.js"
import Logo  from '../componants/Logo.js'
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';


export default function Collections() {
  const CurrentMemberId = "m1";
  const [books, setBooks] = useState([]);
  const [overdueState, setOverdueState] = useState(""); 
  const[DaysLeft , setDaysLeft] = useState("")
  const[duemessage , setDueMessage] = useState("")
  


  useEffect(() => {
    const Reference = firebase.app().database('https://library-project-efd46-default-rtdb.asia-southeast1.firebasedatabase.app/');
    const LoansReference = Reference.ref('loans');
    const sortedmemberLoanRef = LoansReference.orderByChild("memberid")
    const memberLoanRef = sortedmemberLoanRef.equalTo(CurrentMemberId)


    const booksArray = [];
  
 
    memberLoanRef.on('value', (snapshot) => {
      const memberLoans = snapshot.val();
      //for each loan found finding info about it 
      Object.keys(memberLoans).forEach((loanKey) => {
        const loan = memberLoans[loanKey];
        const bookID = loan.bookid;

        //finding the due date 
        const borrowedDate = new Date(loan.loandate);
        const dueDate = new Date(borrowedDate);
        dueDate.setDate(borrowedDate.getDate() + 14);
       
        //finding if the book is returned or not 
      //  const returnedDate = loan.returneddate;
        
        if(loan.returneddate== "")
        {
          console.log("the book has not been returned")
          const currentDate = new Date();
          const timeDifference = dueDate.getTime() - currentDate.getTime();
          const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
          
          //green is for enough days till date
          //yellow is for close
          //red is for overdue
          console.log(daysDifference)
          if(daysDifference<0)
          {
            setOverdueState("red")
          }


          else if(daysDifference<=3)
          {
            setOverdueState("yellow")

          }
         
         
          else(daysDifference<15)
          {
            setOverdueState("green")
          }

          
          setDaysLeft(daysDifference)
          
        }
      
        console.log(overdueState)
        

        //turning them into Date formats 
        
       //  const returnDate = new Date(returnedDate);
       

        //getting the date difference
       // const timeDifference = returnDate.getTime() - borrowedDate.getTime();
        //const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

        //const maxLoanDuration = 14;
       // const remainingDays = maxLoanDuration - daysDifference;
       // console.log(remainingDays)



        //getting the book from the book id 
        const bookReference = Reference.ref('Books/' + bookID );
       
       
       //getting books from book id 
        bookReference.on('value', (snapshot) => {
          const book = snapshot.val();
          if (book) {
            console.log("the book is available man")
            const bookTitle = book.title;
            const bookAuthor = book.author;

            if(overdueState=="green")
            {
              const message = `Remaining: ${DaysLeft}`
              setDueMessage(message)
              console.log(message)
            }
           
            else if(overdueState=="yellow")
            {
              const message = `Hurry Up! ${DaysLeft}`
              setDueMessage(message)
              console.log(message)
            }
            
           else if(overdueState=="red")
            {
              DaysLeft = (DaysLeft)*(-1)
              const message = `Overdue by ${DaysLeft}`
              setDueMessage(message)
              console.log(message)
            }


            console.log(DaysLeft)
           
        
            booksArray.push({
              title: bookTitle,
              author: bookAuthor,
              duedate: duemessage
            });
            console.log([booksArray])
            setBooks([...booksArray]);
    
          }

          else
          {
            console.log("the book isnt available man")
          }
        })
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
        <BookCard key={index} BookTitle={book.title} BookAuthor={book.author} DueDate={book.duedate} />
      ))}
    </View>
  );
}



const styles = StyleSheet.create(
  {
   container:{
    backgroundColor: colors.Purple,
    flex:1, 
    flexDirection: 'column', 
    rowGap: 40, 
   
   

   }
,
   header:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems:'baseline',
    marginHorizontal:15,
    padding: 20,
    marginVertical: 5
    

   }
,
   headingpage:{
      fontSize: 23, 
      fontFamily:'monospace', 
      color: colors.White,
      fontWeight:"800"
   }
,
   button:{
    fontSize:13,
    width: 130,
  
  
   }
  }
)