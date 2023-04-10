import React from 'react'
import Constants from 'expo-constants'
import {View, StatusBar} from 'react-native'
import Cuenta from './Cuenta'
import Home from "./Home"
import Historial from "./Historial"
import Wallet from "./Wallet"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
    return(
        <View style = {{marginTop : Constants.statusBarHeight, flexGrow : 1}}>
            <StatusBar
                barStyle = "dark-content"
                translucent = {false}
                hidden={false}
            />
            <Tab.Navigator
                screenOptions={ ( { route }) => ({
                    tabBarActiveTintColor: '#FFD151',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Historial" component={Historial} />
            <Tab.Screen name="Wallet" component={Wallet} />
            <Tab.Screen name="Cuenta" component={Cuenta} />
            </Tab.Navigator>
        </View>
    )
}

export default Main;