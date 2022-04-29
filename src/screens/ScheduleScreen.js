import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const ScheduleScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.containerDate}>
                <Text style={styles.text}>Agenda tu cita y encuentra psicólogos disponibles</Text>
                <TouchableOpacity style={styles.buton}>
                    <Text style={styles.subtitle}>Elegir fecha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerCards}>
                <View style={styles.cardsLeft}>
                    <View style={styles.card}>
                        <AntDesign name="user" size={80} color="black" />
                        <Text style={styles.name}>Juan Villalobos</Text>
                        <Text>Cédula 37372</Text>
                        <TouchableOpacity style={styles.butonAgendar}>
                            <Text>Agendar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.butonInformacion}>Más Información</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <AntDesign name="user" size={80} color="black" />
                        <Text style={styles.name}>Jennifer Santos</Text>
                        <Text>Cédula 376554</Text>
                        <TouchableOpacity style={styles.butonAgendar}>
                            <Text>Agendar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.butonInformacion}>Más Información</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.cardsRight}>
                    <View style={styles.card}>
                            <AntDesign name="user" size={80} color="black" />
                            <Text style={styles.name}>Rashel Avila</Text>
                            <Text>Cédula 397445</Text>
                            <TouchableOpacity style={styles.butonAgendar}>
                                <Text>Agendar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.butonInformacion}>Más Información</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.card}>
                            <AntDesign name="user" size={80} color="black" />
                            <Text style={styles.name}>Victor Tacuba</Text>
                            <Text>Cédula 845684</Text>
                            <TouchableOpacity style={styles.butonAgendar}>
                                <Text>Agendar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.butonInformacion}>Más Información</Text>
                            </TouchableOpacity>
                        </View>
                </View>
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
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 25,
        color: '#c24d28'
    },
    buton: {
        flex: 1,
        alignItems: 'center',
        flexGrow: .2,
        marginTop: 25,
    },
    subtitle: {
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#cfa873'
    },
    containerCards: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexGrow: 1,
        width: '90%',
    },
    cardsLeft: {
        padding: 10,
        height: '90%',
        width: '45%',
    },
    cardsRight: {
        padding: 10,
        height: '90%',
        width: '45%',
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        width: '100%',
        padding: 10,
        paddingVertical: 10,
        borderWidth: 2,
        borderColor: '#d9d9d9',
        borderRadius: 10,
        marginBottom: 10,
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5
    },
    butonAgendar: {
        backgroundColor: '#d9d9d9',
        padding: 8,
        width: '70%',
        borderRadius: 6,
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 5
    },
    butonInformacion: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#9aa7b2',
        marginBottom: 5
    }
})

export default ScheduleScreen