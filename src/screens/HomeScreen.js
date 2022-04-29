import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.containerOptions}>

                <View style={styles.optionsLeft}>
                    <TouchableOpacity 
                        style={styles.containerImage}
                        onPress={ () => navigation.navigate('Agenda')}
                    >
                        <Image
                            source={ require('../assets/images/citas.jpeg')}
                            style={styles.img}
                        />
                        <Text styles={styles.textImg}>Agenda tu cita</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.containerImage}
                        onPress={ () => navigation.navigate('Reunion')}
                    >
                        <Image
                            source={ require('../assets/images/reunion.jpeg')}
                            style={styles.img}
                        />
                        <Text styles={styles.textImg}>Reunión</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.containerImage}
                        onPress={ () => navigation.navigate('Información')}
                    >
                        <Image
                            source={ require('../assets/images/informes.jpeg')}
                            style={styles.img}
                        />
                        <Text styles={styles.textImg}>Información</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerImage}>
                        <Image
                            source={ require('../assets/images/agradecimiento.jpeg')}
                            style={styles.img}
                        />
                        <Text styles={styles.textImg}>Agradecimientos</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.optionsRight}>
                    <TouchableOpacity style={styles.containerImage}>
                        <Image
                            source={ require('../assets/images/comoEstas.jpeg')}
                            style={styles.img}
                        />
                        <Text styles={styles.textImg}>¿Cómo estás?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.containerImage}
                        onPress={ () => navigation.navigate('Relajación')}
                    >
                        <Image
                            source={ require('../assets/images/relajacion.jpeg')}
                            style={styles.img}
                        />
                        <Text styles={styles.textImg}>Relajación</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerImage}>
                        <Image
                            source={ require('../assets/images/chat.jpeg')}
                            style={styles.img}
                        />
                        <Text styles={styles.textImg}>Chat general</Text>
                    </TouchableOpacity>

                    <View>
                        <TouchableOpacity style={styles.containerImage}>
                            <Image
                                source={ require('../assets/images/articulos.jpeg')}
                                style={styles.img}
                            />
                            <Text styles={styles.textImg}>Artículos bienestar</Text>
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
    containerOptions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexGrow: 1,
        width: '90%',
    },
    optionsLeft:{
        padding: 10,
        marginVertical: '10%',
        height: '90%',
        width: '45%',
    },
    optionsRight:{
        padding: 5,
        height: '90%',
        width: '45%',
    },
    containerImage: {
        marginTop: 10,
        marginBottom: 10,
        marginVertical: '10%',
        width: '100%',
        alignItems: 'center'
    },
    textImg: {
        fontSize: 15,
        fontWeight: 'bold',
        borderWidth: 2,
        borderTopColor: '#C24D28',
    },
    img: {
        width: '100%',
        height: 150,
        resizeMode: 'center'
    }
})

export default HomeScreen