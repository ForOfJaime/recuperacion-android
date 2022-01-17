import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, Image, Button, TextInput, FlatList, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from "react-native-vector-icons";
import {musicos} from "../Musicos/DatosMusicos";
import {styleResultadosBusqueda} from "../Estilo/estiloResultadosBusqueda";

export const DetailsScreen = ({ route }) => {
  const { z } = route.params;

  function FiltradoUsuarios({ item }) {
    if (item.instrumento == z) {
      return (
        <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 10, marginTop: 10 }}>
          <Image source={require('imagenes/user.png')} style={styleResultadosBusqueda.imagenUser} />
          <View>
            <Text style={{ fontFamily: 'Cochin', }}> {item.nombre} </Text>
            <Text style={{ fontFamily: 'Cochin', color: 'gray' }}> {item.edad} </Text>
            <Text style={{ fontFamily: 'Cochin', color: 'gray'}}> {item.instrumento} </Text>
            <Image source={{ uri: 'https://cpng.pikpng.com/pngl/s/363-3630181_de-venta-en-fondos-png-linea-azul-clipart.png' }} style={styleResultadosBusqueda.lineaSeparacion} />
          </View>
        </View>
      );
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Usuario filtrado: {route.params.numero}</Text>
      <FlatList data={musicos} renderItem={FiltradoUsuarios} keyExtractor={(item) => item.id}></FlatList>
    </View>
  );
}














