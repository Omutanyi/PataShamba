import React, {Component} from 'react';
import {
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import axios from 'axios';

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
    const location = this.state.location;
    const size = this.state.size;
    const description = this.state.description;
    const price = this.state.price;
    const lat = this.state.lat;
    const lon = this.state.lon;

    const newLand = {
      town: location,
      size: size,
      description: description,
      lat: lat,
      lon: lon,
    };
    axios
      .post('http://192.168.0.101:8000/lands/', newLand)
      .then(response => {
        console.log('Id for new posted land:', response.data.id);
      })
      .then(() => {
        Alert.alert('Successfull', 'Your land has been posted successfully', [
          {
            Text: 'Okay',
          },
        ]);
        this.props.navigation.navigate('Pata Shamba');
      })
      .catch(error => {
        // this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
      });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.primaryView}>
          <Text style={styles.primaryText}>Post land to sell</Text>
          <TextInput
            style={styles.input}
            placeholder={'Location'}
            value={this.state.location}
            placeholderTextColor={'black'}
            onChangeText={text => {
              this.setState({location: text});
            }}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            placeholder={'Size'}
            value={this.state.size}
            placeholderTextColor={'black'}
            onChangeText={text => {
              this.setState({size: text});
            }}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            placeholder={'Description'}
            value={this.state.description}
            placeholderTextColor={'black'}
            onChangeText={text => {
              this.setState({description: text});
            }}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            placeholder={'Price'}
            value={this.state.price}
            placeholderTextColor={'black'}
            onChangeText={text => {
              this.setState({price: text});
            }}
            underlineColorAndroid="transparent"
          />
          <Text style={styles.primaryText}>Location coordinates</Text>
          <TextInput
            style={styles.input}
            placeholder={'Latitude'}
            value={this.state.lat}
            placeholderTextColor={'black'}
            onChangeText={text => {
              this.setState({lat: text});
            }}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            placeholder={'Longitude'}
            value={this.state.lon}
            placeholderTextColor={'black'}
            onChangeText={text => {
              this.setState({lon: text});
            }}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => this.postLand()}>
            <Text style={styles.btnText}>POST LAND</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
