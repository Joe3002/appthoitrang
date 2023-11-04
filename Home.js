import { StyleSheet, View, Text ,TextInput, SafeAreaView,Image,FlatList,TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Swiper from 'react-native-swiper';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
    const handleSearchQueryChange = (text) => {
        setSearchQuery(text);
    };
    const [categories, setCategories] = useState([
      {
        image: require('../assets/ảnh1.jpg'),
      },
      {
        image: require('../assets/Ảnh2_QC.webp'),
      },
      {
        image: require('../assets/Ảnh3.jpg'),
      },
      {
        image: require('../assets/ảnh4.webp'),
      },
      {
        image: require('../assets/ảnh6.jpg'),
      },
    ]);
  return (
    <KeyboardAvoidingView style={styles.Container} behavior="padding">
    <View style={styles.Container}>
        <Image
          source={require('../assets/Zara_Logo.svg.png')}
            style={styles.image} 
        />
    <Swiper style={styles.swiper} showsPagination={false}>
      {categories.map((category, index) => (
        <View style={styles.newcategory} key={index}>
          <Image style={styles.newcategoryImage} source={category.image} />
        </View>
      ))}
    </Swiper>
     
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="white"
        value={searchQuery}
        onChangeText={handleSearchQueryChange}
      />
    </View>
    
  </View>
  </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  
  Container:{

    flex:1,
    alignItems:'center',
    backgroundColor:'black'


  },
  searchBarContainer: {
    width: 300,
    height: 30,
    paddingRight:10,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderWidth:1,
    borderColor: "black",
    position:'absolute',
    alignSelf:'center',
    bottom:40,
  },
  searchBar:{
    flex:1,
    textAlign:'right',
    
  },
  newcategory: {
    width: 400,
    height: 900,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  newcategoryImage: {
    
    width: 400,
    height: 900, 
  },
  image:{
    height:100,
    width:240,
    marginTop:100,
    backgroundColor:'rgba(255, 255, 255, 0)',
    position:'absolute',
    zIndex: 2,
    
  }
  
 

});