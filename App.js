import React from "react";
import Main from "./src/components/Main.jsx";
import { NavigationContainer } from "@react-navigation/native";
import LogIn from "./src/components/LogIn.jsx";
import Registro from "./src/components/Registro.jsx";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TwoFactorAuth from "./src/components/TwoFactorAuth.jsx";
import SheetContent from "./src/components/RenderContent.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Login" component = {LogIn}/>
        <Stack.Screen name = "Registro" component = {Registro}/>
        <Stack.Screen name = "Auth" component = {TwoFactorAuth}/>
        <Stack.Screen name = "Main" component = {Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
