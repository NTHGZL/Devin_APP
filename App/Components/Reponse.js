import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Reponse = ({answer, handleChange, color}) => {
    

    const styles = StyleSheet.create({
        button : {
            
            backgroundColor: color,
            
            margin : 2,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text : {
            color: color === 'blue' ? 'white' : 'black',
        }
        
    })


    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={handleChange}>
                <Text style={styles.text}>{answer.title}</Text>
            </TouchableOpacity>
        </View>
    )
}



export default Reponse