import { StyleSheet, Text, View, ActivityIndicator, Image, ImageBackground } from 'react-native'
import React from 'react'

const loader = () => {
  return (
  <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.bg_image}>
    <View style={{alignItems:'center',bottom:40}}>
        <Image style={styles.logo} source={require('../../assets/logo.png')}/>
    </View>
    <View style={{justifyContent:'center',flex:0.8, alignItems:'center'}}>
      <ActivityIndicator size={'large'} color={'#2661c7'} />
      <Text style={{color:'gray'}}>Please Wait</Text>
    </View>
  </ImageBackground>
  )
}

export default loader

const styles = StyleSheet.create({
bg_image: {
flex: 1,
},
logo:{
height:150,
width:150
},
})