import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OTPScreen = () => {
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

  return (
    <View style={styles.container}>
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize:20,color:'#2661c7',fontWeight:'600'}}>Verifying 03361818434</Text>
            <Text style={{fontSize:15,marginTop:10}}>We have just sent you a text message with code.</Text>
            <Text style={{fontSize:15,}}>Please enter the 4 digit code.</Text>
          </View>
          <View style={{alignSelf:'center', flexDirection:'row',marginTop:15}}>
            <Text style={{color:'#2661c7',fontWeight:'600',fontSize:16}}>03361818434 </Text>
            <Text style={{color:'#fda036',fontWeight:'600',fontSize:16}}>Change Number?</Text>
          </View>
         <View style={{alignSelf:'center',padding:30}}>
           <View style={styles.grid_view}>
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
        <></>
      </View>
    </View>
  )
}

export default OTPScreen

const styles = StyleSheet.create({
input_code: {
margin:8,
padding: 15,
fontSize: 22,
textAlign: 'center',
backgroundColor:'white',
borderRadius:8},
})