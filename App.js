import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Keyboard from './src/Component/Keyboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to stasrt workingg on your app!</Text>
      <Keyboard></Keyboard>
      <StatusBar style="auto" />
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
});
