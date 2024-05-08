import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EpisodeCard = ({item}) => {
  return (
    <View style={{backgroundColor:"#e4dccf",marginVertical:10,borderRadius:10,padding:10,gap:5,borderWidth:0.5}}>
      <Text style={{fontWeight:600,fontSize:23}}>{item.episode}</Text>
      <Text style={{fontSize:16}}>{item.name}</Text>
    </View>
  )
}

export default EpisodeCard

const styles = StyleSheet.create({
   
})