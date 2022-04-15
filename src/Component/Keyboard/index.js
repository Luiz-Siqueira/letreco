
import { StyleSheet, Text, View,TouchableOpacity,StatusBar } from 'react-native';

export default function Keyboard() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>A</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>B</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>C</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>D</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>E</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>F</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>G</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>H</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>I</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>J</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>K</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>L</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>M</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>N</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>O</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>P</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>Q</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>R</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>S</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>T</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>U</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>V</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>W</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>X</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>Y</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard2}><Text style={styles.TextKeyboard}>Enter</Text></TouchableOpacity>      
      <TouchableOpacity style={styles.keyboard}><Text style={styles.TextKeyboard}>Z</Text></TouchableOpacity>
      <TouchableOpacity style={styles.keyboard2}><Text style={styles.TextKeyboard}>Remove</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
