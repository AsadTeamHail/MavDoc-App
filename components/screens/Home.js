import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.image}>
      </ImageBackground>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
container:{
 alignSelf:'center',
},
image: {
 flex: 1,
 justifyContent:'center'
},

})