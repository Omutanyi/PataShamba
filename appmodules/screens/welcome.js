/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {s} from '/home/javier/final_Project/PataShamba/components/styles/backbonestyles.js';
import Spinner from 'react-native-loading-spinner-overlay';

const {width: WIDTH} = Dimensions.get('window');
const d = Dimensions.get('window');

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // spinner: false,
      images: [
        'https://images.unsplash.com/photo-1554129351-dd3625ed5f30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1562939568-91cdb83881ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1572109646045-7cce4196cfd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1518655513281-e90740bd56b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      ],
    };
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({
  //       spinner: !this.state.spinner,
  //     });
  //   }, 3000);
  // }
  render() {
    return (
      <View style={welcome.primaryView}>
        <Image
          source={{
            uri:
              'https://logopond.com/logos/c7e0af2452441e2ca3288316592d6399.png',
          }}
          style={[
            {
              width: 35,
              height: 35,
              borderRadius: 50,
              alignSelf: 'center',
              bottom: 10,
            },
          ]}
        />
        <Text style={welcome.titleText}>PATA SHAMBA</Text>
        <Text style={welcome.primaryText}>
          The solution to all your land aspirations
        </Text>
        <SliderBox
          images={this.state.images}
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
            position: 'absolute',
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
          ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
          imageLoadingColor="#FFC107"
        />
        <TouchableOpacity
          style={welcome.loginBtn}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={welcome.btnText}>LOGIN</Text>
          {/* <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            textStyle={welcome.spinnerTextStyle}
          /> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={welcome.signupBtn}
          onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={welcome.btnText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const welcome = StyleSheet.create({
  primaryView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#388E3C',
  },
  spinnerTextStyle: {
    color: '#FFC107',
  },
  titleText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  primaryText: {
    alignSelf: 'center',
    color: '#C8E6C9',
    fontWeight: '100',
    fontSize: 13,
  },
  loginBtn: {
    backgroundColor: '#FFC107',
    width: WIDTH - 200,
    height: 45,
    borderRadius: 0,
    marginTop: 25,
    color: 'white',
    marginHorizontal: 25,
    alignItems: 'center',
    alignSelf: 'center',
    backfaceVisibility: 'hidden',
  },
  signupBtn: {
    backgroundColor: '#FFC107',
    width: WIDTH - 200,
    height: 45,
    borderRadius: 0,
    marginTop: 25,
    color: 'white',
    marginHorizontal: 25,
    alignItems: 'center',
    alignSelf: 'center',
    backfaceVisibility: 'hidden',
  },
  btnText: {
    fontWeight: '500',
    fontSize: 17,
    top: 10,
    left: 0,
    right: 10,
    fontFamily: 'notoserif',
    color: '#FFFFFF',
  },
});

export default WelcomeScreen;
