import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {s} from '/home/javier/final_Project/PataShamba/components/styles/backbonestyles.js';
import land3 from './images/land3.jpeg';

class Login extends Component {
  render() {
    return (
      <View style={s.loginContainer}>
        <Image source={land3} style={s.image} />
        <Text style={s.appTitle}>Pata Shamba</Text>
        <Text style={s.loginText}>LOGIN</Text>
        <Text style={s.guideText}>
          Please enter your credentials to proceed
        </Text>
        <View>
          <TextInput
            style={s.input}
            placeholder={'Username'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TextInput
            style={s.input}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
            Required
          />
        </View>
        <TouchableOpacity style={s.loginBtn}>
          <Text style={s.loginBtnText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
