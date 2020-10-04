import React from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';

export default function Map() {
  return (
    <View>
      <Text>Hello from map view hello world</Text>
      <MapView
        style={{flex: 1}}
        showsUserLocation={true}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
