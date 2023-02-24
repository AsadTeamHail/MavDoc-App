import React,{useEffect, useState, useLayoutEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'

import checkNetConnection from '../../functions/checkNetConnection'//external func import from functions folder
import { checkLanguage, styleFunc, func, textEnStyle, textStyle } from '../../functions/checkLanguage'
import En from '../../assets/locals/en/common.json'//English language import from assets
import Ur from '../../assets/locals/ur/common.json'//Urdu language import from assets

const Home = ({navigation}) => {

  const [text, setText]=useState([])
  const [lang, setLang]=useState("en");

  const [connected, setConnected] = useState(true) //conditional state for netcheck

  //checking net connection
  useEffect(() => {checkNetConnection({navigation,setConnected})}, [connected])

  //checking and changing the language
  useLayoutEffect(() => {
    checkLanguage()
  }, [])
  
  func(lang,Ur,En).then(x=>{x?En:Ur})

  
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
          <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Agreement",{doc_id:'6a0e99fd-3f07-4138-8940-177e407a5e48'})}}>             
            <Image style={styles.btn_icons} source={require('../../assets/images/icons/agreement.png')} />
            <Text >
              {func(lang)['Agreement & Contracts']}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>            
            <Image style={styles.btn_icons} source={require('../../assets/images/icons/affidavit.png')} />
            <Text style={styleFunc(lang)}>
            {func(lang)['Affidavit / Undertaking']}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>            
            <Image style={styles.btn_icons} source={require('../../assets/images/icons/property.png')} />
            <Text style={styleFunc(lang)}>
            {func(lang)['Property Documents']}
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