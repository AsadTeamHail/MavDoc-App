import NetInfo from "@react-native-community/netinfo";

const checkNetConnection = ({setConnected,navigation},route) => {
    let result = ''
    NetInfo.fetch().then(state => {
        if(state.isConnected){
            // console.log('hit', route)
            return setConnected(true)
        }else{
            console.log('hit', route)
        if(route){
            if(route.name === "NoWifi"){
                setConnected(false)
            }
        }else{
         return setConnected(false), navigation.navigate("NoWifi")
        }
        }
    });
    return result
}

export default checkNetConnection