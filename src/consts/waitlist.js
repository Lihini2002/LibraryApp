import { getDatabase, ref, onValue } from 'firebase/database';

const getWaitlist = () => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const waitlistsRef = ref(db, 'waitlists');

    onValue(waitlistsRef, (snapshot) => {
      if (snapshot && snapshot.val()) {
        const waitlists = snapshot.val();
        const waitlist = Object.keys(waitlists).map((key) => ({
          id: key,
          bookid: waitlists[key].bookid,
          memberid: waitlists[key].memberid,
        }));

        resolve(waitlist);
      } else {
        reject('No data available');
      }
    });
  });
};

export default getWaitlist;
