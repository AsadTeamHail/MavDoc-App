import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const Login = () => {

  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.image}>
        <View style={styles.container}>
            <></>
        </View>
      </ImageBackground>  
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
     alignSelf:'center'
    },
    image: {
        flex: 1,
      },


})