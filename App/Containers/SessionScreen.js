
import * as React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Content from '../Components/Content'

import { IndexProvider, useIndex } from '../Context/QuizContext'
import { session } from '../Data/data'

const Session = () => {
    const {state : {index}} = useIndex()
    
    const allContents = session;
    const currentContent = allContents[index]
    return (
        <SafeAreaView>
            {index < allContents.length ? (

            <Content content={currentContent} />
            ) : (
                <EndScreen />
            )}
        </SafeAreaView>
    )

} 
const EndScreen = () => {
    return (
        <View>
            <Text>Vous avez fini la séance !</Text>
            <Text>Rendez vous sur la page suivante pour découvrir votre fiche technique ;)</Text>
            <Button title="Découvrir ma bouteille" />
        </View>
    )
}
const SessionScreen = () => {
    
    return (
        <IndexProvider>
            
                <Session />
          
            
        </IndexProvider>
    )
}


export {SessionScreen}

const styles = StyleSheet.create({
    titleContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    title: {
        fontSize: 20,
    },
    answerContainer: {
        
        flexDirection: 'column',
        width: '100%',
        height: 200
    },
    button : {
        
        backgroundColor: 'blue',
        margin : 2,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    chosenButton : {
        backgroundColor : '#FFFF00',
        color: 'black',
        margin: 2,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nextButton: {
        height: 50,
        backgroundColor:'green',
        
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default SessionScreen