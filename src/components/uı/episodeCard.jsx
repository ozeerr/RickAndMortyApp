import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EpisodeCard = ({item}) => {
  return (
    <View style={{backgroundColor:"red"}}>
      <Text>{item.episode}</Text>
    </View>
  )
}

export default EpisodeCard

const styles = StyleSheet.create({
   
})