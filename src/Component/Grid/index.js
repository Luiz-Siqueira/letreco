import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar } from 'react-native';


import { AuthContext } from '../../Context/Context'

export default function Grid() {

  const {textKeyboard} = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <Text>{textKeyboard}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    flexWrap: 'wrap'
  },
  keyboard:{
    backgroundColor:'black',
    width:'20%',
    height:'5%',
    justifyContent:'center',
    alignItems:'center'
  },
  TextKeyboard:{
    color:'white'
  },
  keyboard2:{
    backgroundColor:'black',
    width:'40%',
    height:'5%',
    justifyContent:'center',
    alignItems:'center'
  }
});
