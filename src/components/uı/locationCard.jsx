import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../theme/colors';

const LocationCard = ({item}) => {

  return (
  <View style={styles.container}>
    <View style={styles.textContainer}>
        <Text style={styles.titleText}>Location: </Text>
        <Text style={styles.text}>{item.name}</Text>
    </View>
    <View style={styles.textContainer}>
        <Text style={styles.titleText}>Type: </Text>
        <Text style={styles.text}>{item.type}</Text>
    </View>
    <View style={styles.textContainer}>
        <Text style={styles.titleText}>Dimension: </Text>
        <Text style={styles.text}>{item.dimension}</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#e4dccf",
        marginVertical:8,
        padding:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:Colors.BLACK
    },
    textContainer:{
        flexDirection:"row"
    },
    titleText:{
        color:Colors.BLACK,
        fontWeight:"600",
        fontSize:19
    },
    text:{
        color:Colors.BLACK,
        fontWeight:300,
        fontSize:19
    }
    
});

export default LocationCard;