import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "./screens/Login";

const Tab = createNativeStackNavigator()

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
