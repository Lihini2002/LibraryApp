import React, { useState, useEffect } from 'react';


const useDateCalculator = () => {
    // const [borrowedDate, setBorrowedDate] = useState();
    // const [returnedDate, setReturnedDate] = useState();
    // const [DaysLeft, setDaysLeft] = useState(null);
    // const [DaysOverdue, setDaysOverdue] = useState(null);
 

    
    const processDays = (borroweddate, returneddate) => {
        let payload = {};
        payload = { ...payload};
        const currentDate = new Date();
        const dueDate = new Date(borroweddate)
        dueDate.setDate(dueDate.getDate() + 14); // Assuming the due date is 14 days after borrowing
        const timeDifference = dueDate.getTime() - currentDate.getTime();
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

        payload = {
            ...payload,
            daysLeft: daysDifference > 0 ? daysDifference : 0,
            daysOverdue: daysDifference < 0 ? Math.abs(daysDifference) : 0,
            borrowedDate: new Date(borroweddate),
            returnedDate: returneddate !== "" ? new Date(returneddate) : ""
        }
        return payload;
    }

    return {
        // DaysLeft,
        // DaysOverdue,
        // fines: "200",
        processDays
    };
}



export default useDateCalculator