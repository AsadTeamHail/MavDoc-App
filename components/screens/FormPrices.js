import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import {langChange, langStyleFunc } from '../../functions/checkLanguage'
import { useRoute } from "@react-navigation/native"

import Header from '../shared/Header' //importing Header from shared folder
import checkNetConnection from '../../functions/checkNetConnection'//external func import from functions folder
import AgreementPrices from '../../assets/agreement/index.json'//Agreement Stamps Json data

const FormPrices = ({navigation}) => {
    //Props of language from home screen
    const route = useRoute()
    const language = route.params?.language
    const forms = route.params?.form

    //State of selection
    const [agreementLanguage, setAgreementLanguage] = useState("")
    const [stampPaper, setStampPaper] = useState("")

    //State for array
    const [stamps, setStamps] = useState([])
    
    //Conditional States 
    const [connected, setConnected] = useState(true)
    
    useEffect(() => { //Setting the state of array on regard of forms params
      checkNetConnection({setConnected,navigation})
      if(forms == 'Agreement'){setStamps(AgreementPrices[0])}
      if(forms == 'Affidavit'){setStamps(AgreementPrices[0])}
      if(forms == 'Property'){setStamps(AgreementPrices[0])}
    }, [connected]) 

    //checking values and navigating to the status screen.
    // useEffect(() => {
    //   if(agreementLanguage != "" && stampPaper != ""){
    //     navigation.navigate("Status")
    //   }
    // }, [agreementLanguage,stampPaper])

  return (
    <View style={{flex:1}}>
    <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={{flex: 1}}>
      <Header navigation={navigation}/>
       <View style={styles.container}>
        <View style={langStyleFunc(language)}>
         <Text style={styles.heading}>{langChange(language)[`${forms} Stamp Paper`]}</Text>     
        </View>
         {stamps.map((x,index)=>{
          return(
            <View key={index}>
             <TouchableOpacity onPress={()=>{setStampPaper(x.title)}} style={styles.btn}>
              <Image style={styles.icons} source={require('../../assets/images/icons/circle.png')}/>
               <Text style={styles.txt}>
               <Text style={langStyleFunc(language)}>
                {langChange(language)[x.title]}
               </Text>
               </Text>
             </TouchableOpacity>
             </View>        
          )
        })}
        <View>
          <Text style={styles.heading}>{langChange(language)[`Select ${forms} Language`]}</Text>
          <View style={{flexDirection:'row',alignSelf:'center'}}>
          <TouchableOpacity onPress={()=>{setAgreementLanguage('Urdu')}} style={styles.btn_sm}>
            <Text style={{color:'white',textAlign:'center'}}>{langChange(language)["Urdu"]}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setAgreementLanguage('English')}} style={styles.btn_sm}>
            <Text style={{color:'white',textAlign:'center'}}>{langChange(language)["English"]}</Text>
          </TouchableOpacity>
          </View>
        </View>
       </View>
     </ImageBackground>
   </View>
  )
}

export default FormPrices

const styles = StyleSheet.create({
  container:{
    flex:0.5,
    justifyContent:'center', 
    alignItems:'center',
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
    fontWeight:'600',
    padding:10,
    color:'white',
    left:50,  
  },
  btn:{
    margin:10,
    padding:3,
    width:289,
    backgroundColor:'#2661c7',
    borderRadius:5,
    flexDirection:'row',
  },
  btn_sm:{
    margin:10,
    padding:8,
    width:'30%',
    backgroundColor:'#2661c7',
    borderRadius:5,
    alignSelf:'center'
  }
})