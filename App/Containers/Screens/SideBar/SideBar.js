/*
    Screen Description: This screen is used to display left side bar navigation menu.
*/

import React, { Component } from "react";
import { Image, View, TouchableOpacity, Alert, Text } from "react-native";
import { Container, Content } from 'native-base';
import { Icon } from 'native-base';
import { DrawerActions } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { Images } from '../../../Themes';

// Styles
import styles from './SideBarStyle'

export default class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // state variables here
    }
  }

  /* Confirmation of Logout button click */
  redirectToHome() {
    var that = this;
    Alert.alert(
      'Confirmation',
      'Are you sure want to logout?',
      [
        { text: 'No', onPress: () => that.exitApp('cancel'), style: 'cancel' },
        { text: 'Yes', onPress: () => that.exitApp('ok') },
      ],
      { cancelable: false }
    )
  }

  /* Logout and redirect to home screen */
  exitApp(myaction) {
    if (myaction == 'ok') {
      this.props.navigation.navigate('LaunchScreen');
    }
  }

  /* navigate to selected screen */
  navigateToSelectedScreen(screenName) {
    this.props.navigation.navigate(screenName);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  }

  render() {

    return (
      <Container style={[{ backgroundColor: '#e8e6e8' }]}>
        <Content style={styles.content} showsVerticalScrollIndicator={false}>

          <View>
            <TouchableOpacity style={{ paddingLeft: 10, paddingTop: 10 }} onPress={() => this.props.navigation.dispatch(DrawerActions.closeDrawer())} >
              <Icon style={styles.backButton} active name='md-arrow-back' />
            </TouchableOpacity>
          </View>

          <View>
            <Image style={styles.userImage} source={Images.userprofileImage} />
            <Text style={styles.userName}> Kika </Text>
            <Text style={styles.userEmail}> k@blossomeducational.com </Text>
          </View>


          <View style={styles.borderbottom}></View>

          <View style={styles.list}>

            <TouchableOpacity onPress={() => this.navigateToSelectedScreen('PostList')} >
              <View style={styles.menuSec}>
                <Icon active name='ios-home' style={styles.drawerIcon} />
                <Text style={[styles.menuTitle]}>Posts</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.navigateToSelectedScreen('Profile')} >
              <View style={styles.menuSec}>
                <FontAwesome active name='user' style={styles.drawerIcon} />
                <Text style={[styles.menuTitle]}>My Profile</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.navigateToSelectedScreen('NotificationList')} >
              <View style={styles.menuSec}>
                <Icon active name='ios-notifications' style={styles.drawerIcon} />
                <Text style={[styles.menuTitle]}>Notifications</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.navigateToSelectedScreen('Message')} >
              <View style={styles.menuSec}>
                <Entypo active name='message' style={styles.drawerIcon} />
                <Text style={[styles.menuTitle]}>Messages</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.navigateToSelectedScreen('Setting')} >
              <View style={styles.menuSec}>
                <Feather active name='settings' style={styles.drawerIcon} />
                <Text style={[styles.menuTitle]}>Setting</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.bordertop}></View>

            <TouchableOpacity onPress={() => this.redirectToHome()} >
              <View style={styles.menuSec}>
                <Icon active name='ios-exit' style={styles.drawerIcon} />
                <Text style={[styles.menuTitle]}>Logout</Text>
              </View>
            </TouchableOpacity>

          </View>

        </Content>
      </Container>
    );
  }
}
