import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar } from 'react-native';


import { AuthContext } from '../../Context/Context'
import Caractere from './Caractere'
export default function Keyboard() {



  const {getText,enterAction,RemoveText} = useContext(AuthContext);



  return (
    <View style={styles.container}>
      <Caractere param={'A'}></Caractere>
      <Caractere param={'B'}></Caractere>
      <Caractere param={'C'}></Caractere>
      <Caractere param={'D'}></Caractere>
      <Caractere param={'E'}></Caractere>
      <Caractere param={'F'}></Caractere>
      <Caractere param={'G'}></Caractere>
      <Caractere param={'H'}></Caractere>
      <Caractere param={'I'}></Caractere>
      <Caractere param={'J'}></Caractere>
      <Caractere param={'K'}></Caractere>
      <Caractere param={'L'}></Caractere>
      <Caractere param={'M'}></Caractere>
      <Caractere param={'N'}></Caractere>
      <Caractere param={'O'}></Caractere>
      <Caractere param={'P'}></Caractere>
      <Caractere param={'Q'}></Caractere>
      <Caractere param={'R'}></Caractere>
      <Caractere param={'S'}></Caractere>
      <Caractere param={'T'}></Caractere>
      <Caractere param={'U'}></Caractere>
      <Caractere param={'V'}></Caractere>
      <Caractere param={'W'}></Caractere>
      <Caractere param={'X'}></Caractere>
      <Caractere param={'Y'}></Caractere>
      <TouchableOpacity onPress={()=>enterAction()} style={styles.keyboard2}><Text style={styles.TextKeyboard}>Enter</Text></TouchableOpacity>      
      <Caractere param={'Z'}></Caractere>
      <TouchableOpacity onPress={()=>RemoveText()} style={styles.keyboard2}><Text style={styles.TextKeyboard}>Remove</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flexDirection:'row',
    flexWrap: 'wrap',
  },
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
  keyboard2:{
    backgroundColor:'black',
    width:'40%',
    height:40,
    justifyContent:'center',
    alignItems:'center'
  }
});
