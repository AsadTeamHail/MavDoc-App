import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import checkNetConnection from '../../functions/checkNetConnection'

const Home = ({navigation}) => {

  const [connected, setConnected] = useState(true) //conditional state for netcheck

  useEffect(() => {
    checkNetConnection({navigation,setConnected})
  }, [connected])
  
  
  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.bg_image}>
        <View style={{alignItems:'center',bottom:40}}><Image style={styles.logo} source={require('../../assets/images/icons/logo.png')}/></View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Agreement",{doc_id:'6a0e99fd-3f07-4138-8940-177e407a5e48'})}}>             
            <Image style={styles.btn_icons} source={require('../../assets/images/icons/agreement.png')} />
            <Text>Agreement & Contracts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>            
            <Image style={styles.btn_icons} source={require('../../assets/images/icons/affidavit.png')} />
            <Text>Affidavit / Undertaking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>            
            <Image style={styles.btn_icons} source={require('../../assets/images/icons/property.png')} />
            <Text>Property Documents & Forms</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
container:{
  flex:0.7,
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
btn:{
margin:5,
alignItems:'center'
},
btn_icons:{
height:120,
width:120
}

})