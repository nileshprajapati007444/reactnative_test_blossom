/*
    Screen Description: This screen is used to display Profile details of user.
*/
import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import styles from './ProfileStyle';
import { Container, Icon, Content } from 'native-base';
import { Images } from '../../../Themes';

export default class Profile extends Component {

    constructor(props) {
        super(props);
        // State variables here
        this.state = {
        };
    }

    openNavigationMenu() {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    }

    render() {

        return (
            <Container>
                <Content style={styles.content}>
                    <View>
                        <TouchableOpacity style={styles.btnBack} onPress={() => this.openNavigationMenu()}>
                            <Icon name='ios-menu' style={styles.drawerIcon} />
                        </TouchableOpacity>
                        <Image
                            resizeMode="stretch"
                            source={Images.profileBannerImage}
                            style={styles.profileBanner} />
                    </View>

                    <View style={styles.userDetail}>
                        <View>
                            <Image resizeMode="contain" source={Images.userprofileImage} style={styles.profileImage} />
                        </View>
                        <Text style={styles.profileName}> Jeffery H </Text>
                    </View>

                    <View style={styles.borderBottom}></View>

                    <View style={styles.userDesc}>
                        <Text> I became a vegan in my early twenties, and was immediately astonished by how great I felt-and how rewarding I found my new vegan lifestyle to be. </Text>
                    </View>

                    <View>
                        <View style={styles.buttonsSec}>
                            <TouchableOpacity style={styles.btnFollow}>
                                <Text style={styles.followText}>Follow</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnMessage}>
                                <Text style={styles.MessageText}>Message</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </Content >

            </Container >

        );
    }
}