import { getDatabase, ref, onValue } from "firebase/database";

const getBooks = () => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const booksRef = ref(db, "Books");

    onValue(booksRef, (snapshot) => {
      if (snapshot && snapshot.val()) {
        const books = snapshot.val();
        const book = Object.keys(books).map((key) => ({
          id: key,
          name: books[key].title,
          author: books[key].author,
          genre: books[key].genre,
          description: books[key].description,
          image: books[key].image,
          library: books[key].library,
        }));

        const booksWithImageUrl = book.map((book) => ({
          ...book,
          imageUrl: book.image,
        }));

        resolve(booksWithImageUrl);
      } else {
        reject("No data available");
      }
    });
  });
};

export default getBooks;