import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, SafeAreaView, DatePickerAndroidStatic, View, Button} from 'react-native'
import DatePicker from 'react-native-date-picker'
import { AuthContext } from '../Context/AuthContext';

import Login from './login';

const Register = ({navigation}) => {

    
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setMail] = useState('')
    const [birthday, setBirthday] = useState(new Date())
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {signUp} = React.useContext(AuthContext)

   
    return (
        <>
            <Text>S'inscrire</Text>
            <TextInput placeholder='Entrez votre nom' onChangeText={
                name => setLastName(name)
            }/>
            <TextInput placeholder='Entrez votre prénom' onChangeText={
                name => setFirstName(name)
            }/>
              <TextInput placeholder='Entrez votre psuedo' onChangeText={
                name => setUserName(name)
            }/>
             <TextInput placeholder='Entrez votre mot de passe'  
             keyboardType='visible-password'
             onChangeText={
                name => setPassword(name)
            }/>
            
             
            <DatePicker date={birthday} mode={'date'} androidVariant={'nativeAndroid'} locale='fr'
                onDateChange={date=>setBirthday(date)}
            />
            
        
            <TextInput 
                placeholder='Entrez votre mail' 
                onChangeText={mail => setMail(mail)}
                keyboardType='email-address'
                />
            <Button title='Valider' onPress={()=>{

                signUp({username, email, password, birthday, lastname, firstname})
            }
            }/>
            <Button title="Déjà un compte ?" onPress={()=>{
                
                navigation.navigate('Login')
            }} />
            
        </>
       
    )
}

export default Register