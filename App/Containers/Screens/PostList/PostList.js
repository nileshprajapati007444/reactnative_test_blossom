/*
    Screen Description: This screen is used to display the list of posts from API.
*/

import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import styles from './PostListStyle';
import { Container, Header, Title, Icon, Content } from 'native-base';
import Loader from '../../../Components/Loader';
import Moment from 'moment';

export default class PostList extends Component {

    constructor(props) {
        super(props);
        this.redirectToDetailScreen = this.redirectToDetailScreen.bind(this);
        this.state = {
            isLoading: true,
            postData: []
        }
    }

    componentWillMount() {

        // Get the list of posts from API
        let API_URL = "https://api.reddit.com/r/pics/hot.json";
        return fetch(API_URL, { method: 'GET' })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("responseJson:" + JSON.stringify(responseJson));
                this.setState({
                    isLoading: false,
                    postData: responseJson.data.children,
                }, function () {
                });
            })
            .catch((error) => {
                console.error(error);
            });

    } 
    
    /* To navigate to post detail screen with parameters  */
    redirectToDetailScreen(data) {
        this.props.navigation.navigate(
            "PostDetail",
            {
                POST_DATA: data,
            });
    }

    /* To open navigation menu */
    openNavigationMenu() {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    }

    render() {
        return ( 
            <Container>
                {this.state.isLoading ? <Loader /> : null}
                <Header style={styles.header}>
                    <View style={styles.headerSec}>
                        <TouchableOpacity onPress={() => this.openNavigationMenu()}>
                            <Icon name='ios-menu' style={styles.icoMenu} />
                        </TouchableOpacity>
                        <View style={{}}>
                            <Title style={styles.heading}> Posts </Title>
                        </View>
                    </View>
                </Header>
                <Content style={styles.content}>
                    <FlatList data={this.state.postData} style={styles.flatList}
                        renderItem={({ item }) => {
                            var date = Moment.unix(item.data.created).format("MMM DD");
                            return (
                                <View style={styles.postMainView}>
                                    <TouchableOpacity activeOpacity={0.9} onPress={this.redirectToDetailScreen.bind(this, item.data)}>
                                        <View style={styles.container} >
                                            <Image
                                                source={{ uri: item.data.thumbnail }}
                                                style={styles.imageThumb}
                                            />
                                            <View style={styles.postDetail}>
                                                <Text style={styles.dateStyle}>{date}</Text>
                                                <Text style={styles.commentCountStyle}>{item.data.num_comments}</Text>
                                            </View>
                                            <Text numberOfLines={2} style={styles.titleStyle}>
                                                {item.data.title}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ) 
                        }}
                        numColumns={2}
                        keyExtractor={(item, index) => index
                        }>
                    </FlatList>
                </Content>
            </Container>
        );
    }
}