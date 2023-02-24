import {View, Switch, StyleSheet,Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useState} from 'react'

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  
  const changeLanguageHandler = async ()=>{
    console.log('hit',isEnabled)
    if(isEnabled==true){
      setIsEnabled(false)
      await AsyncStorage.setItem('@lang', 'En')
    }
    if(isEnabled==false){
      setIsEnabled(true)
      await AsyncStorage.setItem('@lang', 'Ur')
    }
  }
  return (
    <View style={{flex:1,alignSelf:'center',justifyContent:'center'}}>
      <Text>Language select</Text>
      <TouchableOpacity onPress={changeLanguageHandler}>
        <Text>{isEnabled ? 'Urdu' : 'English'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})