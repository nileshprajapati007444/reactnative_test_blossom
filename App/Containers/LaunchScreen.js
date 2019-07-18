/*
  Screen Description: This screen is the initial screen of the app. 
*/

import React, { Component } from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {   
    };  
  } 
  
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.imgHome} source={Images.homeImage} />
          <View style={styles.secExlore}>
            <TouchableOpacity style={styles.btnExlore} onPress={() => this.props.navigation.navigate('AppDrawerNavigator')} >
              <Text style={styles.text}> Explore Blossom </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
