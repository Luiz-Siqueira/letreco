import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext({});


export default function AuthProvider({ children }) {

    const [textKeyboard,setTextKeyboard] = useState()

    function getText(param){
        console.log(textKeyboard)
        if(textKeyboard){
            if (textKeyboard.length < 5)
            setTextKeyboard(textKeyboard + param)
        }else{
            setTextKeyboard(param)
        }
    }

    //fazer funcao para pegar palavra e colocar no array quando apertar enter


    return(
        // esse é o contexto user 
        <AuthContext.Provider value={{textKeyboard, getText}}> 
            {children} 
        </AuthContext.Provider>
    );
}