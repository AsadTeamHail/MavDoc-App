// In App.js in a new project

import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {Image, View} from 'react-native';

import HomeScreen from './components/screens/Home';
import SettingScreen from './components/screens/Home';
import TestScreen from './components/screens/Test';
import AuthScreen from './components/screens/Auth'
import OTPScreen from './components/screens/OTP';
import AgreementScreen from './components/screens/Agreement';
import NoWifiScreen from './components/screens/NoWifi';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

function App() {
  const Tab = createBottomTabNavigator();

  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <>
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
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
            tabBarButton: ["Auth","OTP","Agreement","NoWifi"].includes(route.name)
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
            name="Home"
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <View>
                  <Image
                    source={require('./assets/images/icons/homeicon.png')}
                    style={{
                      tintColor:'#d6b409',
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
            name="Test"
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <View>
                  <Image
                    source={require('./assets/images/icons/filedown.png')}
                    style={{
                      tintColor:'#d6b409',
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
            name="Agreement"
              options={{
                headerShown: false,
                tabBarStyle: {display: 'none'}
              }}
            component={AgreementScreen}
          />

          <Tab.Screen
            name="Setting"
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <View>
                  <Image
                    source={require('./assets/images/icons/settings.png')}
                    style={{
                      tintColor:'#d6b409',
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
