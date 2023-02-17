import React,{useState,useEffect} from 'react';
import { StyleSheet,Text,View,ImageBackground,TextInput,TouchableOpacity } from 'react-native';

import API from './../../api/index.json'

const SignUp = () => {

  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.image}>
        <View style={styles.container}>
            <View style={{alignSelf:'center',padding:30}}>
                <Text style={{fontSize:40,color:'#2661c7',fontWeight:'600'}}>Sign up</Text>
            </View>
            <View style={styles.input_view}>
                <TextInput style={styles.input} placeholder='Full name'/>
            </View>
            <View style={styles.input_view}>
                <TextInput style={styles.input} placeholder='Company'/>
            </View>
            <View style={styles.input_view}>
                <TextInput style={styles.input} placeholder='Email'/>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={{color:'white'}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>  
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
     alignSelf:'center',
    },
    txt:{
     color:'#2661c7',
     fontWeight:'500'
    },
    image: {
     flex: 1,
     justifyContent:'center'
    },
    input_view:{
     margin:10,
    },
    input:{
     width:300,
     backgroundColor:'white',
     borderRadius:5,
     height:45,
     padding:10,
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 1,
     },
     shadowOpacity: 0.20,
     shadowRadius: 1.41,
     elevation: 2,
    },
    btn:{
     marginTop:30,
     alignSelf:'center',
     borderRadius:5,
     backgroundColor:'#2661c7',
     paddingRight:45,
     paddingLeft:45,
     paddingTop:10,
     paddingBottom:10,
     width:'100%'
    }
})