import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeStack from './AppNavigation';
import TabBarIcon from '../components/TabBarIcon';
import Quiz from '../screens/QuizScreen';
import Flashcard from '../screens/FlashcardScreen';
import Settings from '../screens/SettingsScreen';

const TabStack = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `ios-home`
              : 'md-home'
          }
        />
      ),
    }
  },
  FlashCard: {
    screen: Flashcard,
    navigationOptions: {
      tabBarLabel: 'Flashcards',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-albums' : 'md-albums'} />
      ),
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      tabBarLabel: 'Quiz',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-help-circle-outline' : 'md-help-circle-outline'} />
      ),
    }
  },
  Setting: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
      ),
    } 
  }
},{
  initialRouteName: "Home"
});

const AppContainter = createAppContainer(TabStack);

export default AppContainter