import React,{useState} from 'react';
import { StyleSheet,Text,View,ImageBackground,TextInput,TouchableOpacity,Alert,ActivityIndicator} from 'react-native';
import axios from 'axios';

import API from './../../api/index.json'

const SignUp = () => {
  const [fullName, setFullName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')

  const [loading,setLoading] = useState(false)
  const [codeScreen,setCodeScreen] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    if(phone.length>6 && fullName.length>3 && company.length>3){
      setTimeout(
        async function() {
          await axios.post(API.CreateUserSignUp,
            {
              fullname:fullName,
              company:company,
              phone:phone,
              type:'customer',
            }).then((r)=>{
            console.log(r.data),
            setLoading(false), 
            setCodeScreen(true)
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
      {!loading ? <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.image}>
       {!codeScreen ? //SignUp Forms
       <View style={styles.container}>
          <View style={{alignSelf:'center',padding:30}}>
              <Text style={{fontSize:40,color:'#2661c7',fontWeight:'600'}}>Sign up</Text>
            </View>
            <View style={styles.input_view}>
                <TextInput style={styles.input} placeholder='Full name' onChangeText={(x)=>setFullName(x)}/>
            </View>
            <View style={styles.input_view}>
                <TextInput style={styles.input} placeholder='Company' onChangeText={(x)=>setCompany(x)}/>
            </View>
            <View style={styles.input_view}>
                <TextInput style={styles.input} placeholder='Email' onChangeText={(x)=>setPhone(x)}/>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>handleSubmit()}>
                <Text style={{color:'white'}}>Sign Up</Text>
            </TouchableOpacity>
         </View>
        : //OTP Form
        <View style={styles.container}>
        <View style={{alignSelf:'center',padding:30}}>
            <Text style={{fontSize:40,color:'#2661c7',fontWeight:'600'}}>Code Screen</Text>
          </View>
        </View>
        }
      </ImageBackground>
      :
      <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.image}>
        <View style={{alignItems:'center'}}>
          <ActivityIndicator size={'large'} color={'#1A6DBB'} />
          <Text>Please Wait</Text>
        </View>
      </ImageBackground>
      }
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