/*
  Screen Description: This screen is used to display the post details data.
*/

import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image 
} from 'react-native'; 
import styles from './PostDetailStyle';
import { isNullOrUndefined } from 'util';
import { Container, Icon, Content } from 'native-base';

export default class PostDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postdata: {}
        }
    }

    componentDidMount() {
        this.setState({
            postdata: this.props.navigation.getParam('POST_DATA'),
        });
    }

    /* Navigation back to post screen */
    backToListScreen() {
        this.props.navigation.goBack();
    }

    render() {

        return (
            <Container>
                <Content style={styles.content}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.btnBack} onPress={() => this.backToListScreen()}>
                            <Icon name='ios-arrow-back' style={styles.iconBack} />
                        </TouchableOpacity>

                        {!isNullOrUndefined(this.state.postdata.thumbnail) && this.state.postdata.thumbnail != "" ? (
                            <Image resizeMode="contain" source={{ uri: this.state.postdata.thumbnail }} style={styles.thumbnailImage} />
                        ) : (
                                null
                            )}

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.commentCountStyle}>{this.state.postdata.num_comments}</Text>
                                <Text style={styles.dateStyle}>Date</Text>
                                <Text style={styles.dateStyle}>By {this.state.postdata.author}</Text>
                            </View>
                            <View style={styles.postTextSec}>
                                <Text style={styles.titleText}>{this.state.postdata.title}</Text>
                                <Text>{this.state.postdata.selftext}</Text>
                            </View>
                        </View>
                    </View>
                </Content> 
            </Container> 
        );
    }
}