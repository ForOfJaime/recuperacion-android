import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, Image, Button, TextInput, FlatList, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from "react-native-vector-icons";
import {HistoriaScreen} from "./funciones/historia";
import {SettingsScreen} from "./funciones/usuarios";
import {DetailsScreen} from "./funciones/ResultadosBusqueda";



const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Listado De Usuarios" component={SettingsScreen} options={{ headerStyle: {backgroundColor: '#58E209', titleMargin: 150}, headerTitleAlign: 'center'}}/>
      <SettingsStack.Screen name="Busqueda" component={DetailsScreen} options={{ title: 'Listado De Usuarios', headerStyle: {backgroundColor: '#58E209'}, headerTitleAlign: 'center'}} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: '#58a203',
        inactiveBackgroundColor: '#58E209',
        style: {
          backgroundColor: '#58E209',
          paddingBottom: 3
        }
    }}> 

        <Tab.Screen name="Historia" component={HistoriaScreen} options={{ headerStyle: {backgroundColor: '#58E209'}, headerTitleAlign: 'center', tabBarIcon:(tabInfo) => ( <MaterialIcons name="home" size={25} color={tabInfo.tintColor} /> ),}} />

        <Tab.Screen name="Musicos" component={SettingsStackScreen} options={{  headerShown: false,tabBarIcon: (tabInfo) => (<MaterialIcons name="archive" size={25} color= {tabInfo.tintColor} /> ),}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}