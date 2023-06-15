import firebase from '@react-native-firebase/app';
const getLibrarians = () => {
  return new Promise((resolve, reject) => {
   

    const Reference = firebase.app().database('https://library-project-efd46-default-rtdb.asia-southeast1.firebasedatabase.app/');
    const  librariansRef = Reference.ref('librarian')

    // loansRef.on('value', (snapshot) 
    librariansRef.on('value', (snapshot) => {
      if (snapshot && snapshot.val()) {
        const librarians = snapshot.val();
        const librarian = Object.keys(librarians).map((key) => ({
          id: key,
          email: librarians[key].email,
          librarianId: librarians[key].memberId,
        }));

        resolve(librarian);
      } else {
        reject("No data available");
      }
    });
  });
};

export default getLibrarians;