import { getDatabase, ref, onValue } from 'firebase/database';

const getLoans = () => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const loansRef = ref(db, 'loans');

    onValue(loansRef, (snapshot) => {
      if (snapshot && snapshot.val()) {
        const loans = snapshot.val();
        const loanList = Object.keys(loans).map((key) => ({
          id: key,
          bookid: loans[key].bookid,
          loandate: loans[key].loandate,
          loanid: loans[key].loanid,
          memberid: loans[key].memberid,
          returneddate: loans[key].returneddate,
        }));

        resolve(loanList);
      } else {
        reject('No data available');
      }
    });
  });
};

export default getLoans;
