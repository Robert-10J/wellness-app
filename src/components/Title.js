import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Title = () => {
    return(
        <Text style={ styles.titulo }>Wellness</Text>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 50,
        marginBottom: 30,
    }
})

export default Title