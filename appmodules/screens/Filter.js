import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeArea,
  View,
} from 'react-native';

export class Filter extends Component {
  continue = () => {
    this.props.navigation.navigate('Details');
  };
  render() {
    return (
      <SafeArea>
        <View>
          <TextInput placeholder="search" />
        </View>
        <View>
          <Text>No property found</Text>
        </View>
        <View>
          <Image />
          <Text name="Location">Location</Text>
          <Text name="OwnerName">OwnerName</Text>
          <Text name="Size">Size</Text>
          <Text name="Price">Price</Text>
          <TouchableOpacity onPress={() => this.continue}>
            <Text>Details</Text>
          </TouchableOpacity>
        </View>
      </SafeArea>
    );
  }
}

export default Filter;
