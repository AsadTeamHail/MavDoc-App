import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const Header = ({navigation}) => {
  return (
    <View> 
     <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{top:25,left:20}} onPress={()=>{navigation.goBack()}}>
        <Image style={{maxHeight:'10%',maxWidth:'20%'}} source={require('../../assets/images/icons/a_left.png')}/>
        </TouchableOpacity>
        <View style={{left:47}}>
        <Image style={{ maxHeight:'27.9%',maxWidth:'61%'}} source={require('../../assets/images/icons/logo.png')}/>
        </View>
    </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})