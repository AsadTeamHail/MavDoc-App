import { StyleSheet,Text,View,ImageBackground,TextInput,TouchableOpacity } from 'react-native';
import React from 'react';

const SignUp = () => {

  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../../assets/bg.png')} resizeMode='cover' style={styles.image}>
        <View style={styles.container}>
         <View style={{margin:10}}>
            <Text style={{fontSize:40,color:'#2661c7',fontWeight:'600'}}>Sign up</Text>
          </View>
          <View style={styles.Grid}>
             <View style={styles.input_view_grp}>
                <Text style={styles.txt}>First Name:</Text>
                <TextInput style={styles.input} placeholder='First Name'/>
             </View>
             <View style={styles.input_view_grp}>
                <Text style={styles.txt}>Last Name:</Text>
                <TextInput style={styles.input} placeholder='Last Name'/>
             </View>
           </View>
             <View style={styles.input_view}>
                <Text style={styles.txt}>Company:</Text>
                <TextInput style={styles.input} placeholder='Company'/>
             </View>
             <View style={styles.input_view}>
                <Text style={styles.txt}>Email:</Text>
                <TextInput style={styles.input} placeholder='xyz@gmail.com'/>
             </View>
             <View style={styles.input_view}>
                <Text style={styles.txt}>Phone Number:</Text>
                <TextInput style={styles.input} placeholder='+92 1234567890'/>
             </View>
           </View>
            <View style={styles.btn_view}>
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
    Grid:{
     marginTop:25,
     flexDirection:'row'
    },
    input_view_grp:{
     margin:10,
     width:'44%'    
    },
    input_view:{
     margin:10 
    },
    input:{
     backgroundColor:'white',
     borderWidth:0.2,
     borderRadius:5,
     height:45,
     padding:10,
    },
    btn_view:{
     justifyContent:'space-evenly',
     alignSelf:'center',
     margin:15
    },
    btn:{
     borderRadius:5,
     backgroundColor:'#2661c7',
     paddingRight:45,
     paddingLeft:45,
     paddingTop:10,
     paddingBottom:10,
     width:'100%'
    }
})