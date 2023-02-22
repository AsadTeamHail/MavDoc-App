import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native'
import { useRoute } from "@react-navigation/native"
import axios from 'axios'

import API from '../../api/index.json' //API import from APIs folder
import Loader from '../shared/Loader' //Loader import from shared folder
import checkNetConnection from '../../functions/checkNetConnection'

const Agreement = ({navigation}) => {

    //Props of doc_id from home screen
    const route = useRoute()
    const doc_id = route.params?.doc_id

    //Mapping State
    const [subDocuments, setSubDocuments] = useState([])

    //Conditional States 
    const [loading, setLoading] = useState(false)
    const [connected, setConnected] = useState(true)

    useEffect(() => { //Get req to API for agreement types
      checkNetConnection({setConnected,navigation})
      console.log(doc_id)
      setLoading(true)
      if(connected === true){
        axios.get(API.GetDocSubTypes,{headers:{doc_id:doc_id}})
        .then((r)=>{
        if(r.data.status === "Success"){
          setSubDocuments(r.data.doc)
          setLoading(false) 
        }
        })
      }
    }, [])  

  return (
    <View style={{flex:1}}>
   {!loading ? 
     <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.bg_image}>
        <View style={{alignItems:'center',bottom:40}}><Image style={styles.logo} source={require('../../assets/logo.png')}/></View>
        <View style={styles.container}>
            {subDocuments.map((p)=>{return(
                <Text>{p.title}</Text>
            )})}
        </View>
      </ImageBackground>
      :
     <Loader/> //Loader Component
    }
    </View>
  )
}

export default Agreement

const styles = StyleSheet.create({
container:{
  flex:0.9,
  justifyContent:'center', 
  alignSelf:'center',
},
bg_image: {
 flex: 1,
},
logo:{
  height:150,
  width:150
},
})