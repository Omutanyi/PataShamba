import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {s} from '/home/javier/final_Project/PataShamba/components/styles/backbonestyles.js';

const {width: WIDTH} = Dimensions.get('window');
const d = Dimensions.get('window');
class login extends Component {
  render() {
    return (
      <View style={(s.loginContainer, s.View)}>
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
          <Icon
            name={'person'}
            size={23}
            color={'#002600'}
            style={s.inputIcon}
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
          <Icon
            name={'ios-person'}
            size={23}
            color={'#002600'}
            style={s.inputIcon}
          />
        </View>
        <TouchableOpacity
          style={s.loginBtn}
          onPress={() => this.props.navigation.navigate('Pata Shamba')}>
          <Text style={s.loginBtnText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.signupBtn}
          onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={s.signupBtnText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default login;
