import React, {Component} from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const {width: WIDTH} = Dimensions.get('window');

export class More extends Component {
  render() {
    return (
      <ScrollView style={[{backgroundColor: '#C8E6C9'}]}>
        <View style={moreStyles.primaryView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SellOpt')}
            style={moreStyles.optBtn}>
            <Icon
              style={[{color: 'black', position: 'absolute', left: 90}]}
              size={17}
              name={'creditcard'}
            />
            <Text style={moreStyles.btnText}>OPT TO SELL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={moreStyles.optBtn}
            onPress={() => this.props.navigation.navigate('Saved')}>
            <Icon
              style={[{color: 'black', position: 'absolute', left: 90}]}
              size={17}
              name={'save'}
            />
            <Text style={moreStyles.btnText}>SAVED LANDS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={moreStyles.optBtn}
            onPress={() => this.props.navigation.navigate('PurchaseStatus')}>
            <Icon
              style={[{color: 'black', position: 'absolute', left: 90}]}
              size={17}
              name={'wallet'}
            />
            <Text style={moreStyles.btnText}>PURCHASE STATUS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={moreStyles.optBtn}
            onPress={() => this.props.navigation.navigate('ContactUs')}>
            <Icon
              style={[{color: 'black', position: 'absolute', left: 90}]}
              size={17}
              name={'customerservice'}
            />
            <Text style={moreStyles.btnText}>CONTACT US</Text>
          </TouchableOpacity>
          {/* <Text style={moreStyles.titleText}>ACCOUNT OPTIONS</Text> */}
          <TouchableOpacity
            style={moreStyles.optBtn}
            onPress={() => this.props.navigation.navigate('Experts')}>
            <Icon
              style={[{color: 'black', position: 'absolute', left: 90}]}
              size={17}
              name={'profile'}
            />
            <Text style={moreStyles.btnText}>EXPERTS</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={moreStyles.optBtn}
            onPress={() => this.props.navigation.navigate('AppSettings')}>
            <Text style={moreStyles.btnText}>APP SETTINGS</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={moreStyles.optBtn}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Icon
              style={[{color: 'black', position: 'absolute', left: 90}]}
              size={17}
              name={'logout'}
            />
            <Text style={moreStyles.btnText}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  primaryText: {
    alignSelf: 'center',
    color: '#C8E6C9',
    fontWeight: '100',
    fontSize: 13,
  },
  optBtn: {
    // backgroundColor: '#C8E6C9',
    width: WIDTH,
    height: 45,
    borderRadius: 0,
    marginTop: 25,
    color: 'white',
    marginHorizontal: 25,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
  },
  btnText: {
    fontWeight: '300',
    fontSize: 15,
    left: 0,
    right: 10,
    fontFamily: 'notoserif',
    color: '#212121',
  },
});

export default More;
