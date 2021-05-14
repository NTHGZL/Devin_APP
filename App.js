/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './App/Containers/login';
import RegisterScreen from './App/Containers/register';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './App/Containers/HomeScreen';
import EncryptedStorage from 'react-native-encrypted-storage'
import { useMemo } from 'react';
import { AuthContext } from './App/Context/AuthContext';
import axios from 'axios'
import SplashScreen from './App/Containers/SplashScreen';
import SearchSession from './App/Containers/SearchSession';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch(action.type){
        case 'RESTORE_TOKEN' : 
        return {
          ...prevState,
          userToken : action.token,
          isLoading: false,
        };
        case 'SIGN_IN' :
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          }
        case 'SIGN_OUT' : 
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };  
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null
    }
  )

  React.useEffect(()=>{
    const boostrapAsync = async () => {
      let userToken;

      try {
        userToken = await EncryptedStorage.getItem('userToken')
        
      } catch (error) {
        console.error(error)
      }

      dispatch({type: 'RESTORE_TOKEN', token: userToken});

    };

    boostrapAsync();
  }, [])

  const authContext = React.useMemo(
    ()=>({
      signIn: async data => {
        const user = {
          identifier : 'nathan_gonzalez@hotmail.fr',
          password : 'Test44500!',
        }

        const res = await axios.post('http://10.0.2.2:1337/auth/local', user)
        
        const token = await res.data?.jwt || null
        console.log(token)
        if(token){
          EncryptedStorage.setItem('userToken', token)
        }

        dispatch({type: 'SIGN_IN', token: token})
      },
      signOut: ()=>{
        EncryptedStorage.removeItem('userToken');
        dispatch({type: 'SIGN_OUT'})
      },
      signUp: async data => {
        try{
          const user = {
            "username": "Znat45666oppdhfbNNNnxxgd56an",
            "password": "Test44500!", 
            "birthday": "1993-10-30T17:30:00.000Z", 
            "email": "nathan_gonzalez@hotmail.fr", 
            "firstname": "Nathan", 
            "lastname": "Gonzalez"
          }
          
          const res = await axios.post('http://10.0.2.2:1337/auth/local/register', user)

        console.log(res.data)
        }catch(error){
          console.error(error)
        }
        // dispatch({type: 'SIGN_IN', token: 'dummy_token'})
      },
    })
  )
    if(state.isLoading){
      return <SplashScreen />
    }
  return (
    <AuthContext.Provider value={authContext}>

    <NavigationContainer>

    <Stack.Navigator>
      {state.userToken == null ? (
        <>
        <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </>
      ):(
        <>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="SearchSession" component={SearchSession}/>
        </>
      )}
        
    </Stack.Navigator>
    </NavigationContainer>
    
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    margin:0,
    
  },
  
 
});

export default App;
