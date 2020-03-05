import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {s} from './components/styles/backbonestyles.js';

class signup extends Component {
  render() {
    return (
      <View>
        <Text style={s.loginText}> SIGN UP </Text>
        <Text style={s.guideText}>
          Enjoy the best of land deals all fitted to your budget
        </Text>
        <TextInput
          style={s.input}
          placeholder={'Username'}
          placeholderTextColor={'black'}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={s.input}
          placeholder={'Email'}
          placeholderTextColor={'black'}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={s.input}
          placeholder={'Username'}
          placeholderTextColor={'black'}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={s.input}
          placeholder={'Phone'}
          placeholderTextColor={'black'}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={s.input}
          placeholder={'Password'}
          placeholderTextColor={'black'}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={s.input}
          placeholder={'Confirm Password'}
          placeholderTextColor={'black'}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity>SIGN UP</TouchableOpacity>
      </View>
    );
  }
}

export default signup;
