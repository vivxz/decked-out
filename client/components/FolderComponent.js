import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FolderComponent(props) {
  return (
    <View style={styles.itemsList}>
      {props.folders.map((folder, index) => {
        return (
          <View key={index} index={index}>
            <Ionicons 
              size={40} 
              style={{ marginBottom: -3, textAlign:'center' }} 
              name={Platform.OS === 'ios' ? 'ios-folder-open' : 'md-folder-open'} 
              onPress={() => props.navigation.navigate('Folder', { 
                name: folder.name,
                card: folder.cards,
                keys: props.keys
              })}
              // onLongPress={() => console.log('HOLDING')} –––– on hold to remove folder
              />
            <Text style={styles.itemtext}>{folder.name}</Text>
          </View>
        );
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