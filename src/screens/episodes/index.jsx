//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { screensStyle } from '../../styles/screensStyle';
import {useSelector, useDispatch} from 'react-redux';
import { getEpisodes } from '../../store/actions/episodeActions';

// create a component
const Episodes = () => {
    const {episode} = useSelector(state => state.episodes);
    const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getEpisodes());
      }, [episode]);
      
    return (
        <View style={screensStyle.container}>
          <FlatList
          data={episode}
          renderItem={({item}) => <Text>{item}</Text>}
          />
        </View>
    );
};

export default Episodes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

