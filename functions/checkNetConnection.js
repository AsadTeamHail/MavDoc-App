import NetInfo from "@react-native-community/netinfo";
import { Alert } from "react-native";


const checkNetConnection = ({setConnected,navigation}) => {
    let result = ''
     NetInfo.fetch().then(state => {
        if(state.isConnected){
        return setConnected(true)
        }else{
        Alert.alert("Connection Error","Connect your device to the wifi or enable it.");
        return setConnected(false), navigation.navigate("NoWifi")
        }
    });
    return result
}

export default checkNetConnection