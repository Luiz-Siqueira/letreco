import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext({});


export default function AuthProvider({ children }) {

    const [textKeyboard,setTextKeyboard] = useState([])

    function getText(param){
        setTextKeyboard(oldArray => [...oldArray, param])
    }


    return(
        // esse é o contexto user 
        <AuthContext.Provider value={{textKeyboard, getText}}> 
            {children} 
        </AuthContext.Provider>
    );
}