//index.android

//import a lib to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a component
const App = () => {
    return (
    <View style={{ flex: 1}}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
    );
};

//render to the device
AppRegistry.registerComponent('Albums', () => App);
