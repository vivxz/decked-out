import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FolderScreen from '../screens/FolderScreen';
import QuizScreen from '../screens/QuizScreen';
import FlashcardScreen from '../screens/FlashcardScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
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
  },{
    initialRouteName: "Home"
  })

  const AppContainter = createAppContainer(AppNavigator);
  
  export default AppContainter;

// const HomeStack = createStackNavigator({
//     Home: HomeScreen,
//     Folder: FolderScreen,
//   });

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-home`
//           : 'md-home'
//       }
//     />
//   ),
// };

// const FlashcardStack = createStackNavigator({
//     Flashcards: FlashcardScreen,
//   });

// FlashcardStack.navigationOptions = {
//   tabBarLabel: 'Flashcards',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-albums' : 'md-albums'} />
//   ),
// };

// const QuizStack = createStackNavigator({
//     Quiz: QuizScreen,
//   });

// QuizStack.navigationOptions = {
//   tabBarLabel: 'Quiz',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-help-circle-outline' : 'md-help-circle-outline'} />
//   ),
// };

// const SettingsStack = createStackNavigator({
//     Settings: SettingsScreen,
//   });

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// const TabNavigator = createBottomTabNavigator({
//   HomeStack,
//   FlashcardStack,
//   QuizStack,
//   SettingsStack,
// });

// export default TabNavigator;