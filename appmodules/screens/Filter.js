/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, Image, TextInput, TouchableOpacity, View} from 'react-native';

class Filter extends Component {
  state = {
    location: '',
    ownerName: '',
    size: '',
    price: '',
  };
  render() {
    return (
      <View>
        <TextInput placeholder="search" />
        <TouchableOpacity>
          <Text>SEARCH</Text>
        </TouchableOpacity>
        <Image
          style={{
            width: 30,
            height: 30,
            resizeMode: 'contain',
          }}
          source={{
            uri:
              'https://images.unsplash.com/photo-1523704323981-90633778233a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text value={this.state.location}>Location</Text>
        <Text value={this.state.ownerName}>OwnerName</Text>
        <Text value={this.state.size}>Size</Text>
        <Text name="Price">Price</Text>
        <TouchableOpacity onPress={() => this.continue}>
          <Text>Details</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Filter;
