import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View,Animated,StatusBar,Easing } from 'react-native';


import { AuthContext } from '../../Context/Context'
import Content from '../Content';
import Default from '../Default'
import Midle from '../Midle'
export default function Grid() {
  const {textKeyboard,arrPalavra,corGrid} = useContext(AuthContext);

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

//fazer passar array com texto como parametro para component
  return (


    <View style={styles.container}>

      {myloop}

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
