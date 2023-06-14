import firebase from '@react-native-firebase/app';

const getLoans = () => {
  return new Promise((resolve, reject) => {
    const Reference = firebase.app().database('https://library-project-efd46-default-rtdb.asia-southeast1.firebasedatabase.app/');
    const loansRef = Reference.ref('loans');


    loansRef.on('value', (snapshot) => {
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