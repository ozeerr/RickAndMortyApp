import React, {useEffect} from 'react';
import {View,FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../../components/uı/spinner';
import LocationCard from '../../components/uı/locationCard';
import { screensStyle } from '../../styles/screensStyle';
import { getLocations } from '../../store/actions/locationActions';


const Locations = () => {
  const {locationList, pending} = useSelector(state => state.location);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocations());
  }, []);

  return (
    <View style={screensStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={locationList}
          renderItem={({item}) => <LocationCard item={item} key={item.id} />}
        />
      )}
    </View>
  );
};

export default Locations;
