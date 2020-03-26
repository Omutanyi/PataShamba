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
  state = {
    location: '',
    ownerName: '',
    size: '',
    price: '',
  };

  const {lands, setLands} = useState([
    {key: '1', location: 'Kibera', owner: 'Mike Dee Elvis', size: '1.5 acres', price: 'Kshs 7.5 Mil'},
    {key: '2', location: 'Kibera', owner: 'Mike Dee Elvis', size: '1.5 acres', price: 'Kshs 7.5 Mil'},
    {key: '3', location: 'Kibera', owner: 'Mike Dee Elvis', size: '1.5 acres', price: 'Kshs 7.5 Mil'},
    {key: '4', location: 'Kibera', owner: 'Mike Dee Elvis', size: '1.5 acres', price: 'Kshs 7.5 Mil'},
    {key: '5', location: 'Kibera', owner: 'Mike Dee Elvis', size: '1.5 acres', price: 'Kshs 7.5 Mil'},
    {key: '6', location: 'Kibera', owner: 'Mike Dee Elvis', size: '1.5 acres', price: 'Kshs 7.5 Mil'},
    {key: '7', location: 'Kibera', owner: 'Mike Dee Elvis', size: '1.5 acres', price: 'Kshs 7.5 Mil'},
    {key: '8', location: 'Kibera', owner: 'Mike Dee Elvis', size: '1.5 acres', price: 'Kshs 7.5 Mil'},
    {key: '9', location: 'Kibera', owner: 'Mike Dee Elvis', size: '1.5 acres', price: 'Kshs 7.5 Mil'},
    {key: '10', location: 'Kibera', owner: 'Mike Dee Elvis', size: '1.5 acres', price: 'Kshs 7.5 Mil'},
    {key: '11', location: 'Kibera', owner: 'Mike Dee Elvis', size: '1.5 acres', price: 'Kshs 7.5 Mil'},
  ]);

  render() {
    return (
      <ScrollView>
        {lands.map((land) => {
          return (
            <View key={land.key}>
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
          <Text>{land.location}</Text>
          <Text>{land.owner}</Text>
          <Text>{land.size}</Text>
          <Text>{land.price}</Text>
          <TouchableOpacity onPress={() => this.continue}>
            <Text>Details</Text>
          </TouchableOpacity>
        </View>
          )
        })}
      </ScrollView>
    );
  }
}

export default Filter;
