import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';

export class Home extends Component {
  render() {
    return (
      <View>
        <Text> Home </Text>
        <View>
          <MapView
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Home;
