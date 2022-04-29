import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './src/screens/HomeScreen'
import ReminderScreen from './src/screens/ReminderScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import StackScreen from './src/screens/StackScreen'
import ScheduleScreen from './src/screens/ScheduleScreen'
import InformationScreen from './src/screens/InformationScreen'
import MeetScreen from './src/screens/MeetScreen'
import RelaxedScreen from './src/screens/RelaxedScreen'


import { AntDesign } from '@expo/vector-icons';

const OptionsStack = createNativeStackNavigator();

function MyStack() {
    return (
        <OptionsStack.Navigator>
            <OptionsStack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />

            <OptionsStack.Screen
                name='Agenda'
                component={ScheduleScreen}
            />

            <OptionsStack.Screen
                name='Reunion'
                component={MeetScreen}
            />

            <OptionsStack.Screen
                name='Información'
                component={InformationScreen}
            />

            <OptionsStack.Screen
                name='Relajación'
                component={RelaxedScreen}
            />
        </OptionsStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
            initialRouteName='Menú'
            screenOptions={{
                tabBarActiveTintColor: '#C34D29',
                
            }}
        >
            <Tab.Screen 
                name='Menú' 
                component={MyStack}
                options={{
                    tabBarLabel: 'Opciones',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name='Perfil' 
                component={ProfileScreen}    
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name='Notificaciones' 
                component={ReminderScreen}
                options={{
                    tabBarLabel: 'Notificaciones',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="notification" size={30} color={color} />
                    ),
                    tabBarBadge: 0
                }}
            />
            <Tab.Screen 
                name='Información' 
                component={StackScreen}
                options={{
                    tabBarLabel: 'Más Opciones',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="menufold" size={30} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
