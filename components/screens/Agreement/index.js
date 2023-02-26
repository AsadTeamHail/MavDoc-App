import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native'
import { langChange, langStyleFunc} from '../../../functions/checkLanguage'
import { useRoute } from "@react-navigation/native"

import checkNetConnection from '../../../functions/checkNetConnection' //Import check netinfo func from functions folder
import Header from '../../shared/Header'//Header import from shared holder
import En from '../../../assets/locals/en/common.json'//English language import from assets
import Ur from '../../../assets/locals/ur/common.json'//Urdu language import from assets

const Agreement = ({navigation}) => {
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
     <ImageBackground source={require('../../../assets/bg.png')} resizeMode='cover' style={{flex: 1}}>
       <Header navigation={navigation}/>
        <View style={styles.container}>
          <Text style={styles.heading}>IMMOVABLES</Text>     
              <TouchableOpacity onPress={()=>{navigation.navigate("FormPrices"),{language}}} style={styles.btn}>
               <Image style={styles.icons} source={require('../../../assets/images/icons/immovable.png')}/>
                <Text style={styles.txt}>
                <Text style={langStyleFunc(language,Ur,En)}>
                {langChange(language,Ur,En)["Agreement of Rent or Tenancy"]}
                </Text>
                </Text>
                <Image style={styles.arrow} source={require('../../../assets/images/icons/r_arrow.png')}/>
              </TouchableOpacity>
               <TouchableOpacity style={styles.btn}>
                <Image style={styles.icons} source={require('../../../assets/images/icons/immovable.png')}/>
                <Text style={styles.txt}>
                <Text style={langStyleFunc(language,Ur,En)}>
                {langChange(language,Ur,En)["Agreement of Sale (Part Payment)"]}
                </Text>
                </Text>
                <Image style={styles.arrow} source={require('../../../assets/images/icons/r_arrow.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Image style={styles.icons} source={require('../../../assets/images/icons/immovable.png')}/>
                <Text style={styles.txt}>
                <Text style={langStyleFunc(language,Ur,En)}>
                {langChange(language,Ur,En)["Agreement of Sale (Full & Final)"]}
                </Text>
                </Text>
                <Image style={styles.arrow} source={require('../../../assets/images/icons/r_arrow.png')}/>
              </TouchableOpacity>
            <Text style={styles.heading}>MOVABLES</Text>  
             <TouchableOpacity style={styles.btn}>
               <Image style={styles.icons} source={require('../../../assets/images/icons/car.png')}/>
                <Text style={styles.txt}>
                <Text style={langStyleFunc(language,Ur,En)}>
                {langChange(language,Ur,En)["Agreement for Car Sale"]}
                </Text>
                </Text>
                <Image style={styles.arrow} source={require('../../../assets/images/icons/r_arrow.png')}/>
              </TouchableOpacity> 
             <TouchableOpacity style={styles.btn}>
               <Image style={styles.icons} source={require('../../../assets/images/icons/car.png')}/>
                <Text style={styles.txt}>
                <Text style={langStyleFunc(language,Ur,En)}>
                {langChange(language,Ur,En)["Agreement for Car Rent"]}
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
  fontSize:13
},
btn:{
  margin:10,
  padding:3,
  width:320,
  backgroundColor:'#2661c7',
  borderRadius:5,
  flexDirection:'row'
},

})