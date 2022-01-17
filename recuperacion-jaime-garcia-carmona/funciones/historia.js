import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, Image, Button, TextInput, FlatList, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from "react-native-vector-icons";
import {styleHistoria} from "../Estilo/estiloHistoria";

export const HistoriaScreen = ({ navigation }) =>{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView>
        <Text style={styleHistoria.textEncavezados}>bienvenido a la historia de los dispositivos</Text>
        <Text style={styleHistoria.textTitulo}>Nokia</Text>
        <Image source={require('imagenes/movil1.png')} style={styleHistoria.foto1} />
        <View style={{flexDirection: 'row'} }>
          <Text style={styleHistoria.textInfo}>Fecha de lanzamiento: </Text><Text style={styleHistoria.textdescripcion}>1999</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styleHistoria.textInfo}>Historia: </Text><Text style={styleHistoria.textdescripcion}>La empresa vivió una rápida transnacionalización si se toma en cuenta que en 1986 el 41 por ciento de sus ventas se concentraba en Finlandia, para diez años más tarde, colocar ahí solo el 6 por  ciento. En 1998, Bill Gates se puso en contacto con el presidente de Nokia para plantearle la conveniencia de crear un sistema operativo conjunto entre Nokia y Microsoft, destinado a dominar el mundo de la telefonía como lo había hecho Windows con el de los PC. El proyecto nunca se inició y Nokia lideró un grupo de empresas formado además por Motorola, Panasonic, Sony, Psion y Siemens del cual nació Symbian OS. </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styleHistoria.textInfo}>Conclusion: </Text><Text style={styleHistoria.textdescripcion}>Fue uno de los dispositivos moviles mas revolucionarios y que mas famoso por su resistencia</Text>
        </View>
         <Text style={styleHistoria.textTitulo}>Iphone 4</Text>
         <Image source={require('imagenes/movil2.png')} style={styleHistoria.foto2} />
         <View style={{flexDirection: 'row'} }>
          <Text style={styleHistoria.textInfo}>Fecha de lanzamiento: </Text><Text style={styleHistoria.textdescripcion}>2010</Text>
        </View>
        <View style={{flexDirection: 'row'} }>
          <Text style={styleHistoria.textInfo}>Historia: </Text><Text style={styleHistoria.textdescripcion}>El 19 de abril del 2010, el sitio web Gizmodo publicó que había comprado un prototipo de iPhone por 5.000 dólares y que lo habían desmontado. El prototipo lo había perdido el empleado de Foxconn, Sun Danyong, un hombre de 25 años, que se suicidó en julio de 2009 después de informar de la pérdida del prototipo en su poder. Poco tiempo después, Gizmodo publicó información detallada sobre el prototipo. Los socios legales de Apple Inc. solicitaron formalmente que el teléfono se devolviera a Apple Inc., y Gizmodo respondió con la intención de cooperar.

Como ha especificado Apple, la versión del teléfono en color blanco daba problemas con el funcionamiento normal del teléfono, lo que retrasó su salida al mercado. En España, el iPhone 4 blanco se lanzó a través de la tienda Apple el 28 de abril de 2011.1​</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styleHistoria.textInfo}>Conclusion: </Text><Text style={styleHistoria.textdescripcion}>Fue el primer smartphone que gano una seria popularidad y lanzo a la compañia apple</Text>
        </View>
        <Text style={styleHistoria.textTitulo}>Huawey P30 Pro</Text>
         <Image source={require('imagenes/movil3.png')} style={styleHistoria.foto3} />
          <View style={{flexDirection: 'row'} }>
          <Text style={styleHistoria.textInfo}>Fecha de lanzamiento: </Text><Text style={styleHistoria.textdescripcion}>2020</Text>
        </View>
         <View style={{flexDirection: 'row'} }>
          <Text style={styleHistoria.textInfo}>Historia: </Text><Text style={styleHistoria.textdescripcion}>Los P40 y P40 Pro están construidos con aluminio anodizado para el marco, mientras que la parte posterior utiliza Gorilla Glass. El P40 Pro+ utiliza cerámica tanto para el marco como para la parte posterior. La pantalla es plana en la P40 y curva en todos los lados en la P40 Pro y la P40 Pro+; Huawei llama a esto una pantalla de desbordamiento de cuatro curvas. La esquina superior izquierda de la pantalla tiene un recorte en forma de píldora para la cámara frontal y los sensores de ambiente/proximidad; también se adapta al sistema de desbloqueo de la cara infrarroja en el P40 Pro y el P40 Pro+. Al igual que en el P30 Pro, el P40 Pro y el P40 Pro+ reemplazan el altavoz tradicional del auricular con un altavoz de "levitación electromagnética" que vibra la parte superior de la pantalla del teléfono y tiene un bláster IR en el borde superior. Un módulo rectangular alberga las cámaras traseras, que sobresalen ligeramente del panel trasero. Los P40 y P40 Pro están disponibles en Silver Frost, Blush Gold, Deep Sea Blue, Ice White y Black, mientras que el P40 Pro+ está disponible en Ceramic White o Ceramic Black. Además, el P40 tiene una clasificación IP53, mientras que el P40 Pro y el P40 Pro+ tienen una clasificación IP68.</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styleHistoria.textInfo}>Conclusion: </Text><Text style={styleHistoria.textdescripcion}>Es el primer movil de la mara huawey que ya no podia utilizar los servicios de google pero se consiguio posicionar en el mercado con exito y esta considerado como uno de los mejores actualmente incluso dos años despues de su lanzamiento</Text>
        </View>
      </ScrollView>
    </View>
  );
}

