import React from 'react';

export const loggedInUser = React.createContext({})

export function useLoggedInUser() {
    return React.useContext(loggedInUser)
}