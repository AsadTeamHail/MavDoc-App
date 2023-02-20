import React,{useState,useRef} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ActivityIndicator, Image, Alert} from 'react-native'
import { useRoute } from "@react-navigation/native"
import axios from 'axios'

import API from '../../api/index.json' //API imports from api folder/index.json

const OTPScreen = ({navigation}) => {

  //number prop
  const route = useRoute()
  const phone = route.params?.phone

  //code states
  const [code, setCode] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');
  
  //code Refs
  const codeRef = useRef(null);
  const code2Ref = useRef(null);
  const code3Ref = useRef(null);
  const code4Ref = useRef(null);
  
  //conditional states
  const [loading, setLoading] = useState(false);

  //Code Verificaion req to API
  const handleVerification = () => {
    setLoading(true)
    if(code.length>0 && code2.length>0 && code3.length>0 && code4.length>0){
      setTimeout(
        async function() {
          axios
          .post(API.PostUserVerification,
            {
              phone:'asadworkemail@gmail.com',
              pass: code + code2 + code3 + code4,
              type:'customer'
            }).then((r)=>{
              console.log(r.data)
            if(r.data.message === 'success'){
              console.log(r.data)
              setLoading(false)
            }else if (r.data.message === 'Invalid'){
              console.log(r.data)
              Alert.alert("Error","Please Enter the 4 Digit Code recieved on E-mail Correctly!");
              setLoading(false)
            }
          })
      }, 3000);
    }
    if(code.length<1 && code2.length<1 && code3.length<1 && code4.length<1){
      Alert.alert("Enter the code","Please Enter the 4 Digit Code recieved on E-mail.");
      setLoading(false);
    }
  }
 
  return (
    <View style={{flex:1}}>
      {!loading ? 
      <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.image}>
        <View style={styles.container}>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:20,color:'#2661c7',fontWeight:'600'}}>Verifying {phone}</Text>
          <Text style={{fontSize:15,marginTop:10}}>We have just sent you a text message with code.</Text>
          <Text style={{fontSize:15,}}>Please enter the 4 digit code.</Text>
        </View>
        <View style={{alignSelf:'center', flexDirection:'row',marginTop:15}}>
          <Text style={{color:'#2661c7',fontWeight:'600',fontSize:16}}>{phone} </Text>
          <Text style={{color:'#fda036',fontWeight:'600',fontSize:16}}>Change Number?</Text>
        </View>
        <View style={{alignSelf:'center',padding:30}}>
          <View style={{flexDirection:'row'}}>
          <TextInput
              keyboardType="numeric"
              ref={codeRef}
              onChangeText={pin1 => {
              setCode(pin1);
              if (pin1 != '') {
                  code2Ref.current.focus();
              }
              }}
              maxLength={1}
              style={styles.input_code}
              placeholder="0"
          />
          <TextInput
              ref={code2Ref}
              keyboardType="numeric"
              onChangeText={pin2 => {
              setCode2(pin2);
              if (pin2 != '') {
                  code3Ref.current.focus();
              } else if (pin2 === '') {
                  codeRef.current.focus();
              }
              }}
              maxLength={1}
              style={styles.input_code}
              placeholder="0"
          />
          <TextInput
              ref={code3Ref}
              onChangeText={pin3 => {
              setCode3(pin3);
              if (pin3 != '') {
                  code4Ref.current.focus();
              } else if (pin3 === '') {
                  code2Ref.current.focus();
              }
              }}
              keyboardType="numeric"
              maxLength={1}
              style={styles.input_code}
              placeholder="0"
          />
          <TextInput
              onChangeText={pin4 => {
              setCode4(pin4);
              if (pin4 != '') {
                  code4Ref.current.focus();
              } else if (pin4 === '') {
                  code3Ref.current.focus();
              }
              }}
              ref={code4Ref}
              keyboardType="numeric"
              maxLength={1}
              style={styles.input_code}
              placeholder="0"
          />
          </View>
          <View style={{flexDirection:'row', marginTop:10, alignItems:'center'}}>
            <Image source={require('../../assets/resend.png')} style={{height:30, width:30}}/>
            <TouchableOpacity><Text> Resend Code.</Text></TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={()=>handleVerification()} style={styles.btn}><Text style={{color:'white'}}>Verify</Text></TouchableOpacity>
      </View>
    </ImageBackground>
    : //loader
      <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.image}>
        <View style={{alignItems:'center'}}>
          <ActivityIndicator size={'large'} color={'#2661c7'} />
          <Text>Please Wait</Text>
        </View>
      </ImageBackground>
      }
  </View>
  )
}

export default OTPScreen

const styles = StyleSheet.create({
container:{
alignSelf:'center',
}, 
image: {
  flex: 1,
  justifyContent:'center'
}, 
input_code: {
margin:8,
padding: 15,
fontSize: 22,
textAlign: 'center',
backgroundColor:'white',
borderRadius:8
},
btn:{
  marginTop:30,
  alignSelf:'center',
  borderRadius:5,
  backgroundColor:'#2661c7',
  paddingRight:65,
  paddingLeft:65,
  paddingTop:10,
  paddingBottom:10,
  width:'100%'
},
})