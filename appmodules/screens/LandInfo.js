/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import axios from 'axios';
import {SliderBox} from 'react-native-image-slider-box';

const {width: WIDTH} = Dimensions.get('window');
const BaseUrl = 'http://192.168.0.101:8000';

class LandInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.route.params.landData,
      imageData: [],
      images: [],
    };
  }

  componentDidMount() {
    this.FetchImages();
  }

  initiatePurchase = () => {
    // if (this.state.data.purchase_initiated === true) {
    //   this.moveToBidding();
    // } else {
    // set to true,
    // axios({
    //   method: 'put',
    //   url: '',
    //   data: datax.land_id,
    //   headers: {
    //     Accept: 'application/json',
    //   },
    // }).then(response => {
    //   Alert.alert('Successfull', 'Data posted successfully', response, [
    //     {
    //       Text: 'Okay',
    //     },
    //   ]);
    // });
    // start counter time,// make land bidding // go to bidding
    // }
  };

  async FetchImages() {
    await axios
      .get(
        `http://192.168.0.101:8000/lands/SearchImage/${
          this.state.data.land_id
        }`,
      )
      // .then(res => res.json())
      .then(res => {
        const imageSearchRes = res.data;
        //console.log('imageSearchRes...', imageSearchRes);
        //this.setState({loading: true});
        var images = [];
        imageSearchRes.forEach(item => {
          images.push(BaseUrl + item.image);
        });
        this.setState({images: images});
      })
      .catch(error => {
        console.log('Error fetching image Res', error.response.data);
      });

    //this.RenderImages();
  }

  moveToBidding = () => {
    console.log('moving to bidding');
    this.props.navigation.navigate('Bidding', {
      initial_price: this.state.data.price,
    });
  };

  RenderImages = () => {
    var images = this.state.images;
    if (images == null) images = [];
    if (images.length === 0) {
      return <Text>No images found</Text>;
    } else {
      return images.map(image => {
        return (
          <SliderBox
            images={[image]}
            sliderBoxHeight={200}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            dotColor="#FFC107"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              // position: 'absolute',
              bottom: 0,
              padding: 0,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 7,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: 'rgba(128, 128, 128, 0.92)',
            }}
            ImageComponentStyle={{
              borderRadius: 15,
              width: '60%',
              marginTop: 5,
            }}
            imageLoadingColor="#FFC107"
          />
        );
      });
    }
  };

  render() {
    console.log('ren imageData..', this.state.imageData);

    return (
      <ScrollView style={styles.primaryView}>
        <View style={styles.body}>
          <View style={styles.mapContainer}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              customMapStyle={this.mapStyle}
              initialRegion={{
                latitude: this.state.data.lat,
                longitude: this.state.data.lon,
                latitudeDelta: 0.25,
                longitudeDelta: 0.25,
              }}>
              <Marker
                coordinate={{
                  latitude: this.state.data.lat,
                  longitude: this.state.data.lon,
                }}
                key={this.state.data.land_id}
              />
            </MapView>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoText}>{this.state.data.size}</Text>
            <Text style={styles.divider}>|</Text>
            <Text style={styles.infoText}>{this.state.data.likes} likes</Text>
            <Text style={styles.divider}>|</Text>
            <Text style={styles.infoText}>{this.state.data.town}</Text>
          </View>

          <View style={styles.description}>
            <Text style={styles.descText}>{this.state.data.description}</Text>
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
            <View>{this.RenderImages()}</View>
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
  primaryView: {
    backgroundColor: '#C8E6C9',
  },

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
    fontWeight: '300',
    top: 10,
    fontSize: 13,
    fontFamily: 'notoserif',
    color: '#757575',
    padding: 10,
    paddingRight: 20,
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
