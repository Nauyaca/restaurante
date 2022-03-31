import React from 'react'
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native'
import {Button }from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UserGuest(){
    const navigation = useNavigation()
    return(
        <ScrollView style={StyleSheet.container}>
            <Image
            style={styles.stretch}
            source={require('../../../assets/img/302927040.png')}
            />
            <Text style={styles.title}>Ingresa a tu perfil</Text>
            <Text style={styles.description}>
                Busca y visualiza las mejores opciones en restaurantes de tu ciudad, no olvides puntuar tus favoritos
        
                </Text>
                <View style= {styles.viewBtn}>
         <Button
         title='ver tu perfil'
              buttonstyle={styles.btnStyle}
              containerStyle={styles.btnContainer}
              onPress={()=>navigation.navigate('login')}
         /> 
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 10
    },
    stretch:{
        width:'100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 40
    },
    title:{
        fontWeight:'bold',
        fontSize: 19,
        marginBottom: 10,
        textAlign:'Center'
    },
    description:{
    marginBottom:20,
    textAlign: 'center'
     },
     viewBtn:{
         flex:1,alignItems: 'center'
     },
     btnStyle:{
         backgroundColor:'#00a680'
     },
     btnContainer:{
         width:'70%'
     }
})