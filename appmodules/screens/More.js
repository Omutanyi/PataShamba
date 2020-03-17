import React, {Component} from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

export class More extends Component {
  render() {
    return (
      <View style={moreStyles.primaryView}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SellOpt')}
          style={moreStyles.optBtn}>
          <Text style={moreStyles.btnText}>OPT TO SELL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={moreStyles.optBtn}
          onPress={() => this.props.navigation.navigate('Saved')}>
          <Text style={moreStyles.btnText}>SAVED LANDS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={moreStyles.optBtn}
          onPress={() => this.props.navigation.navigate('PurchaseStatus')}>
          <Text style={moreStyles.btnText}>PURCHASE STATUS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={moreStyles.optBtn}
          onPress={() => this.props.navigation.navigate('ContactUs')}>
          <Text style={moreStyles.btnText}>CONTACT US</Text>
        </TouchableOpacity>
        <Text style={moreStyles.titleText}>ACCOUNT OPTIONS</Text>
        <TouchableOpacity
          style={moreStyles.optBtn}
          onPress={() => this.props.navigation.navigate('Profile')}>
          <Text style={moreStyles.btnText}>PROFILE SETTINGS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={moreStyles.optBtn}
          onPress={() => this.props.navigation.navigate('AppSettings')}>
          <Text style={moreStyles.btnText}>APP SETTINGS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={moreStyles.optBtn}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={moreStyles.btnText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const moreStyles = StyleSheet.create({
  primaryView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  titleText: {
    alignSelf: 'center',
    color: '#FFC107',
    fontWeight: '300',
    fontSize: 17,
    top: 10,
  },
  primaryText: {
    alignSelf: 'center',
    color: '#C8E6C9',
    fontWeight: '100',
    fontSize: 13,
  },
  optBtn: {
    backgroundColor: '#C8E6C9',
    width: WIDTH,
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
    fontWeight: '300',
    fontSize: 15,
    top: 10,
    left: 0,
    right: 10,
    fontFamily: 'notoserif',
    color: '#212121',
  },
});

export default More;
