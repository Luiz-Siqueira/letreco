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
            if(palavra.indexOf(palavraUser[index]) != -1){
                //primeiro passo se pelo menos tem na palavra
                if(palavraUser[index] == palavra[index]){
                    //segundo passo ver se esta certinho no indice
                    let count = 0;
                    let indiceCor = 0
                    palavra.forEach(letra=>{
                        if(letra === palavraUser[index]) count++
                    })
                    if(count > 1){
                        palavraUser.forEach((letra,indice)=>{
                            if(letra === palavraUser[index]){
                                if(color[indice] == 'orange'){
                                    color[indice] = 'gray'
                                }
                            } 
                        })
                    }

                    color.push('green')
                }else{
                    //esta verificando ana palavra quantas vezes repete a letra
                    //se repetir mais que uma vai ver no color quantas vezes ja tem a cor laranja
                    let count = 0;
                    let indiceCor = 0
                    palavra.forEach(letra=>{
                        if(letra === palavraUser[index]) count++
                    })
                    if(count > 1){
                        palavraUser.forEach((letra,indice)=>{
                            if(letra === palavraUser[index]){
                                if(color[indice] == 'green' || color[indice] == 'orange'){
                                    indiceCor++
                                }
                            } 
                        })
                    }

                    if(indiceCor < count){
                        color.push('orange')
                    }else{
                        color.push('gray')
                    }


                    // nao ta no indice laranja
                }
            }else{
                color.push('gray')
            }
        }
        setcorGrid(oldArray => [...oldArray, color])
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
        <AuthContext.Provider value={{textKeyboard,arrPalavra,corGrid, getText,enterAction,RemoveText}}> 
            {children} 
        </AuthContext.Provider>
    );
}