import React,{useState,useEffect, useLayoutEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native'
import { langChange, langStyleFunc} from '../../../functions/checkLanguage'
import { useRoute } from "@react-navigation/native"
import { useIsFocused } from '@react-navigation/native';

import checkNetConnection from '../../../functions/checkNetConnection' //Import check netinfo func from functions folder
import Header from '../../shared/Header'//Header import from shared holder

const Agreement = ({navigation}) => {
    //Props of language from home screen
    const route = useRoute()
    const lang = route.params?.language
    
    //Conditional States 
    const [connected, setConnected] = useState(true)
    const [language, setLanguage] = useState("")
    const isFocused = useIsFocused()

     //Get req to API for agreement types
    useEffect(() => {
      if(lang != null){setLanguage(lang)}
      checkNetConnection({setConnected,navigation})}, [connected, isFocused])  

  return (
    <View style={{flex:1}}>
     <ImageBackground source={require('../../../assets/bg.png')} resizeMode='cover' style={{flex: 1}}>
       <Header navigation={navigation} prevScreen={"Home"}/>
        <View style={styles.container}>
          <Text style={langStyleFunc(language)}>
          <Text style={styles.heading}>{langChange(language)["Immovable"]}</Text>     
          </Text>
              <TouchableOpacity onPress={()=>{navigation.navigate("FormPrices",{language:language, form:"Agreement"})}} style={styles.btn}>
               <Image style={styles.icons} source={require('../../../assets/images/icons/immovable.png')}/>
                <Text style={styles.txt}>
                <Text style={langStyleFunc(language)}>
                {langChange(language)["Agreement of Rent or Tenancy"]}
                </Text>
                </Text>
                <Image style={styles.arrow} source={require('../../../assets/images/icons/r_arrow.png')}/>
              </TouchableOpacity>
               <TouchableOpacity style={styles.btn}>
                <Image style={styles.icons} source={require('../../../assets/images/icons/immovable.png')}/>
                <Text style={styles.txt}>
                <Text style={langStyleFunc(language)}>
                {langChange(language)["Agreement of Sale (Part Payment)"]}
                </Text>
                </Text>
                <Image style={styles.arrow} source={require('../../../assets/images/icons/r_arrow.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Image style={styles.icons} source={require('../../../assets/images/icons/immovable.png')}/>
                <Text style={styles.txt}>
                <Text style={langStyleFunc(language)}>
                {langChange(language)["Agreement of Sale (Full & Final)"]}
                </Text>
                </Text>
                <Image style={styles.arrow} source={require('../../../assets/images/icons/r_arrow.png')}/>
              </TouchableOpacity>
          <Text style={langStyleFunc(language)}>
          <Text style={styles.heading}>{langChange(language)["Movable"]}</Text>     
          </Text>
            <TouchableOpacity style={styles.btn}>
              <Image style={styles.icons} source={require('../../../assets/images/icons/car.png')}/>
              <Text style={styles.txt}>
              <Text style={langStyleFunc(language)}>
              {langChange(language)["Agreement for Car Sale"]}
              </Text>
              </Text>
              <Image style={styles.arrow} source={require('../../../assets/images/icons/r_arrow.png')}/>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.btn}>
              <Image style={styles.icons} source={require('../../../assets/images/icons/car.png')}/>
              <Text style={styles.txt}>
              <Text style={langStyleFunc(language)}>
              {langChange(language)["Agreement for Car Rent"]}
              </Text>
              </Text>
              <Image style={styles.arrow} source={require('../../../assets/images/icons/r_arrow.png')}/>
            </TouchableOpacity> 
        </View>
      </ImageBackground>
    </View>
  )
}

export default Agreement

const styles = StyleSheet.create({
container:{
  flex:0.5,
  justifyContent:'center', 
  alignItems:'center',
},
arrow:{
position:'absolute',
right:10,
alignSelf:'center',
height:25,
width:25,
},
icons:{
position:'absolute',
left:10,
alignSelf:'center',
height:25,
width:25,  
},
heading:{
fontWeight:500,
color:'#2b2b2a',
fontSize:22,
textAlign:'center',
padding:10
},
txt:{
  padding:10,
  color:'white',
  left:30,
  fontSize:13,
},
btn:{
  margin:10,
  padding:3,
  width:320,
  backgroundColor:'#2661c7',
  borderRadius:5,
  flexDirection:'row',
},

})