import * as React from 'react';
import { Text, View, Image, FlatList} from 'react-native';
import {musicos} from "../Musicos/DatosMusicos";


export const DetailsScreen = ({ route }) => {
  const { z } = route.params;

  function FiltradoUsuarios({ item }) {
    if (item.instrumento == z) {
      return (
        <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 10, marginTop: 10 }}>
          <Image source={require('../imagenes/user.png')} style={{width: 50, height: 50, marginRight: 5 }} />
          <View>
            <Text> {item.nombre} </Text>
            <Text style={{ color: 'gray' }}> {item.edad} </Text>
            <Text style={{ color: 'gray'}}> {item.instrumento} </Text>
            <Image source={{ uri: 'https://cpng.pikpng.com/pngl/s/363-3630181_de-venta-en-fondos-png-linea-azul-clipart.png' }} style={{height: 2, width: 300, marginBottom: 20}} />
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














