import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [textKeyboard, setTextKeyboard] = useState();
    const [arrPalavra, setArrPalavra] = useState([]);
    const [corGrid, setcorGrid] = useState([]);
    const [storageKeyboard, setStorageKeyboard] = useState([]);
    const [keyboardColor, setKeyboardColor] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    let color = []
    const arrKeyboard = {
        keyboard: [
            { key: "1", caracter: "A", color: "black" },
            { key: "2", caracter: "B", color: "black" },
            { key: "3", caracter: "C", color: "black" },
            { key: "4", caracter: "D", color: "black" },
            { key: "5", caracter: "E", color: "black" },
            { key: "6", caracter: "F", color: "black" },
            { key: "7", caracter: "G", color: "black" },
            { key: "8", caracter: "H", color: "black" },
            { key: "9", caracter: "I", color: "black" },
            { key: "10", caracter: "J", color: "black" },
            { key: "11", caracter: "K", color: "black" },
            { key: "12", caracter: "L", color: "black" },
            { key: "13", caracter: "M", color: "black" },
            { key: "14", caracter: "N", color: "black" },
            { key: "15", caracter: "O", color: "black" },
            { key: "16", caracter: "P", color: "black" },
            { key: "17", caracter: "Q", color: "black" },
            { key: "18", caracter: "R", color: "black" },
            { key: "19", caracter: "S", color: "black" },
            { key: "20", caracter: "T", color: "black" },
            { key: "21", caracter: "U", color: "black" },
            { key: "22", caracter: "V", color: "black" },
            { key: "23", caracter: "W", color: "black" },
            { key: "24", caracter: "X", color: "black" },
            { key: "25", caracter: "Y", color: "black" },
            { key: "26", caracter: "Enter", color: "black" },
            { key: "27", caracter: "Z", color: "black" },
            { key: "28", caracter: "Remove", color: "black" },
        ],
    };

    function getText(param) {
        if (textKeyboard) {
            if (textKeyboard.length < 5) setTextKeyboard(textKeyboard + param);
        } else {
            setTextKeyboard(param);
        }
    }

    async function enterAction() {
        CheckText();

        if (textKeyboard.length == 5) {
            setArrPalavra((oldArray) => [...oldArray, textKeyboard]);
            console.log(arrPalavra)
            setTextKeyboard("");
        }
    }

    function CheckText() {
        let palavra = ["A", "V", "I", "A", "O"];
        let palavraUser = textKeyboard.split("");
        let arr = [];
        var countsPalavra = {};
        palavra.forEach(function(x) { countsPalavra[x] = (countsPalavra[x] || 0)+1; });
        var countsPalavraUser = {};
        palavraUser.forEach(function(x) { countsPalavraUser[x] = (countsPalavraUser[x] || 0)+1; });
        for (let index = 0; index < 5; index++) {
            let teste = palavra.find(element => element == palavraUser[index]);
            if(teste){
                // pelo menos existe a letra no array
                if(palavra[index] == palavraUser[index]){
                    arr[index] = 'green'
                }else{
                 // ja esta reconhecendo quando tem duas letras iguais falta ajustar para colcoar cor só na primeira
                    if(countsPalavraUser[palavraUser[index]] == countsPalavra[palavraUser[index]]){
                    console.log('GOOOOL')
                    arr[index] = 'orange'
                    }else{
                        arr[index] = 'gray'
                    }
                }
            }else{
                //ja colocou a cor no indice do array
                arr[index] = 'gray'
            }
        }

        setKeyboardColor(arr)
        setcorGrid((oldArray) =>[...oldArray, arr])
        console.log('counts',countsPalavra)
        console.log('counts',countsPalavraUser)
    }

    function checkColor(color) {
        let countColor = 0
        color.forEach((element,index)=>{
            if(element == 'green') countColor++
        })

        if(countColor == 5){
            setModalVisible(true)
        }
    }

    function RemoveText() {
        if (textKeyboard) {
            if (textKeyboard.length > 0) {
                setTextKeyboard(textKeyboard.substring(0, textKeyboard.length - 1));
            }
        }
    }

    return (
        <AuthContext.Provider
            value={{
                textKeyboard,
                arrPalavra,
                corGrid,
                arrKeyboard,
                keyboardColor,
                storageKeyboard,
                getText,
                enterAction,
                RemoveText,
                modalVisible
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
