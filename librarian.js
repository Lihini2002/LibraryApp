import { getDatabase, ref, onValue } from "firebase/database";

const getLibrarians = () => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const librariansRef = ref(db, "librarian");

    onValue(librariansRef, (snapshot) => {
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