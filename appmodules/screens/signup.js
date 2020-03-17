import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {s} from '/home/javier/final_Project/PataShamba/components/styles/backbonestyles.js';

const {width: WIDTH} = Dimensions.get('window');

class Signup extends Component {
  render() {
    return (
      <View style={signupStyles.primaryView}>
        <Text style={signupStyles.primaryText}>
          Enjoy the best of land deals all fitted to your budget. Fill in the
          fields to create an account.
        </Text>
        <TextInput
          style={signupStyles.input}
          placeholder={'Username'}
          placeholderTextColor={'black'}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={signupStyles.input}
          placeholder={'Email'}
          placeholderTextColor={'black'}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={signupStyles.input}
          placeholder={'Phone'}
          placeholderTextColor={'black'}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={signupStyles.input}
          placeholder={'Password'}
          placeholderTextColor={'black'}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={signupStyles.input}
          placeholder={'Confirm Password'}
          placeholderTextColor={'black'}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={signupStyles.signupBtn}>
          <Text style={signupStyles.btnText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const signupStyles = StyleSheet.create({
  primaryView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#C8E6C9',
  },
  primaryText: {
    alignSelf: 'center',
    color: '#757575',
    fontWeight: '100',
    fontSize: 13,
    padding: 20,
  },
  input: {
    width: WIDTH - 100,
    height: 40,
    borderRadius: 7,
    paddingLeft: 45,
    backgroundColor: '#fff',
    marginTop: 20,
    color: 'black',
    alignSelf: 'center',
    marginHorizontal: 25,
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

export default Signup;
