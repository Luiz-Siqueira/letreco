import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar } from 'react-native';


import { AuthContext } from '../../Context/Context'
export default function Caractere({param}) {



  const {getText} = useContext(AuthContext);

  return (
      <TouchableOpacity onPress={()=>getText(param)} style={styles.keyboard}><Text style={styles.TextKeyboard}>{param}</Text></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  keyboard:{
    backgroundColor:'black',
    width:'20%',
    height:40,
    justifyContent:'center',
    alignItems:'center'
  },
  TextKeyboard:{
    color:'white'
  },

});
