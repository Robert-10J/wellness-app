import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>

            <View style={styles.containerData}>

                <AntDesign name="user" size={120} color="black" />

                <Text style={styles.text}>Nombre del usuario: Jesús Vargas</Text>
                <Text style={styles.text}>Número de teléfono: 7444103810</Text>
                <Text style={styles.text}>Email: correo@correo.com</Text>
                <Text style={styles.text}>Contraseña: *******</Text>

                <TouchableOpacity style={styles.buton}>
                    <Text style={styles.butonText}>Editar datos</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
        color: '#c24d28'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        paddingVertical: 50,
        width: '100%',
    },
    containerData: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        width: '90%',
    },
    containerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        width: '90%',
        borderWidth: 1,
        borderColor: 'black'
    },
    text: {
        fontSize: 20,
        marginTop: 15,
        marginBottom: 15,
    },
    buton: {
        width: '50%',
        alignItems: 'center',
        padding: 10,
        marginTop: 25
    },
    butonText: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#c24d28'
    }
})

export default ProfileScreen