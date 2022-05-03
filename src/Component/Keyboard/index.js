import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar } from 'react-native';


import { AuthContext } from '../../Context/Context'
export default function Keyboard() {



  const {getText} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>getText('A')}style={styles.keyboard}><Text style={styles.TextKeyboard}>A</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('B')} style={styles.keyboard}><Text style={styles.TextKeyboard}>B</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('C')} style={styles.keyboard}><Text style={styles.TextKeyboard}>C</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('D')} style={styles.keyboard}><Text style={styles.TextKeyboard}>D</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('E')} style={styles.keyboard}><Text style={styles.TextKeyboard}>E</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('F')} style={styles.keyboard}><Text style={styles.TextKeyboard}>F</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('G')} style={styles.keyboard}><Text style={styles.TextKeyboard}>G</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('H')} style={styles.keyboard}><Text style={styles.TextKeyboard}>H</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('I')} style={styles.keyboard}><Text style={styles.TextKeyboard}>I</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('J')} style={styles.keyboard}><Text style={styles.TextKeyboard}>J</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('K')} style={styles.keyboard}><Text style={styles.TextKeyboard}>K</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('L')} style={styles.keyboard}><Text style={styles.TextKeyboard}>L</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('M')} style={styles.keyboard}><Text style={styles.TextKeyboard}>M</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('N')} style={styles.keyboard}><Text style={styles.TextKeyboard}>N</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('O')} style={styles.keyboard}><Text style={styles.TextKeyboard}>O</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('P')} style={styles.keyboard}><Text style={styles.TextKeyboard}>P</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('Q')} style={styles.keyboard}><Text style={styles.TextKeyboard}>Q</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('R')} style={styles.keyboard}><Text style={styles.TextKeyboard}>R</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('S')} style={styles.keyboard}><Text style={styles.TextKeyboard}>S</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('T')} style={styles.keyboard}><Text style={styles.TextKeyboard}>T</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('U')} style={styles.keyboard}><Text style={styles.TextKeyboard}>U</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('V')} style={styles.keyboard}><Text style={styles.TextKeyboard}>V</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('W')} style={styles.keyboard}><Text style={styles.TextKeyboard}>W</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('X')} style={styles.keyboard}><Text style={styles.TextKeyboard}>X</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('Y')} style={styles.keyboard}><Text style={styles.TextKeyboard}>Y</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('Enter')} style={styles.keyboard2}><Text style={styles.TextKeyboard}>Enter</Text></TouchableOpacity>      
      <TouchableOpacity onPress={()=>getText('Z')} style={styles.keyboard}><Text style={styles.TextKeyboard}>Z</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>getText('Remove')} style={styles.keyboard2}><Text style={styles.TextKeyboard}>Remove</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flexDirection:'row',
    flexWrap: 'wrap',
    backgroundColor:'red',
    
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
