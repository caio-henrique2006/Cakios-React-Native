import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

export default function Counter() {

  const [Items, setItem] = useState([
    {key: 1, item: 'Animes'},
    {key: 2, item: 'Netflix series'},
    {key: 3, item: 'Games'},
    {key: 4, item: 'Filmes'},
    {key: 5, item: 'Livros'},
  ])

  return(
    <View style={style.view}>
      <View style={style.viewRoof}>
        <View style={style.lista}><Text style={style.text}>Listas</Text></View>
        <View style={style.terminado}><Text style={style.text}>Terminado</Text></View>
      </View>
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
    backgroundColor: '#C4e9ea',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  viewRoof: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
  lista: {
    flex: 1,
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  terminado: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: '#1fdde2',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

