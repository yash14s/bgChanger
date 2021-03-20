/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, StatusBar} from 'react-native'; //import properties of react-native

const App = () => {
  //const randomColor = 'rgb(32,0,126)';
  // USING STATE
  const [randomColor, setRandomColor] = useState('rgb(32,0,126)');
  const changeBGColor = () => {
    let newColor = 'rgb(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ')';
    setRandomColor(newColor);
    //console.log(newColor);
  };

  const blackout = () => {
    setRandomColor('rgb(0,0,0)');
  };
  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBGColor}>
          <Text style={[styles.text1]}>Tap to change BG</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={blackout}>
          <Text style={styles.text2}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App; //export 'App' to index.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0,0,0)',
  },

  text1: {
    fontSize: 28,
    backgroundColor: 'rgb(65,105,225)',
    paddingHorizontal: 15,
    paddingVertical: 11,
    color: 'rgb(255,0,0)',
    borderRadius: 20,
    textTransform: 'uppercase',
  },

  text2: {
    fontSize: 28,
    marginTop: 30,
    backgroundColor: 'rgb(255,255,255)',
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: 'rgb(128,128,128)',
    borderRadius: 5,
    textTransform: 'uppercase',
  },
});
