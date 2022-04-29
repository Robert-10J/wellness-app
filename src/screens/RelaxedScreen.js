import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const RelaxedScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerOptions}>
                <View style={styles.containerLeft}>
                    <TouchableOpacity style={styles.option}>
                        <Image
                            source={ require('../assets/images/meditacion.jpeg')}
                            style={styles.img}
                        />
                        <Text style={styles.text}>Meditación guiada</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={ require('../assets/images/musicoterapia.jpeg')}
                            style={styles.img}
                        />
                        <Text style={styles.text}>Musicoterapia</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerRight}>
                    <TouchableOpacity>
                        <Image
                            source={ require('../assets/images/yoga.jpeg')}
                            style={styles.img}
                        />
                        <Text style={styles.text}>Yoga</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={ require('../assets/images/colorear.jpeg')}
                            style={styles.img}
                        />
                        <Text style={styles.text}>Colorear</Text>
                    </TouchableOpacity>
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
        marginVertical: 50
    },
    containerLeft :{
        padding: 10,
        marginVertical: '10%',
        height: '90%',
        width: '45%',
    },
    containerRight: {
        padding: 5,
        height: '90%',
        width: '45%',
        marginTop: 15
    },
    option:{
        marginTop: 15,
        marginBottom: 30
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color:  '#c24d28'
    },
    img: {
        width: '100%',
        height: 150,
        resizeMode: 'center'
    }
})

export default RelaxedScreen