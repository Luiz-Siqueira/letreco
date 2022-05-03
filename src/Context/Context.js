import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext({});


export default function AuthProvider({ children }) {

    const [textKeyboard,setTextKeyboard] = useState()
    const [arrPalavra,setArrPalavra] = useState([])

    function getText(param){
        if(textKeyboard){
            if (textKeyboard.length < 5)
            setTextKeyboard(textKeyboard + param)
        }else{
            setTextKeyboard(param)
        }
    }

    // quando clicado em enter vai colocar a paavra em um array
    function enterAction(){
        setArrPalavra(oldArray => [...oldArray, textKeyboard])
        setTextKeyboard('')
    }

    function RemoveText(){
        if(textKeyboard){
            if (textKeyboard.length > 0){
            setTextKeyboard(textKeyboard.substring(0, textKeyboard.length - 1))
            }
        }else{
            setTextKeyboard(param)
        }
    }

    return(
        // esse é o contexto user 
        <AuthContext.Provider value={{textKeyboard,arrPalavra, getText,enterAction,RemoveText}}> 
            {children} 
        </AuthContext.Provider>
    );
}