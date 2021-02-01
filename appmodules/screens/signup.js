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

// firebase authentication import
// import firebase from 'react-native-firebase';
// import firebase from 'firebase';
import firebase from '/home/javier/final_Project/PataShamba/src/config.js';

const {width: WIDTH} = Dimensions.get('window');

class Signup extends Component {
    constructor(props) {
    super(props);
    this.unsubscriber = null;
    this.state = {
      isAuthenticated: false,
      username: '',
      phone: '',
      email: '',
      password: '',
      passwordConfirm: '',
      user: null,
    };
  }


   signUp = () => {
     let email = this.state.email;
     let password = this.state.password;
     let passwordConfirm = this.state.passwordConfirm;

     if (password === '' || email === '' || passwordConfirm === '' ) {
     console.log('empty');
       Alert.alert(
          'Input Error',
          'Make sure to fill in all the input fields to proceed',
          [
            {
              Text: 'Okay',
            },
          ],
        );
     } else {
       if (password !== passwordConfirm) {
          Alert.alert(
          'Input Error',
          'The two passwords should match',
          [
            {
              Text: 'Okay',
            },
          ],
        );
       } else {
      firebase.auth().createUserWithEmailAndPassword(
        this.state.email,
        this.state.password,
      )
      .then(() => {
     console.log('signup enabled');
        Alert.alert(
          'Successfull',
          'Your account has been created successfully',
          [
            {
              Text: 'Okay',
            },
          ],
        );
        // this.props.navigation.navigate('Queue');//
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert(
            'Failed',
            'The email address provided is already in use',
            [
              {
                Text: 'Okay',
              },
            ],
          );
        } else {
          console.log(error.message);
        }
      });
       }
     }
  };

  render() {
    return (
      <View style={signupStyles.primaryView}>
        <Text style={signupStyles.primaryText}>
          Enjoy the best of land deals all fitted to your budget. Fill in the
          fields to create an account.
        </Text>
        {/* <TextInput
          style={signupStyles.input}
          placeholder={'Username'}
          value={this.state.username}
          placeholderTextColor={'black'}
          onChangeText={(text) => {
              this.setState({username: text});
            }}
          underlineColorAndroid="transparent"
        /> */}
        <TextInput
          style={signupStyles.input}
          placeholder={'email'}
          value={this.state.email}
          placeholderTextColor={'black'}
          onChangeText={(text) => {
              this.setState({email: text});
            }}
          underlineColorAndroid="transparent"
        />
        {/* <TextInput
          style={signupStyles.input}
          placeholder={'Phone'}
          value={this.state.phone}
          placeholderTextColor={'black'}
          onChangeText={(number) => {
              this.setState({phone: number});
            }}
          underlineColorAndroid="transparent"
        /> */}
        <TextInput
          style={signupStyles.input}
          placeholder={'password'}
          value={this.state.password}
          placeholderTextColor={'black'}
          onChangeText={(text) => {
              this.setState({password: text});
            }}
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />
        <TextInput
          style={signupStyles.input}
          placeholder={'Confirm Password'}
          value={this.state.passwordConfirm}
          placeholderTextColor={'black'}
          onChangeText={(text) => {
              this.setState({passwordConfirm: text});
            }}
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={signupStyles.signupBtn}
          onPress={() => this.signUp()}
          >
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
