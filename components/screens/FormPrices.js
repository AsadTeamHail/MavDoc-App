import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import {langChange, langStyleFunc } from '../../functions/checkLanguage'
import { useRoute } from "@react-navigation/native"

import Header from '../shared/Header' //importing Header from shared folder
import checkNetConnection from '../../functions/checkNetConnection'//external func import from functions folder
import En from '../../assets/locals/en/common.json'//English language import from assets
import Ur from '../../assets/locals/ur/common.json'//Urdu language import from assets

const FormPrices = ({navigation}) => {
    //Props of language from home screen
    const route = useRoute()
    const language = route.params?.lang

    //Conditional States 
    const [connected, setConnected] = useState(true)

    useEffect(() => { //Get req to API for agreement types
      checkNetConnection({setConnected,navigation})
    }, [connected])  
  
  return (
    <View style={{flex:1}}>
    <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={{flex: 1}}>
      <Header navigation={navigation}/>
       <View style={styles.container}>
         <Text style={styles.heading}>IMMOVABLES</Text>     
             <TouchableOpacity onPress={()=>{navigation.navigate("FormPrices"),{language}}} style={styles.btn}>
              <Image style={styles.icons} />
               <Text style={styles.txt}>
               <Text style={langStyleFunc(language,Ur,En)}>
               {langChange(language,Ur,En)["Agreement of Rent or Tenancy"]}
               </Text>
               </Text>
               <Image style={styles.arrow} />
             </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
               <Image style={styles.icons}/>
               <Text style={styles.txt}>
               <Text style={langStyleFunc(language,Ur,En)}>
               {langChange(language,Ur,En)["Agreement of Sale (Part Payment)"]}
               </Text>
               </Text>
               <Image style={styles.arrow} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.btn}>
               <Image style={styles.icons} />
               <Text style={styles.txt}>
               <Text style={langStyleFunc(language,Ur,En)}>
               {langChange(language,Ur,En)["Agreement of Sale (Full & Final)"]}
               </Text>
               </Text>
               <Image style={styles.arrow} />
             </TouchableOpacity>
           <Text style={styles.heading}>MOVABLES</Text>  
            <TouchableOpacity style={styles.btn}>
              <Image style={styles.icons} />
               <Text style={styles.txt}>
               <Text style={langStyleFunc(language,Ur,En)}>
               {langChange(language,Ur,En)["Agreement for Car Sale"]}
               </Text>
               </Text>
               <Image style={styles.arrow}/>
             </TouchableOpacity> 
            <TouchableOpacity style={styles.btn}>
              <Image style={styles.icons} />
               <Text style={styles.txt}>
               <Text style={langStyleFunc(language,Ur,En)}>
               {langChange(language,Ur,En)["Agreement for Car Rent"]}
               </Text>
               </Text>
               <Image style={styles.arrow}/>
             </TouchableOpacity> 
       </View>
     </ImageBackground>
   </View>
  )
}

export default FormPrices

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