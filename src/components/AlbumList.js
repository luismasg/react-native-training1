import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import songs from '../song';
// import spinner from '../spinner.svg';

class AlbumList extends Component {
    state={ albums: [] };

    componentWillMount() {
        // console.log('getting albums...');
        // fetch('https://rallycoding.herokuapp.com/api/music_albums')
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     console.log('albums fetched:', responseJson);
        //     this.setState({ albums: responseJson });
        // });
        this.setState({ albums: songs });
    }
    renderAlbums() {
        return this.state.albums.map(album =>
             <AlbumDetail key={album.title} album={album} />
         );
    }
    render() {
        return (
            <ScrollView >
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
