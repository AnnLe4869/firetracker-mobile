import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import AppContext from '../context/index';

export default function Welcome() {
  const {updateDangerLevel} = useContext(AppContext);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `/userLocation?long=${position.coords.longitude}lat=${position.coords.latitude}`,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
              lat: position.coords.latitude,
              long: position.coords.longitude,
            }),
          },
        )
          .then((res) => res.json())
          .then((data) => updateDangerLevel(data.shouldEvacuate))
          .catch((err) => console.error(err));
      },
      (error) => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, [updateDangerLevel]);

  return (
    <View style={styles.welcomeView}>
      <Text>Hello from welcome</Text>
      {/* <Image source={require("../../assets/appLogo.png")} style={styles.logo} /> */}
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
