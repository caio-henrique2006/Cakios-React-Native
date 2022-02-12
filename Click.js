import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Counter() {

  const [counterClick, setCounterClick] = useState(0);
  const [counterTimesFive, setCounterTimesFive] = useState(0);

  const ButtonClicks = ()=>{
    return(
      setCounterClick(counterClick + 1),
      setCounterTimesFive(counterTimesFive + 5)
    );
  } 

  return(
    <View style={style.view}>
      <Text style={style.text}>{counterTimesFive}</Text>
      <Button title='Adicionar' style={style.button} onPress={ButtonClicks}></Button>
      <Text style={style.text}>Você clicou {counterClick} no botão adicionar</Text>
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

  button: {

  },

  text: {
    color: 'white',
    fontSize: 15
  }

});

