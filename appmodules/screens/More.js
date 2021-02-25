import React, {Component} from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import firebase from '/home/javier/final_Project/PataShamba/src/config.js';
import axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seller: false,
      user: [],
      userId: '',
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        userId: user.uid,
      });
      console.log('userId..', user.uid);
      axios
        .get(`http://192.168.0.101:8000/users/searchuser/${user.uid}`)
        .then(res => {
          const searchRes = res.data;
          this.setState({user: searchRes});
          console.log('user searchRes...', res.data);
          res.data.forEach((data, index) => {
            console.log('seller query..', data.seller);
            if (data.seller === true) {
              // toggle seller
              console.log('user is a seller');
              this.setState({seller: true});
            } else {
              console.log('user is not seller');
            }
          });
        })
        .catch(error => {
          console.log('Error fetching searchRes', error);
        });
    });
  }

  sellerOption = () => {
    if (this.state.seller === true) {
      return (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddLand')}
          style={moreStyles.optBtn}>
          <Icon
            style={[{color: 'black', position: 'absolute', left: 90}]}
            size={17}
            name={'creditcard'}
          />
          <Text style={moreStyles.btnText}>ADD LAND</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={
            () =>
              this.props.navigation.navigate('SellOpt', {user: this.state.user})
            // this.props.navigation.navigate('AddLand')
          }
          style={moreStyles.optBtn}>
          <Icon
            style={[{color: 'black', position: 'absolute', left: 90}]}
            size={17}
            name={'creditcard'}
          />
          <Text style={moreStyles.btnText}>OPT TO SELL</Text>
        </TouchableOpacity>
      );
    }
  };
  render() {
    return (
      <ScrollView style={[{backgroundColor: '#C8E6C9'}]}>
        <View style={moreStyles.primaryView}>
          {this.sellerOption()}
          <TouchableOpacity
            style={moreStyles.optBtn}
            onPress={() => this.props.navigation.navigate('Saved')}>
            <Icon
              style={[{color: 'black', position: 'absolute', left: 90}]}
              size={17}
              name={'save'}
            />
            <Text style={moreStyles.btnText}>SAVED LANDS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={moreStyles.optBtn}
            onPress={() => this.props.navigation.navigate('PurchaseStatus')}>
            <Icon
              style={[{color: 'black', position: 'absolute', left: 90}]}
              size={17}
              name={'wallet'}
            />
            <Text style={moreStyles.btnText}>PURCHASE STATUS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={moreStyles.optBtn}
            onPress={() => this.props.navigation.navigate('ContactUs')}>
            <Icon
              style={[{color: 'black', position: 'absolute', left: 90}]}
              size={17}
              name={'customerservice'}
            />
            <Text style={moreStyles.btnText}>CONTACT US</Text>
          </TouchableOpacity>
          {/* <Text style={moreStyles.titleText}>ACCOUNT OPTIONS</Text> */}
          <TouchableOpacity
            style={moreStyles.optBtn}
            onPress={() => this.props.navigation.navigate('Experts')}>
            <Icon
              style={[{color: 'black', position: 'absolute', left: 90}]}
              size={17}
              name={'profile'}
            />
            <Text style={moreStyles.btnText}>EXPERTS</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={moreStyles.optBtn}
            onPress={() => this.props.navigation.navigate('AppSettings')}>
            <Text style={moreStyles.btnText}>APP SETTINGS</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={moreStyles.optBtn}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Icon
              style={[{color: 'black', position: 'absolute', left: 90}]}
              size={17}
              name={'logout'}
            />
            <Text style={moreStyles.btnText}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const moreStyles = StyleSheet.create({
  primaryView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  titleText: {
    alignSelf: 'center',
    color: '#FFC107',
    fontWeight: '300',
    fontSize: 17,
    top: 10,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  primaryText: {
    alignSelf: 'center',
    color: '#C8E6C9',
    fontWeight: '100',
    fontSize: 13,
  },
  optBtn: {
    // backgroundColor: '#C8E6C9',
    width: WIDTH,
    height: 45,
    borderRadius: 0,
    marginTop: 25,
    color: 'white',
    marginHorizontal: 25,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
  },
  btnText: {
    fontWeight: '300',
    fontSize: 15,
    left: 0,
    right: 10,
    fontFamily: 'notoserif',
    color: '#212121',
  },
});

export default More;
