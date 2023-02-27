import React,{useState, useLayoutEffect, useEffect,} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, BackHandler, Alert } from 'react-native'
import { checkLanguage, langChange, langStyleFunc } from '../../functions/checkLanguage'

import checkNetConnection from '../../functions/checkNetConnection'//external func import from functions folder

const Home = ({navigation}) => {
  //string val state
  const [language, setLanguage] = useState(""); 

  //conditional states 
  const [connected, setConnected] = useState(true); 

  //checking net connection and changing the language
  useLayoutEffect(() => {
    checkNetConnection({navigation,setConnected})
    checkLanguage({setLanguage})
  }, [language, connected])
   BackHandler.addEventListener('hardwareBackPress', function() {return true})

  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.bg_image}>
        <TouchableOpacity 
        style={styles.langBtn}
          onPress={()=>setLanguage(language=="ur"?"en":"ur")}
        >
          <Text style={{textAlign:'center'}}>{language=="ur"?"English":"Urdu"}</Text>
        </TouchableOpacity>
        <View style={{alignItems:'center'}}><Image style={styles.logo} source={require('../../assets/images/icons/logo.png')}/></View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Agreement",{language, prevScreen:"Home"})}}>             
            <Image style={styles.btn_icons} source={require('../../assets/images/icons/agreement.png')} />
            <Text style={langStyleFunc(language)}>
              {langChange(language)["Agreement & Contracts"]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>            
            <Image style={styles.btn_icons} source={require('../../assets/images/icons/affidavit.png')} />
            <Text style={langStyleFunc(language)}>
            {langChange(language)['Affidavit / Undertaking']}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>            
            <Image style={styles.btn_icons} source={require('../../assets/images/icons/property.png')} />
            <Text style={langStyleFunc(language)}>
            {langChange(language)['Property Documents']}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
container:{
  flex:0.4,
  justifyContent:'center', 
  alignSelf:'center',
},
bg_image: {
 flex: 1,
},
langBtn:{
  borderColor:'#fda036',
  borderWidth:1,
  backgroundColor:'white',
  width:70,
  padding:5,
  bottom:20,
top:10,
left:10
},
logo:{
  maxHeight:'27.8%',
  maxWidth:'37%'
},
btn:{
margin:5,
alignItems:'center'
},
btn_icons:{
height:120,
width:120,
}

})