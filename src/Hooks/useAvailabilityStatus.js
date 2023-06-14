import React from "react";
import { useState } from "react";
import firebase from '@react-native-firebase/app';


const useAvailabilityStatus = () => {
    const [availability, setAvailability] = useState(true);

    const handleAvailability = (bookID, noOfCopies) => {
        const Reference = firebase.app().database('https://library-project-efd46-default-rtdb.asia-southeast1.firebasedatabase.app/');
        const loanReference = Reference.ref('loans').orderByChild("bookid").equalTo(bookID);
        let waitlist = {}
        waitlist = {...waitlist};
        loanReference.once("value")
            .then((snapshot) => {
                const loanCount = snapshot.numChildren();
                console.log("Number of loans:", loanCount);

                if (loanCount < noOfCopies) {
                    setAvailability(true);
                } else {
                    setAvailability(false);
                }
                
            })
            .catch((error) => {
                console.log("Error retrieving loan count:", error);
            });

        waitlist = {
            ...waitlist,
            Availability : availability
        }
        return waitlist
    };

    return {
        handleAvailability,
      
    };
};

export default useAvailabilityStatus;
