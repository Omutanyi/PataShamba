import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

export class Home extends Component {
  static navigationOptions = {
    left: null,
  };
  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onRegionChange(region) {
    this.setState({region});
  }
  render() {
    return (
      <View>
        <Text> Home </Text>
        <View>
          <MapView
            region={this.state.region}
            onRegionChange={this.onRegionChange}>
            {this.state.markers.map(marker => (
              <Marker
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
              />
            ))}
          </MapView>
        </View>
      </View>
    );
  }
}

export default Home;
