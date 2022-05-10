import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar } from 'react-native';


import { AuthContext } from '../../Context/Context'
export default function Caractere({param,color}) {




  const {getText,keyboardColor} = useContext(AuthContext);

  
  keyboardColor.forEach((element,index) => {
    if(element.caracter == param){
      color = element.color
    }
});

  return (
      <TouchableOpacity onPress={()=>getText(param)} style={[styles.keyboard,{backgroundColor:color}]}><Text style={styles.TextKeyboard}>{param}</Text></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  keyboard:{
    width:'20%',
    height:40,
    justifyContent:'center',
    alignItems:'center'
  },
  TextKeyboard:{
    color:'white'
  },

});
