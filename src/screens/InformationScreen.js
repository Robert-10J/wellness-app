import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InformationScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.title}>Acerca de nosotros</Text>
                <Text style={styles.text}>
                Wellness App es una aplicación gratuita que procura la salud mental en 
                los jóvenes y adultos de Acapulco, Guerrero; conectándolos en consultas 
                privadas en línea con psicólogos profesionales para tratar los diferentes 
                problemas psicológicos, realizar diagnósticos clínicos, brindar orientación 
                y consejos, etcétera., funcionando las 24 horas del día.
                </Text>
            </View>

            <View style={styles.containerText}>
                <Text style={styles.title}>Misión</Text>
                <Text style={styles.text}>
                Ofrecer el servicio de atención psicológica gratuita a los jóvenes y adultos 
                del puerto de Acapulco por medio de consultas privadas en línea para tratar 
                las diversas problemáticas psicológicas.
                </Text>
            </View>

            <View style={styles.containerText}>
                <Text style={styles.title}>Visión</Text>
                <Text style={styles.text}>
                Llegar a más personas que necesitan este servicio en la sociedad acapulqueña, 
                contar con más psicólogos, lograr la implementación de la App en otros 
                gobiernos de la República.
                </Text>
            </View>

            <View style={styles.containerText}>
                <Text style={styles.title}>Oficina</Text>
            </View>

            <View style={styles.containerText}>
                <Text style={styles.title}>Teléfono</Text>
                <Text style={styles.text}>
                    744 408 9917 {''}
                    744 286 1137
                </Text>
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
        width: '100%',
        marginVertical: 50
    },
    containerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        width: '90%',        
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        color: '#c24d28',
        marginTop: 15        
    },
    text: {
        textAlign: 'justify',
        fontSize: 17        
    }
})

export default InformationScreen