import React,{useState,useLayoutEffect} from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity, RefreshControl,ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native';

import checkNetConnection from '../../functions/checkNetConnection';
import { checkLanguage, langStyleFunc, langChange } from '../../functions/checkLanguage';

const NoWifi = ({navigation}) => {
  //langugage states
  const [language, setLanguage] = useState("")

  //Conditional States
  const [refreshing, setRefreshing] = useState(false);
  const [connected, setConnected] = useState(false);

  //initializing useRoute variable
  const route = useRoute() 

  //checking selected language
  useLayoutEffect(() => {checkLanguage({setLanguage})}, [language])
  
  //function to check connection and refresh
  const handleRefresh = () =>{
    setRefreshing(true);
    checkNetConnection({setConnected,navigation},route)
      if(connected){
        setRefreshing(false)
       return navigation.goBack();
      }else{setRefreshing(false)}
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }

  return (
    <View style={{flex:1}}>
       <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.bg_image}>
        <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl colors={["#4169e1"]} refreshing={refreshing} onRefresh={handleRefresh}/>
        }>
          <Image style={styles.image} source={require('../../assets/images/icons/wifi.png')} />
          <Text style={langStyleFunc(lang)}>
            {langChange(lang)["Connect your device to the wifi or enable it"]}
          </Text>
        <TouchableOpacity onPress={()=>{handleRefresh(),setRefreshing(true)}} style={styles.btn}>
          <Text style={{color:'white'}}>{langChange(lang)["Try Again"]}</Text>
          <Image style={{height:20,width:20,left:10}} source={require('../../assets/images/icons/reload.png')}/>
        </TouchableOpacity>
        </ScrollView>
       </ImageBackground>
    </View>
  )
}

export default NoWifi
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center', 
    alignItems:'center'
  },
  bg_image: {
   flex: 1,
  },
  image:{
    height:100,
    width:100
  },
  btn:{
    marginTop:30,
    borderRadius:5,
    backgroundColor:'#2661c7',
    paddingRight:20,
    paddingLeft:20,
    paddingTop:10,
    paddingBottom:10,
    flexDirection:'row'
  }
})