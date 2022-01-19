import * as React from 'react';
import { Text, View, Image, Button, TextInput, FlatList, ScrollView} from 'react-native';
import {musicos} from "../Musicos/DatosMusicos";
import {styleUsuarios} from "../Estilo/estiloUsuarios";

export const SettingsScreen = ({ navigation, route }) => {
  const [instrumento, instrumentoSeleccionado] = React.useState('');
  const RenderItem = ({ item }) => (
    <View style={{flexDirection: 'row', marginLeft: 10, marginBottom: 10, marginTop: 10}}>
      <Image source={require('../imagenes/user.png')} style={styleUsuarios.imagenUser} />
      <View>
        <Text style={styleUsuarios.nombres}> {item.nombre} </Text>
        <Text style={styleUsuarios.instrumentos}> {item.instrumento} </Text>
        <Image source={{uri: 'https://cpng.pikpng.com/pngl/s/363-3630181_de-venta-en-fondos-png-linea-azul-clipart.png'}} style={styleUsuarios.lineaSeparacion} />
      </View>
    </View>
  );
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ paddingTop: 50 }}>
        <Text style={styleUsuarios.tituloPagina}> Busqueda de usuarios </Text>
        <TextInput onChangeText={(x) => instrumentoSeleccionado(x)} placeholder="Buscar Por Instrumento" style={styleUsuarios.estiloEntradaTexto} />
        <Button title="Buscar" color="#58a203" onPress={() => navigation.navigate('Busqueda', { z: instrumento })} />
        <FlatList data={musicos} renderItem={RenderItem} keyExtractor={(item) => item.id}> marginTop: 25 </FlatList>
      </View>
    </ScrollView>
  );
}





















