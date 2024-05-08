import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { screensStyle } from '../../styles/screensStyle';
import {useSelector, useDispatch} from 'react-redux';
import { getEpisodes } from '../../store/actions/episodeActions';
import EpisodeCard from '../../components/uı/episodeCard';

const Episodes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEpisodes());
  }, []);
  const {episode} = useSelector(state => state.episodes);
      
    return (
        <View style={screensStyle.container}>
          <FlatList
          showsVerticalScrollIndicator={false}
          data={episode}
          renderItem={({item}) => <EpisodeCard item={item}/>}
          />
        </View>
    );
};

export default Episodes;

