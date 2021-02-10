/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  Platform,
  PermissionsAndroid,
  StyleSheet,
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import firestore from '@react-native-firebase/firestore';
import fire from '/home/javier/final_Project/PataShamba/src/config.js';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      region: {
        longitude: 0,
        latitude: 0,
        longitudeDelta: 0.004,
        latitudeDelta: 0.009,
      },
    };
    // if (Platform.OS === 'android') {
    //         this.requestLocationPermission();
    //     }
  }

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        {
          title: 'PataShamba App',
          message: 'PataShamba App access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  mapStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#ebe3cd',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#523735',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#f5f1e6',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#c9b2a6',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#dcd2be',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#ae9e90',
        },
      ],
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dfd2ae',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dfd2ae',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#93817c',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#a5b076',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#447530',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f1e6',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          color: '#fdfcf8',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#f8c967',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#e9bc62',
        },
      ],
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e98d58',
        },
      ],
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#db8555',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#806b63',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dfd2ae',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#8f7d77',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#ebe3cd',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dfd2ae',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#b9d3c2',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#92998d',
        },
      ],
    },
  ];

  async componentDidMount() {
    // let landId = [];
    let marks = [];
    // await firestore()
    //   .collection('Lands')
    //   .get()
    //   .then(querySnapshot => {
    //     console.log('Total lands: ', querySnapshot.size);

    //     querySnapshot.forEach(documentSnapshot => {
    //       // console.log('Land ID: ', documentSnapshot.id, documentSnapshot.data());
    //       landId.push(documentSnapshot.id);
    //     });
    //   });

    // console.log('lands :', landId);
    // var idArray = landId.length;
    // for (var i = 0; i < idArray; i++) {
    //   await firestore()
    //     .collection('Lands')
    //     .doc(landId[i])
    //     .collection('location')
    //     .doc('coords')
    //     .get()
    //     .then(locationShot => {
    //       console.log('Loc shot: ', locationShot.data().map);
    //       var mapMarker = locationShot.data().map;
    //       console.log('mapMarker shot: ', mapMarker);
    //       marks.push(mapMarker);
    //     });
    // }

    // this.setState({markers: marks});

    await axios
      .get('http://192.168.0.101:8000/lands/')
      .then(res => {
        const landRes = res.data;
        console.log('land data', landRes);
        landRes.forEach(documentSnapshot => {
          //  console.log('landRes lats: ', documentSnapshot.lat);
          marks.push(documentSnapshot);
        });
        this.setState({markers: marks});
      })
      .catch(error => {
        console.log('Error fetching doc', error);
      });
  }

  RenderMarkers = () => {
    var markers = this.state.markers;
    console.log(markers);
    console.log('renmarks', markers);
     if (markers.length === 0) {
      return (
        <Marker
          coordinate={{latitude: -1.301681, longitude: 36.874245}}
          key={'none'}
        />
      );
    } else {
      return (
          this.state.markers.map(pin => (
           <MapView.Marker
              coordinate={{latitude: pin.lat, longitude: pin.lon}}
              key={pin.land_id}
              pinColor={'black'}
              onPress={() => this.props.navigation.navigate('LandInfo', {landData: pin})}
            />
          ))
      );
     }
  };

  render() {
    console.log(this.state.markers);
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={this.mapStyle}
          initialRegion={{
            latitude: -1.301681,
            longitude: 36.874245,
            latitudeDelta: 0.35,
            longitudeDelta: 0.321,
          }}
        >
          {this.RenderMarkers()}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

// circle: {
//     width: 30,
//     height: 30,
//     borderRadius: 30 / 2,
//     backgroundColor: '#388E3C',
// },
// pinText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 12,
//     marginBottom: 10,
// },
});

export default Home;
