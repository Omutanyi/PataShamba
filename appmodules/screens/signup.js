import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {s} from '/home/javier/final_Project/PataShamba/components/styles/backbonestyles.js';

class Signup extends Component {
  render() {
    return (
      <View style={(s.loginContainer, s.View)}>
        <ImageBackground
          source={{
            uri:
              'https://images.unsplash.com/photo-1548382340-e7280a94e3ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          }}
          style={styles.overlay}
          resizeMode="cover">
          <Text style={s.appTitle}> SIGN UP </Text>
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
          <TouchableOpacity style={s.loginBtn}>
            <Text style={s.loginBtnText}>SIGN UP</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default Signup;
