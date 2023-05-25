import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';




const GetBooks = () => {
  return new Promise((resolve, reject) => {
    const booksRef = firebase.app().database('https://library-project-efd46-default-rtdb.asia-southeast1.firebasedatabase.app/').ref('Books')
    onValue(booksRef, (snapshot) => {
      if (snapshot && snapshot.val()) {
        const books = snapshot.val();
        const book = Object.keys(books).map((key) => ({
          id: key,
          name: books[key].title,
          author: books[key].author,
          genre: books[key].genre,
          description: books[key].description,
          image:books[key].image ,
          library: books[key].library
        }));
        resolve(book);
      } else {
        reject("No data available");
      }
    });
  });
};

export default GetBooks;