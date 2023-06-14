import { getDatabase, ref, onValue } from "firebase/database";

const getMembers = () => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const membersRef = ref(db, "members");

    onValue(membersRef, (snapshot) => {
      if (snapshot && snapshot.val()) {
        const members = snapshot.val();
        const member = Object.keys(members).map((key) => ({
          id: key,
          email: members[key].email,
          firstname: members[key].firstname,
          lastname: members[key].lastname,
          memberid: members[key].memberid,
          phonenumber: members[key].phonenumber,
          status: members[key].status,
        }));

        resolve(member);
      } else {
        reject("No data available");
      }
    });
  });
};

export default getMembers;