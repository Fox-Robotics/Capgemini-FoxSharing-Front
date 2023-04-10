import React from 'react'
import Constants from 'expo-constants'
import {View, StatusBar} from 'react-native'
import Cuenta from './Cuenta'
import Home from "./Home"
import Historial from "./Historial"
import Wallet from "./Wallet"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

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
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'Historial':
                            iconName = 'list';
                            break;
                        case 'Wallet':
                            iconName = 'wallet';
                            break;
                        case 'Cuenta':
                            iconName = 'person';
                            break;
                        default:
                            break;
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#FFD151',
                tabBarInactiveTintColor: 'gray',
                })}
            >
            <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Tab.Screen name="Historial" component={Historial} />
            <Tab.Screen name="Wallet" component={Wallet} />
            <Tab.Screen name="Cuenta" component={Cuenta} />
            </Tab.Navigator>
        </View>
    )
}

export default Main