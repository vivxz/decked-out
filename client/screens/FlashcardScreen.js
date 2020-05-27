import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';

export default function FlashcardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Swiper
        animatedCardOpacity
        cards={['I', 'LIKE', 'CEREAL', 'YESSSSA']}
        renderCard={(card) => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
            </View>
          )
        }}
        onSwiped = {(cardIndex) => {console.log(cardIndex)}}
        onSwipedAll = {() => {console.log('ON SWIPED ALL')}}
        cardIndex = {0}
        stackSize = {1}
        verticalSwipe={false}
        infinite
        showSecondCard
        goBackToPreviousCardOnSwipeLeft
        >
      </Swiper>
    </ScrollView>
  );
}

FlashcardScreen.navigationOptions = {
  // title: 'Flashcards',
  header: null
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    // flex: 1,
    height: 650,
    marginTop: 10,
    marginBottom: 25,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  }
});
