import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Navigation from '../../Navigation'
import * as Font from 'expo-font'

const Main = () => {

    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect( () => {
        if(!fontsLoaded) {
            loadFonts();
        }
    });

    const loadFonts = async () => {
        await Font.loadAsync({
            'roboto-regular': require('../assets/fonts/RobotoCondensed-Regular.ttf'),
        })

        setFontsLoaded(true);
    }

    if(!fontsLoaded) {
        return( <View/>)
    }

    return (
        <View style={ styles.container }>
            <Navigation/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        fontFamily: 'roboto-regular'
    }
})

export default Main