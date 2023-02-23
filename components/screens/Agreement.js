import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native'
import { useRoute } from "@react-navigation/native"
import axios from 'axios'

import API from '../../api/index.json' //API import from APIs folder
import Loader from '../shared/Loader' //Loader import from shared folder
import checkNetConnection from '../../functions/checkNetConnection' //Import check netinfo func from functions folder
import Header from '../shared/Header'//Header import from shared holder

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
     <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={{flex: 1}}>
       <Header navigation={navigation}/>
        <View style={styles.container}>
          <Text style={styles.heading}>IMMOVABLES</Text>     
            {subDocuments.map((p,index)=>{return(
              <>
              {p.mov_type === "immovable" && 
              <TouchableOpacity key={index} style={styles.btn}>
                <Image style={styles.icons} source={require('../../assets/images/icons/immovable.png')}/>
                <Text style={styles.txt}>{p.title}</Text>
                <Image style={styles.arrow} source={require('../../assets/images/icons/r_arrow.png')}/>
              </TouchableOpacity>}
            </>
            )})}
            <Text style={styles.heading}>MOVABLES</Text>     
            {subDocuments.map((p,index)=>{return(
              <>
              {p.mov_type === "movable" && 
              <TouchableOpacity key={index} style={styles.btn}>
                <Image style={styles.icons} source={require('../../assets/images/icons/car.png')}/>
                <Text style={styles.txt}>{p.title}</Text>
                <Image style={styles.arrow} source={require('../../assets/images/icons/r_arrow.png')}/>
              </TouchableOpacity>}
            </>
            )})}
        </View>
      </ImageBackground>
      ://Loader Component'
     <>
     <Loader/>
     </> 
    }
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
  fontSize:13
},
btn:{
  margin:10,
  padding:3,
  width:300,
  backgroundColor:'#2661c7',
  borderRadius:5,
  flexDirection:'row'
},

})