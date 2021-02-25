import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

class AddLand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // seller: false,
      location: '',
      size: '',
      description: '',
      price: '',
      user: [],
      lat: '',
      lon: '',
      // userId: '',
    };
  }

  checkInputs = () => {};

  postLand = () => {
    console.log('post land');
  };

  render() {
    return (
      <View style={styles.primaryView}>
        <Text style={styles.primaryText}>Post land to sell</Text>
        <TextInput
          style={styles.input}
          placeholder={'Location'}
          // value={this.state.username}
          placeholderTextColor={'black'}
          // onChangeText={text => {
          //   this.setState({username: text});
          // }}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholder={'Size'}
          // value={this.state.email}
          placeholderTextColor={'black'}
          // onChangeText={text => {
          //   this.setState({email: text});
          // }}
          underlineColorAndroid="transparent"
        />
        {/* <TextInput
          style={styles.input}
          placeholder={'Phone'}
          value={this.state.phone}
          placeholderTextColor={'black'}
          onChangeText={(number) => {
              this.setState({phone: number});
            }}
          underlineColorAndroid="transparent"
        /> */}
        <TextInput
          style={styles.input}
          placeholder={'Description'}
          // value={this.state.password}
          placeholderTextColor={'black'}
          // onChangeText={text => {
          //   this.setState({password: text});
          // }}
          underlineColorAndroid="transparent"
          // secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder={'Price'}
          // value={this.state.password}
          placeholderTextColor={'black'}
          // onChangeText={text => {
          //   this.setState({password: text});
          // }}
          underlineColorAndroid="transparent"
          // secureTextEntry={true}
        />
        <Text style={styles.primaryText}>Location coordinates</Text>
        <TextInput
          style={styles.input}
          placeholder={'Latitude'}
          // value={this.state.password}
          placeholderTextColor={'black'}
          // onChangeText={text => {
          //   this.setState({password: text});
          // }}
          underlineColorAndroid="transparent"
          // secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder={'Longitude'}
          // value={this.state.password}
          placeholderTextColor={'black'}
          // onChangeText={text => {
          //   this.setState({password: text});
          // }}
          underlineColorAndroid="transparent"
          // secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => this.postLand()}>
          <Text style={styles.btnText}>POST LAND</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  primaryView: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#C8E6C9',
  },
  primaryText: {
    alignSelf: 'center',
    color: '#757575',
    fontWeight: '300',
    fontSize: 13,
    padding: 10,
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

export default AddLand;
