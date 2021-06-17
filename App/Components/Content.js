import * as React from 'react'
import { Text, View, Button } from 'react-native'
import { useIndex } from '../Context/QuizContext'
import Question from './Question'

const Advice = ({body}) => {
    const {dispatch} = useIndex()
    return (
        <View>
            <Text>
                {body}
            </Text>
            <View>
                <Button title="Suivant"
                    onPress={ () => {
                            dispatch({type : "NEXT"}) 
                    }

                }/>
            </View>
        </View>
    )
}
const Content = ({content}) => {
    const {state : {index}} = useIndex()
    const {state : {isChosen}} = useIndex()
    const {state : {isValidate}} = useIndex()
    
    const {dispatch} = useIndex()
    return (
        <>
        <View>
            {content && content.type === "question" ? (
                <Question title={content.title} answers={content.answers} explication={content.explication} correctAnswer={content.correctAnswer}/>
            ) : (
                <Advice body={content.body}/>
            )}
        </View>
        
        </>
    )

}
export default Content