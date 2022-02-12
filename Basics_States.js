import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button } from 'react-native';

/*Testing nice features*/

export default function App() {
  // Declarando um state: /* dentro de useState é possível contruir listas, dicionários e outros, como em React*/
  const [name, setName] = useState('Caio Henrique');
  const [question, setQuestion] = useState({firstQuestion: "How are you?", secondQuestion: "How dare you?"});
  const [areAngry, setAngrines] = useState(true);

  // Uma função que modifica o state:
  const UpdateState = ()=>{
    return(
      // Setando um novo state, com o segundo parâmetro de state;
      setName("Kátia Almeida Ferreira"),
      setQuestion({firstQuestion: "I'm good", secondQuestion: "I dare what i want !!!"}),
      setAngrines(false)
    )
  }

  return (
    // View é como um div em React Native:
    <View style={style.conteudo}>
      <Text style={style.text}> Hello World {name} !!!</Text>
      <Text style={style.text}> {question.firstQuestion}</Text>
      <Text style={style.text}> {question.secondQuestion}</Text>
      <Text style={style.text}> Now i'm {areAngry ? "angry" : "not angry"}</Text>
      <Button title='Update State' onPress={UpdateState}></Button>
    </View>
  );
}
// Estilizando a página
const style = StyleSheet.create({

  conteudo: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Divisão de estilos:
  text: {
    color: '#eee',
    fontSize: 20,
    fontStyle: 'italic'
  },
});