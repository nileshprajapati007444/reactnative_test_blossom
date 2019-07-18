/*
    Screen Description: This screen is used to display list of notifications. It if black screen for now for demo purpose.
*/

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation';
import styles from './NotificationListStyle';
import { Container, Header, Title, Icon, Content } from 'native-base';

export default class Message extends Component {
    constructor(props) {
        super(props);
    }
    
    /* To open navigation menu */
    openNavigationMenu() {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    }

    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <View style={styles.headerSec}>
                        <TouchableOpacity onPress={() => this.openNavigationMenu()}>
                            <Icon name='ios-menu' style={styles.icoMenu} />
                        </TouchableOpacity>
                        <Title style={styles.heading}> Notification </Title>
                    </View>
                </Header>
                <Content style={styles.maincontent}>
                    <View style={styles.contentArea}>
                        <Text style={styles.contentText}>Notification List</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}