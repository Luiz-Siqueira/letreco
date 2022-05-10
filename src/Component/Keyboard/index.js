import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { AuthContext } from "../../Context/Context";
import Caractere from "./Caractere";
export default function Keyboard() {
  const { arrKeyboard,storageKeyboard, enterAction, RemoveText } = useContext(AuthContext);

  var myloop = [];

  for (let i = 0; i < arrKeyboard.teste.length; i++) {
    if(i == 25){
    myloop.push(<TouchableOpacity  key={i} onPress={() => enterAction()} style={styles.keyboard2}>
    <Text style={styles.TextKeyboard}>{arrKeyboard.teste[i].caracter}</Text>
  </TouchableOpacity>);
    }else if(i == 27){
      myloop.push(<TouchableOpacity key={i} onPress={() => RemoveText()} style={styles.keyboard2}>
      <Text style={styles.TextKeyboard}>{arrKeyboard.teste[i].caracter}</Text>
    </TouchableOpacity>);
    }else
    myloop.push(<Caractere key={i} param={arrKeyboard.teste[i].caracter} color={arrKeyboard.teste[i].color} ></Caractere>);
  }

  return (
    <View style={styles.container}>
      {myloop}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  keyboard: {
    backgroundColor: "black",
    width: "20%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  TextKeyboard: {
    color: "white",
  },
  keyboard2: {
    backgroundColor: "black",
    width: "40%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
