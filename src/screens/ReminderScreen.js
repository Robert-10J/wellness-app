import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ReminderScreen = () => {
    return (
        <View>
            <Text style={styles.title}>Sin Notificaciones</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#c24d28',
        marginTop: 30,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 30
    },  
})

export default ReminderScreen