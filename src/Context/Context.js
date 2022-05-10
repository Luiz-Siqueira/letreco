import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [textKeyboard, setTextKeyboard] = useState();
    const [arrPalavra, setArrPalavra] = useState([]);
    const [corGrid, setcorGrid] = useState([]);
    const [storageKeyboard, setStorageKeyboard] = useState([]);
    const [keyboardColor, setKeyboardColor] = useState([]);


    const arrKeyboard = {
        teste: [
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
        // getAsync()
        CheckText();

        if (textKeyboard.length == 5) {
            setArrPalavra((oldArray) => [...oldArray, textKeyboard]);
            setTextKeyboard("");
        }
    }

    function CheckText() {
        let palavra = ["A", "V", "I", "A", "O"];
        let palavraUser = textKeyboard.split("");
        let color = [];
        for (let index = 0; index < palavra.length; index++) {
            if (palavra.indexOf(palavraUser[index]) != -1) {
                if (palavraUser[index] == palavra[index]) {
                    let count = 0;
                    let indiceCor = 0;
                    palavra.forEach((letra) => {
                        if (letra === palavraUser[index]) count++;
                    });
                    if (count > 1) {
                        palavraUser.forEach((letra, indice) => {
                            if (letra === palavraUser[index]) {
                                if (color[indice] == "orange") {
                                    color[indice] = "gray";
                                }
                            }
                        });
                    }

                    arrKeyboard.teste.forEach((letra, indice) => {
                        if (palavraUser[index] == letra.caracter) {
                            arrKeyboard.teste[indice].color = "green";
                            setKeyboardColor((oldArray) => [
                                ...oldArray,
                                arrKeyboard.teste[indice],
                            ]);
                        }
                    });
                    color.push("green");
                } else {
                    let count = 0;
                    let indiceCor = 0;
                    palavra.forEach((letra) => {
                        if (letra === palavraUser[index]) count++;
                    });
                    if (count > 1) {
                        palavraUser.forEach((letra, indice) => {
                            if (letra === palavraUser[index]) {
                                if (color[indice] == "green" || color[indice] == "orange") {
                                    indiceCor++;
                                }
                            }
                        });
                    }

                    if (indiceCor < count) {
                        arrKeyboard.teste.forEach((letra, indice) => {
                            if (palavraUser[index] == letra.caracter) {
                                arrKeyboard.teste[indice].color = "orange";
                                setKeyboardColor((oldArray) => [
                                    ...oldArray,
                                    arrKeyboard.teste[indice],
                                ]);
                            }
                        });
                        color.push("orange");
                    } else {
                        arrKeyboard.teste.forEach((letra, indice) => {
                            if (palavraUser[index] == letra.caracter) {
                                arrKeyboard.teste[indice].color = "gray";
                                setKeyboardColor((oldArray) => [
                                    ...oldArray,
                                    arrKeyboard.teste[indice],
                                ]);
                            }
                        });
                        color.push("gray");
                    }
                }
            } else {
                arrKeyboard.teste.forEach((letra, indice) => {
                    if (palavraUser[index] == letra.caracter) {
                        arrKeyboard.teste[indice].color = "gray";
                        setKeyboardColor((oldArray) => [
                            ...oldArray,
                            arrKeyboard.teste[indice],
                        ]);
                    }
                });
                color.push("gray");
            }
        }
        setcorGrid((oldArray) => [...oldArray, color]);
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
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
