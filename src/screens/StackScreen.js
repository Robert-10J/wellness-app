import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const StackScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.buttonLogin}
            >
                <Text style={styles.textButton}>Politica de privacidad</Text>
            </TouchableOpacity>

             <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.textButton}>Condiciones de uso</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.textButton}>Preguntas Frecuentes</Text>
            </TouchableOpacity>
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
    buttonLogin: {
        marginTop: 35,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50
    },
    textButton: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#9aa7b2'
    }, 
})

export default StackScreen