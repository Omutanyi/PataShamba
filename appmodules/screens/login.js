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
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import {s} from '/home/javier/final_Project/PataShamba/components/styles/backbonestyles.js';

// firebase authentication import
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import fire from '/home/javier/final_Project/PataShamba/src/config.js';

const {width: WIDTH} = Dimensions.get('window');
const d = Dimensions.get('window');

class login extends Component {
  constructor(props) {
    super(props);
    this.unsubscriber = null;
    this.state = {
      isAuthenticated: false,
      isLoading: false,
      typedEmail: '',
      password: '',
      username: '',
      user: null,
    };
  }

  componentDidMount() {
    const conn = axios
      .get('http://192.168.0.101:8000/users/')
      // .then(res => res.json())
      .then(res => {
        const allRes = res.data;
        console.log('res should load');
        console.log('allRes', allRes);
      })
      .catch(error => {
        console.log('Error fetching doc', error);
      });

    console.log('conn', conn);

    // console.log('conn', conn);
    //   fetch(url, {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //     .then(response => response.json())
    //     .then(responseData => {
    //       // if (responseData.Error) {
    //       //   Alert.alert('Errore');
    //       // }
    //       // global.utente = responseData;
    //       console.log('responseData', responseData);
    //     })
    //     .catch(err => {
    //       console.log('error', err);
    //     });
  }

  // async fetchDataFromApi() {
  //   const url = '127.0.0.1:8000/users/';
  //   console.log('fetching from api');

  //   this.setState({loading: true});

  //   // const getIpAdd = await axios.get()

  login = () => {
    if (this.state.typedEmail === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!');
      console.log('Home page should load');
    } else {
      this.setState({
        isLoading: true,
      });
      fire
        .auth()
        .signInWithEmailAndPassword(this.state.typedEmail, this.state.password)
        .then(res => {
          console.log(res);
          console.log('User logged-in successfully!');
          this.setState({
            isLoading: false,
            typedEmail: '',
            password: '',
          });
          this.props.navigation.navigate('Pata Shamba');
        })
        .catch(error => this.setState({errorMessage: error.message}));
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={loginStyle.preloader}>
          <ActivityIndicator size="large" color="#FFC107" />
        </View>
      );
    }
    return (
      <View style={loginStyle.primaryView}>
        <View style={loginStyle.loginView}>
          <Text style={loginStyle.loginText}>
            Please enter your credentials to proceed
          </Text>
          <View>
            <TextInput
              style={loginStyle.input}
              placeholder={'Enter your email'}
              value={this.state.typedEmail}
              onChangeText={text => this.setState({typedEmail: text})}
              placeholderTextColor={'black'}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
          </View>
          <View>
            <TextInput
              style={loginStyle.input}
              value={this.state.password}
              placeholder={'Password'}
              onChangeText={text => this.setState({password: text})}
              secureTextEntry={true}
              placeholderTextColor={'black'}
              underlineColorAndroid="transparent"
              Required
              leftIcon={<Icon name="lock" size={24} color="black" />}
            />
          </View>
          <TouchableOpacity
            style={loginStyle.loginBtn}
            onPress={() => this.login()}>
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
  preloader: {
    borderRadius: 50,
    top: '40%',
    padding: 20,
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C8E6C9',
  },
});

export default login;
