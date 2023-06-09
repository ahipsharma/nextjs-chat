import React, { useState, useContext, createContext } from 'react';

export const Context = createContext ();

export const ContextProvider = (props) => {
    const [username, setUserName] = useState("");
    const [secret, setSecret] = useState("");

    const value = {
        username,
        setUserName,
        secret,
        setSecret,
    };
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
};