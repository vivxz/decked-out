import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardComponent(props) {
  return (
    <View>
      {props.cards.map((card, index) => {
        return (
          <View key={index}>
              <Text>Question: {card.question}</Text>
              <Text>Answer: {card.answer}</Text>
            </View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 45,
    marginRight: 15,
    marginLeft: 15
  },
  itemtext: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

