import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Easing, Animated } from "react-native";

import { AuthContext } from "../../Context/Context";

export default function Content({ param,color }) {
  //fazer um component para palavra pronta, para palavra escrevendo e para defalt
  const { textKeyboard } = useContext(AuthContext);

  const [flip, setFlip] = useState(new Animated.Value(0));

  Animated.sequence([
    Animated.timing(flip, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(),
  ]);

  const spin = flip.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Animated.View
          style={[
            styles.containerBox,
            {
              transform: [{ rotateY: spin }],
              backgroundColor:color[0]
            },
          ]}
        >
          <View style={{ transform: [{ rotateY: "-180deg" }] }}>
            <Text style={styles.containerBoxText}>{param[0]}</Text>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.containerBox,
            {
              transform: [{ rotateY: spin }],
              backgroundColor:color[1]
            },
          ]}
        >
          <View style={{ transform: [{ rotateY: "-180deg" }] }}>
            <Text style={styles.containerBoxText}>{param[1]}</Text>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.containerBox,
            {
              transform: [{ rotateY: spin }],
              backgroundColor:color[2]
            },
          ]}
        >
          <View style={{ transform: [{ rotateY: "-180deg" }] }}>
            <Text style={styles.containerBoxText}>{param[2]}</Text>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.containerBox,
            {
              transform: [{ rotateY: spin }],
              backgroundColor:color[3]
            },
          ]}
        >
          <View style={{ transform: [{ rotateY: "-180deg" }] }}>
            <Text style={styles.containerBoxText}>{param[3]}</Text>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.containerBox,
            {
              transform: [{ rotateY: spin }],
              backgroundColor:color[4]
            },
          ]}
        >
          <View style={{ transform: [{ rotateY: "-180deg" }] }}>
            <Text style={styles.containerBoxText}>{param[4]}</Text>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  container2: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "space-between",
  },
  containerBox: {
    width: "17%",
    height: 60,
    borderWidth: 1,
    borderColor: "#3a3a3c",
    backgroundColor: "#787d7d",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBoxText: {
    color: "white",
  },
});
