import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image} from 'react-native'
import {Divider} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Login(){
    const navigation = useNavigation()
    return(
        <ScrollView>
            <Image
            source={require('../../../assets/img/61k3PlzSg5L._AC_SL1200_.jpg')}
            resizeMode='contain'
            Style={styles.logo}
        />

        <View style={styles.viewContainer}>
            <Text>Login Form</Text>
            <CreateAccount/>
        </View>
        <Divider style={styles} />
        </ScrollView>
    )
}

function CreateAccount(){
    return(
        <Text style = {styles.textRegister}>
            ¿Aùn no tienes cuenta mi bro? {' '}
            <Text
                 style = {styles.linkRegister}
                 onPress={()=>navigation.navigate('register')}
            >
            Sing up
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