import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';
// import { ScreenOrientation } from 'expo';

export default function FlashcardScreen() {
  // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
  //   .then(() => {
  //     ScreenOrientation.unlockAsync()
  //   })
  return (
    <ScrollView style={styles.container}>
      <Swiper
        animatedCardOpacity
        cards={['I', 'LIKE', 'CEREAL']}
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
  title: 'Flashcards',
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    // flex: 1,
    height: "80%",
    marginTop: -25,
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
