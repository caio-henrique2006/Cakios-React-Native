import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

export default function Counter() {

  const [Items, setItem] = useState([
    {key: 1, item: 'item 1'},
    {key: 2, item: 'item 2'},
    {key: 3, item: 'item 3'},
    {key: 4, item: 'item 4'},
    {key: 5, item: 'item 5'},
    {key: 6, item: 'item 6'},
    {key: 7, item: 'item 7'},
    {key: 8, item: 'item 8'},
    {key: 9, item: 'item 9'},
  ])

  return(
    <View style={style.view}>
    <ScrollView>
      {
        Items.map((object)=> {
          return(
            <View style={style.item} key={object.key}>
              <Text style={style.text}>{object.item}</Text>
            </View>
          )
        })
      }
    </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    fontSize: 100,
  },
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
