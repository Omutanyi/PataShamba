import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';

const {width: WIDTH} = Dimensions.get('window');

class LandInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.route.params.landData,
    };
  }
  render() {
    console.log(this.state.data);
    return (
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.mapContainer}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              customMapStyle={this.mapStyle}
              initialRegion={{
                latitude: -1.301681,
                longitude: 36.874245,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}>
              {/* {this.state.markers.map(marker => (
              <MapView.Marker
                coordinate={{
                  latitude: marker._latitude,
                  longitude: marker._longitude,
                }}
                title={marker.size}
              />
            ))} */}
            </MapView>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoText}>{this.state.data.Location}</Text>
            <Text style={styles.divider}>|</Text>
            <Text style={styles.infoText}>{this.state.data.Size}</Text>
            <Text style={styles.divider}>|</Text>
            <Text style={styles.infoText}>{this.state.data.Price}</Text>
          </View>

          <View style={styles.description}>
            <Text style={styles.descText}>{this.state.data.Description}</Text>
            <View style={styles.btnView}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>VIEW DOCS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>SAVE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>LIKE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>SHARE</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.purchaseBtn}>
              <Text style={styles.purText}>PURCHASE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    height: 600,
    width: WIDTH,
    backgroundColor: '#FFFFFF',
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 150,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  infoCard: {
    height: 35,
    width: WIDTH - 90,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 30,
    top: 140,
    left: 45,
    bottom: 5,
    backgroundColor: '#C8E6C9',
  },

  divider: {
    color: 'black',
    left: 5,
  },

  infoText: {
    width: '25%',
    left: 15,
    color: 'black',
    fontWeight: '400',
    fontSize: 13,
  },

  descText: {
    fontWeight: '400',
    fontSize: 16,
  },

  description: {
    width: WIDTH,
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    top: 160,
    bottom: 5,
  },

  btnView: {
    flexDirection: 'row',
    top: 10,
  },

  btn: {
    backgroundColor: '#C8E6C9',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    right: 10,
    color: '#FFC107',
    marginLeft: 20,
  },

  btnTxt: {
    color: 'black',
    fontWeight: '300',
    fontSize: 13,
  },

  purchaseBtn: {
    backgroundColor: '#FFC107',
    width: WIDTH - 200,
    height: 45,
    borderRadius: 0,
    marginTop: 35,
    color: 'white',
    marginHorizontal: 25,
    alignItems: 'center',
    alignSelf: 'center',
    backfaceVisibility: 'hidden',
  },

  purText: {
    fontWeight: '500',
    fontSize: 17,
    top: 10,
    left: 0,
    right: 10,
    fontFamily: 'notoserif',
    color: '#FFFFFF',
  },
});

export default LandInfo;
