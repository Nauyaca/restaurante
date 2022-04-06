import React, {useRef} from 'react'
import { StyleSheet, View, ScrollView, Text, Image} from 'react-native'
import {Divider} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

import LoginForm from '../../components/Account/LoginForm'


export default function Login(){
    const toastRef = useRef()
    return(
        <ScrollView>
            <Image
            source={require('../../../assets/img/302927040.png')}
            resizeMode='contain'
            Style={styles.logo}
        />

        <LoginForm toastRef = {toastRef}/>
        
        <View style={styles.viewContainer}>
            <Text>Login Form</Text>
            <CreateAccount />
        </View>
        <Toast ref={toastRef}/>
        <Divider style={styles} />
        </ScrollView>
    )
}

function CreateAccount(){
    const navigation = useNavigation ()
    return(
        <Text style = {styles.textRegister}>
            ¿Aùn no tienes cuenta mi bro? {' '}
            <Text
                 style = {styles.linkRegister}
                 onPress={()=>navigation.navigate('register')}
            >
            Registrate
            </Text>
        </Text>
    )
}

const styles =StyleSheet.create({
    logo:{
        width:'100%',
        height: 150,
        marginTop: 20
    },
    viewContainer:{
        marginRight:40,
        marginLeft:40
    },
    textRegister:{
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    linkRegister:{
        color:'#00a680',
        fontWeight: 'bold'
    }
})