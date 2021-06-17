import axios from 'axios'
import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


const SearchSession = ({navigation}) => {
    const [code, setCode] = React.useState('')
    const [error, setError] = React.useState('')

    return (
        <SafeAreaView>
            
            <TextInput  style={styles.textInput} onChangeText={(code)=> {
                setCode(code)
                
            }}/>
            <Text>{error??''}</Text>
            <Button title="valider" onPress={async ()=>{

                try {
                    
                    const res = await axios.post('http://10.0.2.2:1337/codes/verification', {
                        "code" : code
                    })
                    const data =  res.data;
                    navigation.navigate('SessionScreen', {data})
                } catch (error) {
                 setError('Rentrez un code valide')
                }

                
            }}/>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    textInput: {
        borderColor: 'black',
        borderStyle: 'solid',
        borderBottomWidth : 1,
        width: 200,
        margin: 10,
    
      },
})
export default SearchSession