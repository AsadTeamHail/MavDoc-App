import AsyncStorage from '@react-native-async-storage/async-storage'
import En from '../assets/locals/en/common.json'
import Ur from '../assets/locals/ur/common.json'

async function storeEng (val){ 
    try {
        await AsyncStorage.setItem('@lang',val)
    
      } catch (error) {
        console.log(error);
      }
   }
async function storeUr (val){ 
    try {
        
        await AsyncStorage.setItem('@lang',val)
    
      } catch (error) {
        console.log(error);
      }
   }

   

const checkLanguage = async ({setLanguage,language}) => {//using asyncstorage value to check if language is urdu or eng
    try{    
    let result = ''
    const Storedlanguage = await AsyncStorage.getItem('@lang')
    if(Storedlanguage !== null) {
       result = setLanguage(Storedlanguage)
      }
      if(Storedlanguage == null){
        result = setLanguage("en")
      }

    return result 
}
    catch(e){
        console.log(e)
    }
}

const langChange = (language) => { //passing parameters and changing json file eng/ur
    let result = {}
        if(language==="en"){
            result = En;
            let val ="en"
            storeEng(val)
        } 
        if (language==="ur"){
            result = Ur
            let val ="ur"
            storeUr(val)
        }
    // console.log(result)
    return result
};

const langStyleFunc =  (i) => {return i=="ur"?textStyle:textEnStyle;} //passing parameters and changing style eng/ur

const textStyle = {
  fontFamily:'Urdu',
  fontSize:18,
  lineHeight:30,
 }

const textEnStyle = {
  fontSize:15,
  lineHeight:30
 }


export  {checkLanguage,langChange,textStyle,textEnStyle,langStyleFunc}