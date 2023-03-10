import React,{useState, useEffect} from 'react';
import { StyleSheet,Text,View,ImageBackground,TextInput,TouchableOpacity,Alert,ActivityIndicator,Image, LogBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import API from '../../api/index.json' //API imports from api folder/index.json
import customerVerification from '../../functions/tokenVerification'; //external func import from functions folder
import checkNetConnection from '../../functions/checkNetConnection'; //external func import from functions folder
import Loader from '../shared/Loader';

const Auth = ({navigation}) => {

  //signup form states
  const [fullName, setFullName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')

  //condition states
  const [loading,setLoading] = useState(false)
  const [signUp,setSignUp] = useState(false)
  const [connected,setConnected] = useState(false)

  //Verifying connection & login status
  useEffect(() => {
    setLoading(true)
    checkNetConnection({setConnected,navigation})//connection check
    async function VerifyUser(){
    if(connected === true){
        let token = await AsyncStorage.getItem("@token");
        customerVerification(token).then((r)=>{//customer verification
          if(r.isLoggedIn === true){
            navigation.navigate("Home")
            setLoading(false)
          }else {
            setLoading(false)
          }
        })
      }}
    VerifyUser()
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [connected])

  //signup req to API
  const handleSignUp = () => {
    setLoading(true)
    if(connected === true){
    if(phone.length>6 && fullName.length>3 && company.length>3){
      setTimeout(
        async function() {
          await axios.post(API.PostUserSignUp,
            {
            fullname:fullName,
            company:company,
            phone:phone,
            type:'customer',
            }).then((r)=>{
              console.log(r.data)
            if(r.data.message === 'success'){
              setLoading(false)
              navigation.navigate("OTP",{phone:r.data.customer.phone})
            }else if(r.data.message === 'exists'){
              setLoading(false)
              Alert.alert("Email Error","Email already exists. Please try again.");
            }
          })
      }, 3000);
    }}
    if(phone.length<6){
      Alert.alert("Email Error","Please Enter a valid email");
      setLoading(false);
    }
  }

  //login req to API
  const handleLogin = () => {
    setLoading(true)
    if(phone.length>6){
      setTimeout(
        async function() {
          await axios.post(API.PostUserLogin,{phone:phone,type:'customer',})
          .then((r)=>{
            if(r.data.message == 'success'){
              setLoading(false)
              navigation.navigate("OTP",{phone:r.data.customerVerification.phone})
            }else if(r.data.message == 'invalid'){
              setLoading(false)
              Alert.alert("Invalid","Email does not exist. Please try again.");
            }
          })
      }, 3000);
    }
    if(phone.length<6){
      Alert.alert("Email Error","Please Enter a valid email");
      setLoading(false);
    }
  }

  return (
    <View style={{flex:1}}>
      {!loading ? 
      <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.bg_image}>
       {!signUp ? 
       //Login Form
        <View style={styles.container}>
          <View style={{alignSelf:'center',padding:30}}>
           <Image source={require('../../assets/images/icons/logo.png')}/>
          </View>
          <View style={styles.input_view}>
            <TextInput style={styles.input} placeholderTextColor= 'gray' placeholder='Email' onChangeText={(x)=>setPhone(x)}/>
            <View style={{flexDirection:'row',marginTop:10}}>
            <Image source={require('../../assets/images/icons/flag.png')} style={{height:12,width:12,top:3}}/>
            <Text style={{color:'#2661c7',fontWeight:'600',fontSize:12}}> Don't have an account? </Text>
             <TouchableOpacity onPress={()=>setSignUp(true)}>
              <Text style={{color:'#fda036',fontWeight:'600',fontSize:12}}>Sign Up</Text>
             </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.btn} onPress={()=>handleLogin()}>
              <Text style={{color:'white'}}>Login</Text>
          </TouchableOpacity>
         </View>
        : //Sign UP Form
          <View style={styles.container}>
         <View style={{alignSelf:'center',padding:30}}>
           <Image source={require('../../assets/images/icons/logo.png')}/>
          </View>
            <View style={styles.input_view}>
                <TextInput style={styles.input} placeholderTextColor= 'gray' placeholder='Full name' onChangeText={(x)=>setFullName(x)}/>
            </View>
            <View style={styles.input_view}>
                <TextInput style={styles.input} placeholderTextColor= 'gray' placeholder='Company' onChangeText={(x)=>setCompany(x)}/>
            </View>
            <View style={styles.input_view}>
                <TextInput style={styles.input} placeholderTextColor= 'gray' placeholder='Email' onChangeText={(x)=>setPhone(x)}/>
            <View style={{marginTop:10, flexDirection:'row'}}>
              <Text style={{fontSize:12,color:'#2661c7',fontWeight:'600'}}>Already have an account?</Text>
              <TouchableOpacity onPress={()=>setSignUp(false)}>
               <Text style={{fontSize:12,color:'#fda036',fontWeight:'600'}}> Login</Text>
              </TouchableOpacity>
            </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>handleSignUp()}>
                <Text style={{color:'white'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        }
      </ImageBackground>
      : //loader
        <Loader/>
      }
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({
container:{
alignSelf:'center',
},
bg_image: {
  flex: 1,
  justifyContent:'center'
},
input_view:{
  margin:10,
  bottom:80
},
input:{
  color:'#2b2b2a',
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
  width:'100%',
  bottom:80
},
})