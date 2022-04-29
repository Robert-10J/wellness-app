import React from 'react'
import { Text, Pressable, TextInput, View, Alert, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Title from '../components/Title'

const LoginScreen = () => {
    return (
        <View style={ styles.container }>
            <Title/>

            <View style={ styles.form }>
                <Text style={ styles.subtitle }>Iniciar sesión</Text>
                <TextInput 
                    style={ styles.input } 
                    placeholder='Email' 
                    keyboardType='email-address'
                />
                <TextInput 
                    style={ styles.input } 
                    placeholder='Contraseña'   
                />
                <Pressable style={styles.buttonLogin} onPress={ () => Alert.alert('Inisiando')}> 
                    <Text style={styles.textButton}>Iniciar Sesión</Text>
                </Pressable>
            </View>

            <View style={ styles.register }>
                <Text 
                    style={ styles.label }
                >¿Aún no tienes una cuenta?</Text>

                <Pressable style={styles.buttonRegister} onPress={ () => Alert.alert('Inisiando')}>
                    <Text style={ styles.textRegister}>Registrate</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        marginTop: Constants.statusBarHeight,
    },
    form: {
        width: '90%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    subtitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        height: 60,
        width: '100%',
        marginTop: 30,
        marginBottom: 30
    },
    buttonLogin: {
        marginTop: 35,
        backgroundColor: '#C34D29',
        width: '100%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },  

    register: {
        marginTop: 150,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    buttonRegister :{
        height: 45,
        width: '50%',
    },
    textRegister: {
        color: '#C34D29',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15
    },
    label: {
        textAlign: 'center',
        fontSize: 17,
        marginTop: 25
    }
})

export default LoginScreen