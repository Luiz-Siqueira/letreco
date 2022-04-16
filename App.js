import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';

import Keyboard from './src/Component/Keyboard';
import AuthProvider from './src/Context/Context';
import Grid from './src/Component/Grid';

export default function App() {

  return (
    <View style={styles.container}>
      <AuthProvider>
      <View style={styles.containerTexto}>
        <Grid></Grid>
      </View>
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
    padding:20
  },
  containerTexto:{
    marginTop:300
  }
});
