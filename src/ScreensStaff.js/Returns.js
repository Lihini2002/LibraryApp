import React, { useEffect, useState ,useMemo,useCallback} from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import getLoans from '../consts/loan';
import getBooks from '../consts/books';
import firebase from '@react-native-firebase/app';
import { colors } from "../global/styles.js";
import { Dialog, Portal, Button, Provider } from 'react-native-paper';


const Returns = () => {
    const [loanList, setLoanList] = useState([]);
    const [bookMap, setBookMap] = useState({});
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedLoan, setSelectedLoan] = useState(null);
  
    useEffect(() => {
      fetchLoans();
    }, []);
  
    
  
    
    const bookIds = useMemo(() => loanList.map((loan) => loan.bookid), [loanList]);
  
    
    const fetchLoans = async () => {
      try {
        const loans = await getLoans();
        setLoanList(loans);
  
        // Fetch book images after fetching loans
        const bookIds = loans.map((loan) => loan.bookid);
        const books = await fetchBookImages(bookIds);
        await Promise.all(books.map(fetchBookImage));
      } catch (error) {
        console.log(error);
        // Handle error when loans cannot be fetched
      }
    };
  
    
  
    useEffect(() => {
      const checkBookData = async () => {
        if (loanList.length > 0 && Object.keys(bookMap).length === loanList.length) {
          const bookIds = loanList.map((loan) => loan.bookid);
          const books = await fetchBookImages(bookIds);
          await Promise.all(books.map(fetchBookImage)); // Fetch images for all books
        }
      };
    
      checkBookData();
    }, [loanList, bookMap]);
  
    const fetchBookImages = async (bookIds) => {
      try {
        const books = await getBooks(); // Fetch all books
    
        const updatedBookMap = { ...bookMap };
        books.forEach((book) => {
          if (bookIds.includes(book.id)) { // Check if the book ID is present in loanList
            updatedBookMap[book.id] = {
              name: book.name,
              image: book.image,
            };
          }
        });
    
        console.log(updatedBookMap); // Log the updated bookMap
        setBookMap(updatedBookMap);
        return books; // Return the books array
      } catch (error) {
        console.log(error);
        // Handle error when book images cannot be fetched
      }
    };
  
  
    const fetchBookImage = async (book) => {
      try {
        await Image.prefetch(book.image); // Preload the image
      } catch (error) {
        console.log(error);
        // Handle error when image prefetching fails
      }
    };
  
    const getBookTitle = (bookId) => {
      const book = bookMap[bookId];
      return book ? book.name : 'Unknown';
    };
  
    const handleReturned = async (loan) => {
      if (loan) {
        const loanId = loan.id;
        const Reference = firebase.app().database('https://library-project-efd46-default-rtdb.asia-southeast1.firebasedatabase.app/');
        const loanRef = Reference.ref('Books/' + loanId)
        const updatedLoan = {
          returneddate: new Date().toISOString().split('T')[0], // Update to today's date
        };
    
        try {
          await update(loanRef, updatedLoan);
          const updatedLoanList = loanList.map((loan) => {
            if (loan.id === loanId) {
              return {
                ...loan,
                ...updatedLoan,
              };
            }
            return loan;
          });
          setLoanList(updatedLoanList);
          setDialogVisible(false); // Close the modal after updating the loan
        } catch (error) {
          console.log(error);
          // Handle error when failed to update the loan in the database
        }
      }
    };
  
    return (
      <Provider>
      <View style={styles.container}>
        <Text style={styles.header}>Loans</Text>
        <ScrollView>
        {loanList.length === 0 ? (
            <Text>No loans available</Text>
          ) : (
            loanList
              .filter((loan) => loan.returneddate === '') // Filter loans with empty "returneddate"
              .concat(
                loanList.filter((loan) => loan.returneddate !== '') // Concatenate loans with non-empty "returneddate"
              )
              .map((loan) => (
                <View key={loan.id} style={styles.loanItem}>
                <Text style={styles.loantitle}>{getBookTitle(loan.bookid)}</Text>
                {bookMap[loan.bookid] && bookMap[loan.bookid].image ? (
    
    <Image
    source={{
      uri: bookMap[loan.bookid].image,
      method: 'POST',
      headers: {
        Pragma: 'no-cache',
      },
      body: 'Your Body goes here',
    }}
    style={{height: 150,resizeMode:'contain',marginRight:220}}
  />
  ) : (
    <Text>No image available</Text>
  )}
  <View style={styles.loanTextContainer}>        
                <Text style={styles.loantext}>Loan ID: {loan.loanid}</Text>
                <Text style={styles.loantext}>Member ID: {loan.memberid}</Text>
                <Text style={styles.loantext}>Book ID: {loan.bookid}</Text>
                <Text style={styles.loantext}>Loan Date: {loan.loandate}</Text>
                <Text style={styles.loantext}>Returned Date: {loan.returneddate}</Text>
                </View>
  
                {loan.returneddate === '' && (
                  <TouchableOpacity
    style={styles.returnButton}
    onPress={() => {
      setSelectedLoan(loan);
      setDialogVisible(true);
    }}
  >
    <Text style={styles.returnButtonText}>Returned</Text>
  </TouchableOpacity>
  
                )}
              </View>
            ))
          )}
        </ScrollView>
        <Portal>
        <Dialog visible={dialogVisible} onDismissed={() => setDialogVisible(false)}>
            <Dialog.Title>Confirmation</Dialog.Title>
            <Dialog.Content>
              <Text>Are you sure you want to mark this loan as returned?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setDialogVisible(false)}>Cancel</Button>
              <Button onPress={() => handleReturned(selectedLoan)}>Confirm</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
      </Provider>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: colors.Purple,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop:20,
      color:colors.Peach
    },
    loanItem: {
      marginBottom: 10,
      backgroundColor:colors.Pink,
      padding:10,
      borderRadius:10,
    },
    loantext:{
      color:colors.Violet,
      fontWeight:'bold',
      flexDirection:'row',
      flex:1
    },
    loantitle:{
      color:colors.Purple,
      fontSize:20,
      fontWeight:'bold'
    },
    returnButton: {
      backgroundColor: colors.Violet,
      padding: 10,
      alignItems: 'center',
      borderRadius: 5,
    },
    returnButtonText: {
      color: colors.Peach,
      fontWeight: 'bold',
    },
    loanTextContainer:{
      marginLeft:120,
      marginTop:10,
      flex:1
    }
  });
  
  export default Returns;