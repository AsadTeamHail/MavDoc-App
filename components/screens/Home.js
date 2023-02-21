import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.bg_image}>
        <View style={{alignItems:'center'}}><Text>MavDocsLOGO</Text></View>
        <View style={styles.container}>
          <View>
            <Image />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
container:{
  justifyContent:'center', 
  flex:1, 
  alignSelf:'center'
},
bg_image: {
 flex: 1,
},

})