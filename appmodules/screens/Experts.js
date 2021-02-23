import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

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
        console.log('landRes', experts);
      })
      .catch(error => {
        console.log('Error fetching doc', error);
      });
  }
  render() {
    return (
      <View>
        <Text>Experts screen</Text>
      </View>
    );
  }
}

export default Experts;
