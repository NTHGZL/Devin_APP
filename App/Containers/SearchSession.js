import axios from 'axios'
import React from 'react'
import { Button, SafeAreaView, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


const SearchSession = () => {
    const [code, setCode] = React.useState('')

    return (
        <SafeAreaView>
            
            <TextInput  style={styles.textInput} onChangeText={(code)=> {
                setCode(code)
                
            }}/>
            <Button title="valider" onPress={async ()=>{
                const res = await axios.get('http://10.0.2.2:1337/sessions/609e7e428442fa003e4faaae')
                const data =  res.data;
                console.log(data)
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