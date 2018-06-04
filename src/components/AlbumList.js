import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {

    componentWillMount() {
        console.log('componentWillMount in AlbumList');
    }

    render() {
        return (
            <View>
                <Text>Albums List !!!</Text>
            </View>
        );
    }
}


export default AlbumList;