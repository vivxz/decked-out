import React, {useState} from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import { db } from '../config.js';
import firebase from 'firebase';

export default function AuthScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('') 
  const [signupPressed, setSignupPressed] = useState(false);

  const login = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => props.setLoggedIn(true))
    } catch (error) {
      console.log(error.toString());
    }
  };

  const signup = (email, password) => {
    try {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => props.setLoggedIn(true))
    } catch (error) {
        console.log(error.toString());
    }
  };

  return (
    <>
      { !signupPressed ?
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={email => setEmail(email)}
            placeholder='Email'
            autoCapitalize='none'
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={password => setPassword(password)}
            placeholder='Password'
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={() => {login(email, password)}}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Button 
            onPress={() => setSignupPressed(true)}
            title="Don't have an account yet? Sign up" 
          />
        </View>
      : 
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={email => setEmail(email)}
          placeholder='Email'
          autoCapitalize='none'
      />
        <TextInput
          style={styles.inputBox}
          value={password}
          onChangeText={password => setPassword(password)}
          placeholder='Password'
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => {signup(email, password)}}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Button 
            onPress={() => setSignupPressed(false)}
            title="Go back to log in" 
          />
      </View>
    }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  inputBox: {
      width: '85%',
      margin: 10,
      padding: 15,
      fontSize: 16,
      borderColor: '#d3d3d3',
      borderBottomWidth: 1,
      textAlign: 'center'
  },
  button: {
      marginTop: 30,
      marginBottom: 20,
      paddingVertical: 5,
      alignItems: 'center',
      backgroundColor: '#FFA611',
      borderColor: '#FFA611',
      borderWidth: 1,
      borderRadius: 5,
      width: 200
  },
  buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
  },
  buttonSignup: {
      fontSize: 12
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#F6820D',
    borderColor: '#F6820D',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  }
})