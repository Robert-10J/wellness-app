import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const HowAreYou = () => {
    return (
        <View>
            <Text style={styles.text}>Agenda tu cita y encuentra psicólogos disponibles</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
})

export default HowAreYou