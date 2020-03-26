/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {s} from '/home/javier/final_Project/PataShamba/components/styles/backbonestyles.js';

const {width: WIDTH} = Dimensions.get('window');

class Signup extends Component {
  state = {
    email: '',
    password: '',
    phone: '',
    username: '',
    passwordConfirm: '',
  };

  signUp() {
    const {email, password, phone, username, passwordConfirm} = this.status;
    if (password && email && phone && username && passwordConfirm != null) {
      if (password == passwordConfirm) {
              this.props.navigation.navigate('Pata Shamba');
      } else {
       Alert.alert('Error', 'Please make sure your passwords match', [
        {
          Text: 'Okay',
        },
      ]); 
      }
    } else {
      // console.warn('permission denied')
      Alert.alert('Error', 'Please make sure to fill all the fields as indicated to proceed', [
        {
          Text: 'Okay',
        },
      ]);
    }
  }

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
          value={this.state.username}
          placeholderTextColor={'black'}
          onChangeText={username => this.setState({username})}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={signupStyles.input}
          placeholder={'Email'}
          value={this.state.email}
          placeholderTextColor={'black'}
          onChangeText={email => this.setState({email})}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={signupStyles.input}
          placeholder={'Phone'}
          value={this.state.phone}
          placeholderTextColor={'black'}
          onChangeText={phone => this.setState({phone})}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={signupStyles.input}
          placeholder={'Password'}
          value={this.state.password}
          placeholderTextColor={'black'}
          onChangeText={password => this.setState({password})}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={signupStyles.input}
          placeholder={'Confirm Password'}
          value={this.state.passwordConfirm}
          placeholderTextColor={'black'}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity
          style={signupStyles.signupBtn}
          onpress={this.signUp()}>
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
