import React from "react"
import { StyleSheet, View, Text, Image} from 'react-native'
import RegisterForm from "../../components/Account/RegisterForm"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Register(){
    return(
        <KeyboardAwareScrollView>
            <Image
                source={require('../../../assets/img/302927040.png')}
                resizeMode='contain'
                Style={styles.logo}
                />
            <View style = {styles.viewForms}>
                <RegisterForm/>
            </View>
        </KeyboardAwareScrollView>
    )

    
}

const styles = StyleSheet.create({
    viewForms:{
        marginRight: 40,
        marginLeft: 40 
    },
    logo:{
        width:'100%',
        height: 50,
        marginTop: 20
    }
})