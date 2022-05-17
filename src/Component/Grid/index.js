import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,StatusBar,Modal } from 'react-native';


import { AuthContext } from '../../Context/Context'
import Content from '../Content';
import Default from '../Default'
import Midle from '../Midle'
export default function Grid() {
  const {textKeyboard,arrPalavra,corGrid,modalVisible} = useContext(AuthContext);
var myloop = [];

if(!arrPalavra[0]){
  myloop.push(
    <View>
      <Midle key={0} param={textKeyboard}></Midle>
      <Default key={1} ></Default>
      <Default key={2} ></Default>
      <Default key={3} ></Default>
      <Default key={4} ></Default>
      <Default key={5} ></Default>
    </View>
  )
}else{
  myloop = []
for (let i = 0; i < 6; i++) {
  if(arrPalavra[i]){
    myloop.push(
      <Content key={i} param={arrPalavra[i]} color={corGrid[i]}></Content>
    );
  }else{
    if(arrPalavra[i - 1]){
      myloop.push(
        <Midle key={i} param={textKeyboard}></Midle>
      )
    }else{
      myloop.push(
        <Default key={i} ></Default>
      )
    }
  }

}
}

  return (
    <View style={styles.container}>
      {myloop}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.containerModal}>
          <Text style={styles.TextContainerModal}>You win!</Text>
          <Text style={styles.TextContainerModal}>Do you want play more one game?</Text>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.Button}><Text style={styles.TextButton}>Yes</Text></TouchableOpacity>
            <TouchableOpacity style={styles.Button}><Text style={styles.TextButton}>No</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>

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
  },
  containerModal:{
    width:'80%',
    height:'30%',
    backgroundColor:'white',
    alignSelf:'center',
    position:'relative',
    top:'20%',
    borderRadius:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButton:{
    width:250,
    height:60,
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop:20,
  },
  Button:{
    width:'45%',
    height:60,
    backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
  },
  TextButton:{
    color:'white',
    fontSize:17
  },
  TextContainerModal:{
    fontSize:17
  }
});
