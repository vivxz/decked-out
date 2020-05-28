import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';

let addCard = (question, answer) => {
  db.ref(`/folders/${id}/cards`).push({
    question: question,
    answer: answer
  })
};

export default function FolderScreen(props) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('')

  const cards = props.navigation.state.params.card || {}; // Object 

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

  var arr = [];
  for(var card in cards) {
    arr.push(cards[card])
  }

  console.log(props.navigation.state.params)

  return (
    <View>
      <Text>FOLDER SCREEN</Text>
      <Text>{props.navigation.state.params.name}</Text>
        {/* {cards !== undefined ? (
          <View>
            <Text>Question: {cards.q1.question}</Text>
            <Text>Answer: {cards.q1.answer}</Text>
          </View>
          ) : (
            <Text>No cards</Text>
          )} */}
        {
          arr.map((q, i) => {
            return (
              <View key={i}>
                <Text>Question: {q.question}</Text>
                <Text>Answer: {q.answer}</Text>
              </View>
            )
          })
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
