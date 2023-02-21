import NetInfo from "@react-native-community/netinfo";


const checkNetConnection = (setConnected) => {
    let result = ''
     NetInfo.fetch().then(state => {
        if(state.isConnected){
        return setConnected(true)
        }else{
        return setConnected(false)
        }
    });
    return result
}

export default checkNetConnection