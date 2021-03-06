import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';

import Keyboard from './src/Component/Keyboard';
import AuthProvider from './src/Context/Context';
import Grid from './src/Component/Grid';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}><Text style={styles.containerText}>Letreco</Text></View>
      <AuthProvider>
      <View style={styles.containerTexto}>
        <Grid></Grid>

      </View>
      <View style={styles.containerKeyboard}></View>
      <Keyboard></Keyboard>
      <StatusBar backgroundColor="#131313" barStyle="light-content" />
      </AuthProvider>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#121213',
  },
  containerTexto:{
    padding:20,

  },
  containerKeyboard: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#121213',
    marginTop:-100
  },
  containerTitle:{
    width:'50%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
  },
  containerText:{
    color:'white',
    fontSize:40,
    textTransform:'uppercase'
  }
});
