
import * as React from 'react'

import { View, Text, StyleSheet, Button } from 'react-native'
import { useIndex } from '../Context/QuizContext'

import Reponse from './Reponse'

const Question = ({title, answers, explication, correctAnswer}) => {
    const [choice, setChoice] = React.useState('')
    const [isChosen, hasChosen] = React.useState(false)
    const [showVerdict, setVisible] = React.useState(false)
    const [verdict, setVerdict] = React.useState('')
    
    
    const {dispatch} = useIndex()
    const handleChange = (key) => {
        setChoice(key)
        hasChosen(true)
        setVerdict(correctAnswer === key ? "Bien joué !" : "Mauvaise réponse !")
        console.log("Choix : "+key+", Bonne réponse : "+correctAnswer)


    }
    return (
        <View>
            {showVerdict ? (
                <>
                <Text>{verdict}</Text>
                <Text>
                    {explication}
                </Text>
                </>
            ) : (
                <>

                <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                </View>
                
                <View style={styles.answerContainer}>
                    {answers.map((answer, key)=> (
                        <Reponse key={key} answer={answer} handleChange={() => handleChange(key)}
                            color={choice === key ? '#FFFF00' : 'blue'}
                        />
                    ))}
                </View>
                
                </>
            )}
          <View>
                
                <Button title="Suivant" disabled={!isChosen}
                    onPress={ () => {
                        if(showVerdict){

                            dispatch({type : "NEXT"})
                            setVisible(false)
                            hasChosen(false)
                            setChoice('')
                        }else{
                            setVisible(true)
                        }
                    }

                }/>
            </View>
        </View>
    )
}

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
        height: 300
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

export default Question