import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext({});


export default function AuthProvider({ children }) {

    const [textKeyboard,setTextKeyboard] = useState()
    const [arrPalavra,setArrPalavra] = useState([])
    const [corGrid,setcorGrid] = useState([])
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
        CheckText()
        if(textKeyboard.length == 5){
            setArrPalavra(oldArray => [...oldArray, textKeyboard])
            setTextKeyboard('')
        }
    }

    function CheckText() {
        let palavra = ['A','V','I','A','O']
        let palavraUser = textKeyboard.split('')
        let color = [];
        for (let index = 0; index < palavra.length; index++) {
            if(textKeyboard.indexOf(palavra[index]) == 0){
                console.log(textKeyboard[index])
            }else{
                console.log('erro')
            }
        }
    }

    function RemoveText(){
        if(textKeyboard){
            if (textKeyboard.length > 0){
            setTextKeyboard(textKeyboard.substring(0, textKeyboard.length - 1))
            }
        }
    }

    return(
        // esse é o contexto user 
        <AuthContext.Provider value={{textKeyboard,arrPalavra, getText,enterAction,RemoveText}}> 
            {children} 
        </AuthContext.Provider>
    );
}