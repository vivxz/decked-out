import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import FolderScreen from '../screens/FolderScreen';
import QuizScreen from '../screens/QuizScreen';
import FlashcardScreen from '../screens/FlashcardScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Flashcard: {
    screen: FlashcardScreen
  },
  Folder: {
    screen: FolderScreen
  },
  Quiz: {
    screen: QuizScreen
  },
  Setting: {
    screen: SettingsScreen
  }
  });

  export default HomeStack;