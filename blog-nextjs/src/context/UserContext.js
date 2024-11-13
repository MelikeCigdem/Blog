"use client"

import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext();
export function UserProvider({children}) {
    const [user, setUser] = useState(null)

    const updateUser = (newUserData) => {
        setUser(newUserData);
    }
    return (
        <UserContext.Provider value={{user ,updateUser}} >
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);

    if(!context) {
        throw new Error("useUser must be used within a UserProvider")
    }
    return context;
}