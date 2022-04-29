import React from 'react'
import { Text, Pressable, TextInput , View, Alert, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Title from '../components/Title'

const RegisterScreen = () => {
    return(
        <View style={styles.container}>
            <Title />
            <View style={styles.form}>
                <Text style={styles.subtitle}>Registrate</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Escribe tu nombre'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Número de Teléfono'
                    keyboardType='number-pad'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Contraseña'
                />
                <Pressable style={styles.buttonRegister} onPress={ () => Alert.alert('Inisiando')}>
                    <Text style={ styles.textRegister}>Registrate</Text>
                </Pressable>
            </View>

            <View></View>
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
        marginTop: 25,
        marginBottom: 25
    },
    buttonRegister: {
        marginTop: 35,
        backgroundColor: '#C34D29',
        width: '100%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRegister: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },  
})

export default RegisterScreen