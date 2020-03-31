import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

export class SellOpt extends Component {
  render() {
    return (
      <View style={optStyles.primaryView}>
        <Text style={optStyles.descriptionText}>
          {' '}
          This section gives you the ability to sell your land and also register
          the land to the application for future sale. For aspiring sellers,
          please take your time to read the terms adn conditions below.{' '}
        </Text>
        <View>
          <ScrollView style={optStyles.termsView}>
            <Text>
              {' '}
              This section gives you the ability to sell your land and also
              register the land to the application for future sale. For aspiring
              sellers, please take your time to read the terms adn conditions
              below. This section gives you the ability to sell your land and
              also register the land to the application for future sale. For
              aspiring sellers, please take your time to read the terms adn
              conditions below. This section gives you the ability to sell your
              land and also register the land to the application for future
              sale. For aspiring sellers, please take your time to read the
              terms adn conditions below. This section gives you the ability to
              sell your land and also register the land to the application for
              future sale. For aspiring sellers, please take your time to read
              the terms adn conditions below.{' '}
            </Text>
          </ScrollView>
        </View>
        <Text style={optStyles.descriptionText}>
          {' '}
          By continuing you agree to the terms and conditions set{' '}
        </Text>
        <TouchableOpacity style={optStyles.continue}>
          {/* // onPress={this.props.navigation.navigate('SellUpload')}> */}
          <Text style={optStyles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const optStyles = StyleSheet.create({
  primaryView: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#FFFFFF',
  },
  descriptionText: {
    fontWeight: '300',
    fontSize: 15,
    left: 0,
    right: 10,
    color: '#757575',
    fontFamily: 'notoserif',
  },
  termsView: {
    width: WIDTH - 100,
    height: 250,
    margin: 10,
    padding: 10,
    backgroundColor: '#C8E6C9',
  },
  continue: {
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

export default SellOpt;
