//import liraries
import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
  loadMoreCharacters,
} from '../../store/actions/charactersActions';
import SearchItem from '../../components/characters/searchItem';
import Colors from '../../theme/colors';
import { debounce } from 'lodash'


// create a component
const SearchCharacters = () => {
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacterList(params));
  }, []);

  const handleSearch=(text)=>{
    if(text&&text?.length>2){
      dispatch(changeParams({name: text}));
    }
    else{
      dispatch(changeParams({name: null}));
    }
}
const handleTextDebounce=useCallback(debounce(handleSearch,1000),[])


  const ListHeaderComponent = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          placeholder="Search Character"
          style={{
            width: '95%',
            height: 40,
            backgroundColor: Colors.BACKTITLECOLOR,
            borderWidth: 0.5,
            borderRadius: 100,
            borderColor: Colors.BROWN,
            padding: 10,
          }}
          onChangeText={handleTextDebounce}
        />
      </View>
    );
  };
  return (
    <View style={screensStyle.container}>
      <FlatList
        data={characterList}
        renderItem={({item}) => <SearchItem item={item} />}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};

export default SearchCharacters;
