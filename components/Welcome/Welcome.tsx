import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import AppContext from '../context/index';

export default function Welcome() {
  const {updateDangerLevel, updateUserLocation} = useContext(AppContext);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `https://us-central1-vandycloudfires.cloudfunctions.net/shouldEvacuate?lon=${position.coords.longitude}&lat=${position.coords.latitude}`,
        )
          .then((res) => res.json())
          .then((data) => {
            updateUserLocation({
              long: position.coords.longitude,
              lat: position.coords.latitude,
            });
            updateDangerLevel(data.shouldEvacuate);
            console.log(position);
          })
          .catch((err) => console.error(err));
      },
      (error) => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.welcomeView}>
      <Text>Hello from welcome</Text>
      <Image source={require('./appLogo.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    maxWidth: '70%',
    maxHeight: '50%',
  },
});
