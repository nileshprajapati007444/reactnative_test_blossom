/*
  Component Description: This component is used to display Activity Loader.
*/
import React, { Component } from 'react';
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native';

export default class Loader extends Component {
  render() {
    return (
      <View style={styles.container}>
          <ActivityIndicator size='large' color="rgba(74, 144, 226, 1)" />        
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5dfd9e0',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center'
  },
   
});