import React from "react";
import { useState } from "react";
import firebase from '@react-native-firebase/app';

export const useFinesCalculator = () => {
    const [fineAmount, setFineAmount] = useState(0);
    const [fineStatus, setFineStatus] = useState(false);
    const DailyFine = 200.00
    const updateFines = (loanID, daysOverdue) => {
      const Reference = firebase.app().database('https://library-project-efd46-default-rtdb.asia-southeast1.firebasedatabase.app/');
      const finesReference = Reference.ref('fines');
      const finesQuery = finesReference.orderByChild('loanid').equalTo(loanID);
  
      finesQuery.once('value', (snapshot) => {
        if (snapshot.exists()) {
          // Fines entry already exists, update paymentAmount
          snapshot.forEach((childSnapshot) => {
            const finesKey = childSnapshot.key;
            const finesData = childSnapshot.val();
            const paymentStatus = finesData.paymentStatus;
            const paymentAmount = DailyFine * daysOverdue;
  
            finesReference.child(finesKey).update({ paymentAmount });
  
            setFineAmount(paymentAmount);
            setFineStatus(paymentStatus);
          });
        } else {
          // Fines entry does not exist, create a new entry
          const paymentAmount = DailyFine * daysOverdue;
          const paymentStatus = false;
  
          setFineAmount(paymentAmount);
          setFineStatus(paymentStatus);
  
          const fineCalc = {
            loanID,
            paymentAmount,
            paymentStatus,
          };
  
          finesReference.push(fineCalc);
        }
      });
  
      // Return the fineAmount and fineStatus values
      return {
        fineAmount,
        fineStatus,
      };
    };
  
    return {
      updateFines,
    };
  };
  