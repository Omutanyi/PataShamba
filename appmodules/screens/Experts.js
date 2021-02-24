import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');
const BaseUrl = 'http://192.168.0.101:8000';

class Experts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://192.168.0.101:8000/users/experts/')
      .then(res => {
        const experts = res.data;
        this.setState({data: experts});
        console.log('expertsRes', experts);
      })
      .catch(error => {
        console.log('Error fetching doc', error);
      });
  }
  render() {
    return (
      <ScrollView style={styles.primaryView}>
        {this.state.data.map((data, index) => (
          <TouchableWithoutFeedback style={styles.touchableView}>
            {/* <View>
              <Image source={{uri: BaseUrl + data.image}} />
            </View> */}
            <View style={styles.cardContainer}>
              <Image source={{uri: BaseUrl + data.logo}} style={styles.image} />
              <Text>{data.name}</Text>
              <Text style={styles.descriptionText}>{data.field}</Text>
              <Text style={styles.descriptionText}>{data.address}</Text>
              <Text style={styles.descriptionText}>{data.email}</Text>
              {/* <Text>{data.logo}</Text> */}
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  primaryView: {
    backgroundColor: '#C8E6C9',
  },
  touchableView: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    width: 100,
    marginTop: 25,
    height: 70,
    resizeMode: 'stretch',
  },
  descriptionText: {
    fontWeight: '300',
    fontSize: 13,
    fontFamily: 'notoserif',
    color: '#757575',
  },
  cardContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    // flexDirection: 'row',
    // margin: 5,
    left: 5,
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,
    width: WIDTH - 10,
    padding: 10,
  },
});

export default Experts;
