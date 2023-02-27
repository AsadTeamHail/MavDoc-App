// In App.js in a new project

import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {Image, View} from 'react-native';
//Main Screens
import HomeScreen from './components/screens/Home';
import SettingScreen from './components/screens/Settings';
import TestScreen from './components/screens/Test';
import AuthScreen from './components/screens/Auth'
import OTPScreen from './components/screens/OTP';
import NoWifiScreen from './components/screens/NoWifi';
import FormPricesScreen from './components/screens/FormPrices';
import StatusScreen from './components/screens/Status';
//Agreement Screen & Forms
import AgreementScreen from './components/screens/Agreement/index';
import RentOrTenancy from './components/screens/Agreement/Forms/RentOrTenancy';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};


function App() {
  const [authorized, setAuthorized] = React.useState(false)
  
  const Tab = createBottomTabNavigator();
  
  const CheckValues = async() => {
    let user = await AsyncStorage.getItem('@user_id')
    let token = await AsyncStorage.getItem('@token')
    if (token === null && user === null){
      console.log('con1',user, token)
      setAuthorized(false)
    }
    if(token != null && user != null){
      console.log('con2',user, token)
      setAuthorized(true)
    }
  }

  React.useEffect(() => {
    SplashScreen.hide();
    CheckValues()
  });

  return (
    <>
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName={authorized?"Auth":"Home"}
          screenOptions={({route}) => ({
            tabBarStyle: {
            backgroundColor: '#2661c7',
            maxWidth:'88%',
            height:'8%',
            alignSelf:'center',
            borderRadius:10,
            marginBottom:15,
            position: 'absolute',
            left: 41,
            right: 0,
            bottom: 0,
            elevation: 0},
            tabBarButton: ["Auth","OTP","Agreement","NoWifi","RentOrTenancy","FormPrices","Status"].includes(route.name)
              ? () => {
                  return null;
                }
              : undefined,
          })}>

          {/* <Tab.Screen
            name="Auth"
              options={{
                headerShown: false,
                tabBarStyle: {display: 'none'}
              }}
            component={AuthScreen}
          />

          <Tab.Screen
            name="OTP"
              options={{
                headerShown: false,
                tabBarStyle: {display: 'none'}
              }}
            component={OTPScreen}
          /> */}
        
          <Tab.Screen
            name="Test"
            listeners={{
              tabPress: e => {
                // Prevent default action
                e.preventDefault();
              },
            }}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <View>
                  <Image
                    source={require('./assets/images/icons/filedown.png')}
                    style={{
                      tintColor:'#fda036',
                      height: 35,
                      width: 35,
                    }}
                  />
                </View>
              ),
            }}
            component={TestScreen}
          />

         <Tab.Screen
            name="Home"
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <View>
                  <Image
                    source={require('./assets/images/icons/homeicon.png')}
                    style={{
                      tintColor:'#fda036',
                      height: 35,
                      width: 35,
                    }}
                  />
                </View>
              ),
            }}
            component={HomeScreen}
          />

          <Tab.Screen
            name="Agreement"
              options={{
                headerShown: false,
                tabBarStyle: {display: 'none'}
              }}
            component={AgreementScreen}
          />

          <Tab.Screen
            name="FormPrices"
              options={{
                headerShown: false,
                tabBarStyle: {display: 'none'}
              }}
            component={FormPricesScreen}
          />
   
          <Tab.Screen
            name="Status"
              options={{
                headerShown: false,
                tabBarStyle: {display: 'none'}
              }}
            component={StatusScreen}
          />

          <Tab.Screen
            name="RentOrTenancy"
              options={{
                headerShown: false,
                tabBarStyle: {display: 'none'}
              }}
            component={RentOrTenancy}
          />

          <Tab.Screen
            name="Setting"
            listeners={{
              tabPress: e => {
                // Prevent default action
                e.preventDefault();
              },
            }}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <View>
                  <Image
                    source={require('./assets/images/icons/settings.png')}
                    style={{
                      tintColor:'#fda036',
                      height: 35,
                      width: 35,
                    }}
                  />
                </View>
              ),
            }}
            component={SettingScreen}
          />

          <Tab.Screen
            name="NoWifi"
              options={{
                headerShown: false,
                tabBarStyle: {display: 'none'}
              }}
            component={NoWifiScreen}
          /> 

        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </>
  );
}

export default App;
