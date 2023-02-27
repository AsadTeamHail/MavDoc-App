import AsyncStorage from '@react-native-async-storage/async-storage'
import En from '../assets/locals/en/common.json'
import Ur from '../assets/locals/ur/common.json'

const checkLanguage = async ({setLang}) => {//using asyncstorage value to check if language is urdu or eng
    let language = await AsyncStorage.getItem('@lang')
    let result = ''
     console.log(language)
    if(language=='En'){
        result = setLang('en')
    }else if (language == 'Ur'){
        result = setLang('ur')
    }
    return result
}

const langChange = (lang) => { //passing parameters and changing json file eng/ur
    let result = {}
        if(lang==="en"){
            AsyncStorage.setItem('@lang','En')
            result = En;
        }else if (lang==="ur"){
            AsyncStorage.setItem('@lang','Ur')
            result = Ur
        }
    // console.log(result)
    return result
};

const langStyleFunc =  (i) => {return i=="ur"?textStyle:textEnStyle;} //passing parameters and changing style eng/ur

const textStyle = {
  fontFamily:'Urdu',
  fontSize:18,
  lineHeight:30
 }

const textEnStyle = {
  fontSize:15,
  lineHeight:30
 }


export  {checkLanguage,langChange,textStyle,textEnStyle,langStyleFunc}