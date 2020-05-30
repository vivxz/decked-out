import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Alert } from 'react-native';
import { db } from '../config';
import { TextInput } from 'react-native-gesture-handler';
import CardComponent from '../components/CardComponent';

export default function FolderScreen(props) {

  let key = props.navigation.state.params.id
  let addCard = (question, answer) => {
    db.ref(`/folders/${key}/cards`).push({
      question: question,
      answer: answer
    })
  }; 

  let getCards = db.ref(`/folders/${key}/cards`);

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('')
  const [cards, setCards] = useState([]);

  handleQuestionChange = event => {
    setQuestion(event.nativeEvent.text);
  }

  handleAnswerChange = event => {
    setAnswer(event.nativeEvent.text);
  }

  handleSubmit = () => {
    addCard(question, answer);
    Alert.alert('Item added successfully')
  }

  useEffect(() => {
    getCards.on('value', snapshot => {
      let data = snapshot.val();
      if (data){
        let items = Object.values(data);
        setCards(items);
      }
    })
  },[cards])

  return (
    <View>
      <Text>FOLDER SCREEN</Text>
      <Text>{props.navigation.state.params.name}</Text>
      <TextInput placeholder="Question" onChange={handleQuestionChange}></TextInput>
      <TextInput placeholder="Answer" onChange={handleAnswerChange}></TextInput>
      <TouchableHighlight 
          underlayColor="white"
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>

        { cards.length > null ?
        <CardComponent cards={cards}/>
          : <Text>No cards</Text>
        }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
