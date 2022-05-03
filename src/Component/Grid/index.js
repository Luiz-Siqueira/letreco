import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar } from 'react-native';


import { AuthContext } from '../../Context/Context'
import Content from '../Content';
import Default from '../Default'
import Midle from '../Midle'
export default function Grid() {

  //fazer um component para palavra pronta, para palavra escrevendo e para defalt
  const {textKeyboard} = useContext(AuthContext);

  return (
    <View style={styles.container}>
          <Content></Content>
          <Midle></Midle>
          <Default></Default>
          <Default></Default>
          <Default></Default>
          <Default></Default>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    flexWrap: 'wrap',
    marginBottom:30,
  },
  container2:{
    width:'100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection:'row',
    alignContent:'space-between'
  },
  containerBox:{
   width:'19%',
   height:60,
   borderWidth:1,
   borderColor:'#3a3a3c'
  }
});
