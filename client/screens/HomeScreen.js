import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import { db } from '../config';
import FolderComponent from '../components/FolderComponent';
import Auth from './AuthScreen';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

let addFolder = folder => {
  db.ref('/folders').push({
    name: folder
  })
};

let itemsRef = db.ref(`/users/{user_id}/folders`)
// let itemsRef = db.ref(`/folders`);

export default function HomeScreen ({navigation}) {
  const [folder, setFolder] = useState('');
  const [allFolders, setAllFolders] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  handleFolderChange = event => {
    setFolder(event.nativeEvent.text)
  }

  handleSubmit = () => {
    addFolder(folder);
    Alert.alert('Item added successfully')
  }

  useEffect(() => {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      let key = Object.keys(data)
      var cardFolders = items.map((folder, index) => {
        folder['id'] = key[index];
        return folder
      })
      setAllFolders(cardFolders);
    })
  },[folder]);
  
  // console.log(itemsRef)

  return (
    <View style={styles.container}>
      {loggedIn ? 
      <ScrollView>
        <Text style={styles.title}>Add folder</Text>
        <TextInput style={styles.folderInput} onChange={handleFolderChange} />
        <TouchableHighlight 
          underlayColor="white"
          onPress={handleSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>

        <View style={styles.hr}></View>

        {allFolders.length > 0 ? (
          <FolderComponent folders={allFolders} navigation={navigation}/>
          ) : (
            <Text>No folders</Text>
          )}

      </ScrollView>
      : <Auth loggedIn={loggedIn} setLoggedIn={setLoggedIn} navigation={navigation}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 20,
    marginTop: 40,
    fontSize: 25,
    textAlign: 'center'
  },
  folderInput: {
    height: 60,
    padding: 4,
    margin: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});
