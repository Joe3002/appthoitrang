import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cate</Text>
    </View>
  )
}

export default Cate

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