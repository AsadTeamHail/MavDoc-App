import AsyncStorage from '@react-native-async-storage/async-storage'

const checkLanguage = async (lang,) => {
    let language = await AsyncStorage.getItem('@lang')
}

const func = async (i,Ur,En) => {
    // console.log(i,Ur,En)
    const result =  await i=="en"?En:Ur
    return result
};

const styleFunc = async (i) => {
    return await i=="ur"?textStyle:textEnStyle;
}

const textStyle = {
  fontFamily:'Urdu',
  fontSize:25,
  lineHeight:30
 }

const textEnStyle = {
  fontSize:20,
  lineHeight:30
 }


export  {checkLanguage,func,styleFunc,textStyle,textEnStyle}