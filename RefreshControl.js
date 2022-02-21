import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, RefreshControl } from 'react-native';

export default function Counter() {

  const [Items, setItem] = useState([
    {key: 1, item: 'Animes'},
    {key: 2, item: 'Netflix series'},
    {key: 3, item: 'Games'},
    {key: 4, item: 'Filmes'},
    {key: 5, item: 'Livros'},
    {key: 6, item: 'Animes'},
    {key: 7, item: 'Netflix series'},
    {key: 8, item: 'Games'},
    {key: 9, item: 'Filmes'},
    {key: 10, item: 'Livros'},
    {key: 11, item: 'Animes'},
    {key: 12, item: 'Netflix series'},
    {key: 13, item: 'Games'},
    {key: 14, item: 'Filmes'},
    {key: 15, item: 'Livros'},
  ])

  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = ()=>{
    setRefreshing(true);
    setItem([...Items, {key: 16, item: 'New one'}]);
    setRefreshing(false);
  }

  return(
    <View style={style.view}>
    <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={ Refreshing }
            onRefresh={ onRefresh }
          />
        }
      >
      <View style={style.viewRoof}>
        <View style={style.lista}><Text style={style.text}>Listas</Text></View>
        <View style={style.terminado}><Text style={style.text}>Terminado</Text></View>
      </View>
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
    marginTop: 20,
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