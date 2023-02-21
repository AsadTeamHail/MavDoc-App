import axios from "axios";

import API from '../api/index.json' //API import from apis/index.json

const customerVerification = async (token)=>{
    let result = '' 
    if(token){
        await axios.get(API.GetUserLoggedInVerification,{headers:{"x-access-token":token}})
        .then((r)=>{
        if(r.data.isLoggedIn === true){
            result = r.data
            //console.log(result)
            return result
         }
      })
    }else{return result}
    return result
}

export default customerVerification