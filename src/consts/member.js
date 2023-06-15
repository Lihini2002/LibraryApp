import firebase from '@react-native-firebase/app';
const getMembers = () => {
  return new Promise((resolve, reject) => {

    const Reference = firebase.app().database('https://library-project-efd46-default-rtdb.asia-southeast1.firebasedatabase.app/');
    const membersRef = Reference.ref('members')
   

    membersRef.on('value', (snapshot) => {
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