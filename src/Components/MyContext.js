import React, { createContext, useContext, useEffect, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [bookingslist, setbookingslist] = useState(localStorage.getItem("bookinglist") ? JSON.parse(localStorage.getItem("bookinglist")) : []);

    const setbookinglist = (newState) => {
        setbookingslist(newState);
    };

    useEffect(()=>{
        localStorage.setItem("bookinglist",JSON.stringify(bookingslist));
    },[bookingslist]);

    return (
        <MyContext.Provider value={{ bookingslist, setbookinglist }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => useContext(MyContext);