import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
} from 'react-native';
// import firebase from '/home/javier/final_Project/PataShamba/src/config.js';
import axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');

class SellOpt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // seller: false,
      user: props.route.params.user,
      // userId: '',
    };
  }

  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log('userId..', user.uid);
  //     axios
  //       .get(`http://192.168.0.101:8000/users/searchuser/${user.uid}`)
  //       .then(res => {
  //         const searchRes = res.data;
  //         this.setState({user: searchRes});
  //         this.setState({
  //           userId: searchRes.user_id,
  //         });
  //         // console.log('searchRes...', searchRes);
  //         if (this.state.user.seller === true) {
  //           // toggle seller
  //           console.log('user is a seller');
  //           this.setState({seller: true});
  //         } else {
  //           console.log('user is not seller');
  //         }
  //       })
  //       .catch(error => {
  //         console.log('Error fetching searchRes', error);
  //       });
  //   });
  // }

  sell = () => {
    // console.log('user', this.state.user);
    this.state.user.forEach((data, index) =>
      // console.log('user data', data.user_id),
      // var newUser = {};
      axios
        .put(`http://192.168.0.101:8000/users/${data.user_id}/`, {
          seller: true,
          username: data.username,
        })
        .then(
          response =>
            console.log('put seller success. response:...', response.data.id),
          // this.props.navigation.navigate('AddLand'),
        )
        .catch(error => {
          console.log('Error updating document', error.response);
        }),
    );
  };

  render() {
    return (
      <View style={optStyles.primaryView}>
        <Text style={optStyles.descriptionText}>
          {' '}
          This section gives you the ability to sell your land and also register
          the land to the application for future sale. For aspiring sellers,
          please take your time to read the terms adn conditions below.{' '}
        </Text>
        <View>
          <ScrollView style={optStyles.termsView}>
            <Text>
              {' '}
              This section gives you the ability to sell your land and also
              register the land to the application for future sale. For aspiring
              sellers, please take your time to read the terms adn conditions
              below. This section gives you the ability to sell your land and
              also register the land to the application for future sale. For
              aspiring sellers, please take your time to read the terms adn
              conditions below. This section gives you the ability to sell your
              land and also register the land to the application for future
              sale. For aspiring sellers, please take your time to read the
              terms adn conditions below. This section gives you the ability to
              sell your land and also register the land to the application for
              future sale. For aspiring sellers, please take your time to read
              the terms adn conditions below.{' '}
            </Text>
          </ScrollView>
        </View>
        <Text style={optStyles.descriptionText}>
          {' '}
          By continuing you agree to the terms and conditions set{' '}
        </Text>
        <TouchableOpacity
          style={optStyles.continue}
          onPress={() => {
            this.sell();
          }}>
          <Text style={optStyles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const optStyles = StyleSheet.create({
  primaryView: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#FFFFFF',
  },
  descriptionText: {
    fontWeight: '300',
    fontSize: 15,
    left: 0,
    right: 10,
    color: '#757575',
    fontFamily: 'notoserif',
  },
  termsView: {
    width: WIDTH - 100,
    height: 250,
    margin: 10,
    padding: 10,
    backgroundColor: '#C8E6C9',
  },
  continue: {
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

export default SellOpt;
