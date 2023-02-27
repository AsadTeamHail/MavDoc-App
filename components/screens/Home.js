import React,{useState, useLayoutEffect, useEffect,} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, BackHandler, Alert } from 'react-native'
import { checkLanguage, langChange, langStyleFunc } from '../../functions/checkLanguage'

import checkNetConnection from '../../functions/checkNetConnection'//external func import from functions folder

const Home = ({navigation}) => {
  //string val state
  const [lang, setLang] = useState(""); 

  //conditional states 
  const [connected, setConnected] = useState(true); 

  //checking net connection and changing the language
  useLayoutEffect(() => {
    checkNetConnection({navigation,setConnected})
    checkLanguage({setLang})
  }, [lang, connected])
  // BackHandler.addEventListener('hardwareBackPress', function() {return true})

  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.bg_image}>
        <TouchableOpacity 
          onPress={()=>setLang(lang=="ur"?"en":"ur")}
        >
          <Text>Click</Text>
        </TouchableOpacity>
        <View style={{alignItems:'center'}}><Image style={styles.logo} source={require('../../assets/images/icons/logo.png')}/></View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Agreement",{lang})}}>             
            <Image style={styles.btn_icons} source={require('../../assets/images/icons/agreement.png')} />
            <Text style={langStyleFunc(lang)}>
              {langChange(lang)["Agreement & Contracts"]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>            
            <Image style={styles.btn_icons} source={require('../../assets/images/icons/affidavit.png')} />
            <Text style={langStyleFunc(lang)}>
            {langChange(lang)['Affidavit / Undertaking']}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>            
            <Image style={styles.btn_icons} source={require('../../assets/images/icons/property.png')} />
            <Text style={langStyleFunc(lang)}>
            {langChange(lang)['Property Documents']}
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