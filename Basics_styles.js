import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Counter() {

  return(
    <View style={style.view}>
      <Text style={{
      color: 'white',
      fontSize: 15}}>
        Hello World !!!
      </Text>
      <Text style={Texts}> Another Hello World !!!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 15
  }
});

const styleText = StyleSheet.create({
   text: {
    backgroundColor: 'blue',
  }
})

// Usando compose para juntar dois StyleSheets diferentes:
const Texts = StyleSheet.compose(style.text, styleText.text);

/*
// Style inline:

<Text style={{
  color: 'white',
  fontSize: 15}}> Hello World !!! </Text>
*/