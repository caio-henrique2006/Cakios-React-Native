import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Counter() {

  return(
    <View style={style.view}>
      <View style={style.viewTop}>
        <View style={style.view1}><Text>1</Text></View>
        <View style={style.view2}><Text>2</Text></View>
        <View style={style.view3}><Text>3</Text></View>
      </View>
      <View style={style.viewMid}>
        <View style={style.view4}><Text>4</Text></View>
        <View style={style.view5}><Text>5</Text></View>
      </View>
      <View style={style.viewBottom}>
        <View style={style.view6}><Text>6</Text></View>
        <View style={style.view7}><Text>7</Text></View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    width: 200,
    height: 400,
    flex: 1,
    flexDirection: 'collumn', // 'collumn'
    backgroundColor: 'gray',
    alignItems: 'stretch',
    justifyContent: 'flexStart'
  },
  viewTop: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    height: 30,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    flex: 2,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    flex: 3,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewMid: {
    height: 60,
    flexDirection: 'collumn',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view5: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
