import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import { AuthContext } from '../Context/AuthContext'

const HomeScreen = ({navigation}) => {
const {signOut} = React.useContext(AuthContext);
    return (
        <SafeAreaView>

            <Text style={{fontSize: 20}}>HOME PAGE</Text>
            <Button title='commencer une séance' onPress={()=>
                navigation.navigate('SearchSession')
            }/>
            <Button title='se deconnecter' onPress={()=>{
                signOut()
            } }/>
        </SafeAreaView>
    )
}
export default HomeScreen