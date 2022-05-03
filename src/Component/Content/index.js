import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar } from 'react-native';


import { AuthContext } from '../../Context/Context'

export default function Content({param}) {

  //fazer um component para palavra pronta, para palavra escrevendo e para defalt
  const {textKeyboard} = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.containerBox}><Text style={styles.containerBoxText}>{param[0]}</Text></View>
          <View style={styles.containerBox}><Text style={styles.containerBoxText}>{param[1]}</Text></View>
          <View style={styles.containerBox}><Text style={styles.containerBoxText}>{param[2]}</Text></View>
          <View style={styles.containerBox}><Text style={styles.containerBoxText}>{param[3]}</Text></View>
          <View style={styles.containerBox}><Text style={styles.containerBoxText}>{param[4]}</Text></View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    flexWrap: 'wrap',
    marginBottom:20,
  },
  container2:{
    width:'100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection:'row',
    alignContent:'space-between'
  },
  containerBox:{
   width:'17%',
   height:60,
   borderWidth:1,
   borderColor:'#3a3a3c',
   backgroundColor:'#787d7d',
   alignItems: 'center',
   justifyContent: 'center',
  },
  containerBoxText:{
    color:'white'
  }
});
