/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';

class Filter extends Component {
  render() {
    return (
      <ScrollView>
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
        <View>
          <Text>location</Text>
          <Text>owner</Text>
          <Text>size</Text>
          <Text>price</Text>
        </View>
        <TouchableOpacity onPress={() => this.continue}>
          <Text>Details</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Filter;
