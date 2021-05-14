import * as React from 'react'
import {StyleSheet, SafeAreaView, TextInput, Text, Button} from 'react-native'
import { AuthContext } from '../Context/AuthContext';
const LoginScreen = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext);
  
    return (
        <SafeAreaView style={styles.container}> 
          <Text>Bienvenue sur l'application Devin</Text>
          <TextInput style={styles.textInput} placeholder='Entrez votre mail'/>
          <TextInput style={styles.textInput} placeholder='Entrez votre mot de passe'/>
          <Button title='Se connecter' style={styles.buttonStyle} onPress={()=>{
            signIn('sisi');
          } }/>
          <Button title="S'inscire" onPress={()=>{
            
            navigation.navigate('Register')
            
          }} />
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        margin:0,
        height:'100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems : 'center'
      },
      textInput: {
        borderColor: 'black',
        borderStyle: 'solid',
        borderBottomWidth : 1,
        width: 200,
        margin: 10,
    
      },
      buttonStyle:{
        margin: 50
      }
     
    });
export default LoginScreen