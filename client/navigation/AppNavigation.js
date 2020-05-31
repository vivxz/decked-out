import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from '../screens/HomeScreen';
import Folder from '../screens/FolderScreen';
import Quiz from '../screens/QuizScreen';
import Flashcard from '../screens/FlashcardScreen';
import Settings from '../screens/SettingsScreen';
import Auth from '../screens/AuthScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Auth: {
    screen: Auth
  },
  Flashcard: {
    screen: Flashcard
  },
  Folder: {
    screen: Folder
  },
  Quiz: {
    screen: Quiz
  },
  Setting: {
    screen: Settings
  }
  });

  export default HomeStack;