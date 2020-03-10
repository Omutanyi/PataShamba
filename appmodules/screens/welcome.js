/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {s} from '/home/javier/final_Project/PataShamba/components/styles/backbonestyles.js';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://images.unsplash.com/photo-1554129351-dd3625ed5f30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1562939568-91cdb83881ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1572109646045-7cce4196cfd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1518655513281-e90740bd56b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      ],
    };
  }
  render() {
    return (
      <View style={s.primaryView}>
        <Text style={s.primaryText}>PATA SHAMBA</Text>
        <Text style={s.secondaryText}>
          The solution to all your land aspirations
        </Text>
        <Text style={s.primaryText}>WELCOME</Text>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={200}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#FFEE58"
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
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: 'rgba(128, 128, 128, 0.92)',
          }}
          ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
          imageLoadingColor="#FFC107"
        />
        <TouchableOpacity
          style={s.primaryButton}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={s.primaryText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.secondaryButton}
          onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={s.primaryText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default WelcomeScreen;
