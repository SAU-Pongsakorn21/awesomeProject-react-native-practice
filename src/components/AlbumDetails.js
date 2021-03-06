import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {

    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        thumbnailStyle, 
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStlye
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>                    
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    style={imageStlye}
                    source={{ uri: image }} 
                />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStlye: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetails;
