import React, { useState, useEffect } from 'react';


const useDateCalculator = () => {
    const [borrowedDate, setBorrowedDate] = useState();
    const [returnedDate, setReturnedDate] = useState();
    const [DaysLeft, setDaysLeft] = useState(null);
    const [DaysOverdue, setDaysOverdue] = useState(null);
    const [returnStatus, SetReturnStatus] = useState(null);

    const processDays = (borroweddate, returneddate) => {
        let payload = {};
        payload = { ...payload, returnStatus: !(returneddate === '') };

        const currentDate = new Date();
        const dueDate = new Date();

        dueDate.setDate(borroweddate.getDate() + 14); // Assuming the due date is 14 days after borrowing

        const timeDifference = dueDate.getTime() - currentDate.getTime();
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

        payload = {
            ...payload,
            daysLeft: daysDifference > 0 ? daysDifference : 0,
            daysOverdue: daysDifference < 0 ? Math.abs(daysDifference) : 0,
            borrowedDate: new Date(borroweddate),
            returedDate: returneddate !== '' ? new Date(returneddate) : null
        }
        // setDaysOverdue(daysDifference < 0 ? Math.abs(daysDifference) : 0);
        //Converting days into date objects
        // setBorrowedDate(new Date(borrowedDate));
        // setReturnedDate(returnedDate !== '' ? new Date(returnedDate) : null);
        return payload;
    }

    // //return status
    // const returnStatusFind = () => {
    //     SetReturnStatus(returnedDate == null ? false : true)
    // }

    return {
        DaysLeft,
        DaysOverdue,
        fines: "200",
        returnStatus,
        processDays
    };
}

export default useDateCalculator