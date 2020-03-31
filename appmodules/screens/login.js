import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {s} from '/home/javier/final_Project/PataShamba/components/styles/backbonestyles.js';

const {width: WIDTH} = Dimensions.get('window');
const d = Dimensions.get('window');

class login extends Component {
  state = {
    username: '',
    password: '',
  };

  signup = () => {
    this.props.navigation.navigate('Signup');
  };

  checkLogin() {
    const {username, password} = this.state;
    // console.warn(username, password);
    if (username == 'Admin' && password == 'Admin') {
      this.props.navigation.navigate('Pata Shamba');
    } else {
      // console.warn('Permission denied');
      Alert.alert('Error', 'username/password mismatch', [
        {
          Text: 'Okay',
        },
      ]);
    }
  }
  render() {
    return (
      <View style={loginStyle.primaryView}>
        <View style={loginStyle.loginView}>
          <Text style={loginStyle.loginText}>
            Please enter your credentials to proceed
          </Text>
          <View>
            <TextInput
              style={loginStyle.input}
              placeholder={'Enter your username'}
              value={this.state.username}
              onChangeText={username => this.setState({username})}
              placeholderTextColor={'black'}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
          </View>
          <View>
            <TextInput
              style={loginStyle.input}
              value={this.state.password}
              placeholder={'Password'}
              onChangeText={password => this.setState({password})}
              secureTextEntry={true}
              placeholderTextColor={'black'}
              underlineColorAndroid="transparent"
              Required
            />
          </View>
          <TouchableOpacity
            style={loginStyle.loginBtn}
            onPress={() => this.checkLogin()}>
            <Text style={loginStyle.btnText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const loginStyle = StyleSheet.create({
  primaryView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#C8E6C9',
  },
  loginView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    position: 'absolute',
    padding: 0,
    borderRadius: 7,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    width: WIDTH - 70,
  },
  loginText: {
    fontWeight: '400',
    fontSize: 13,
    fontFamily: 'notoserif',
    marginTop: 0,
    color: '#ffedcc',
  },
  input: {
    width: WIDTH - 100,
    height: 40,
    borderRadius: 7,
    paddingLeft: 45,
    backgroundColor: '#fff',
    marginTop: 20,
    color: 'black',
    marginHorizontal: 25,
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

export default login;
