import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Alert } from 'react-native';
import { db } from '../config';
import { TextInput } from 'react-native-gesture-handler';

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
