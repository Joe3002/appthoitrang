import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bag = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bag</Text>
    </View>
  )
}

export default Bag

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:"white",
    fontSize:50
  }
})