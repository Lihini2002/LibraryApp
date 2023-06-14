import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, Button,Image, TouchableOpacity} from 'react-native'
import {colors, parameters, TextStyle} from "../global/styles.js"
import WaitlistBookCard from '../componants/WaitlistBookCard.js';
import  useAvailabilityStatus  from '../Hooks/useAvailabilityStatus.js';
import firebase from '@react-native-firebase/app';



const Waitlist = () =>
{   
    const CurrentMemberId = "m1";
    const [books, setBooks] = useState([]);
    const {handleAvailability} = useAvailabilityStatus();
   

    useEffect(() => {
        const Reference = firebase.app().database('https://library-project-efd46-default-rtdb.asia-southeast1.firebasedatabase.app/');
        const WaitlistReference = Reference.ref('waitlists');
        const memberListRef = WaitlistReference.orderByChild("memberid").equalTo(CurrentMemberId)
        const booksArray = [];

        memberListRef.on('value', (snapshot) => {
            const memberList = snapshot.val();
            Object.keys(memberList).forEach((favkey) => {
              const fav = memberList[favkey];
              const bookID = fav.bookid;

            
          
        
              
              const bookReference = Reference.ref('Books/' + bookID);
              bookReference.on('value', (snapshot) => {
                const book = snapshot.val();
                if (book) {
                  const bookTitle = book.title;
                  const bookAuthor = book.author;
                  const bookCover = book.image
                  const noOfCopies = book.noOfCopies
                  console.log("noOfCopies")
                    console.log(noOfCopies)
                    console.log("bookID")
                    console.log(bookID)
                    //Figure out how to get this to work 
                    const waitlist = handleAvailability (bookID , noOfCopies)
                    const {Availability} = waitlist
                   


                //   console.log(book.image)
                //   console.log("joo")
      
                  booksArray.push({
                    title: bookTitle,
                    author: bookAuthor,
                    cover: bookCover,
                    avStatus: Availability
                    // returnstatus: !(returneddate === "")
                  });
      
                  setBooks([...booksArray]);
                } else {
                  console.log("the book isn't available man");
                }
           
              });
            });
          });
    }, [])

    return( 
        
    <View style={styles.container}>
   
         {books.map((book, index) => (
        <WaitlistBookCard key={index} BookTitle={book.title} BookAuthor={book.author} bookCover={book.cover} avStatus={book.avStatus} />
      ))}
    </View>
    )
   
}

export default Waitlist

const styles = StyleSheet.create(
    {
      container: 
      {
        paddingTop: 25,
        backgroundColor: colors.Purple,
        flex: 1,
        flexDirection: 'column',
        rowGap: 20,
     
      }
    })  