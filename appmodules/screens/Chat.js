import React, {Component} from 'react';
import {Text, ScrollView, View} from 'react-native';
import {ListItem} from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Kitengela',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Langata',
  },
  {
    name: 'Eva Mwaniki',
    avatar_url:
      'https://images.unsplash.com/photo-1585591366248-91fffa63676e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    subtitle: 'Kawangware',
  },
  {
    name: 'Johnston Mwaura',
    avatar_url:
      'https://images.unsplash.com/photo-1551647064-ad28089c98e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    subtitle: 'Lavington',
  },
  {
    name: 'Eva Mwaniki',
    avatar_url:
      'https://images.unsplash.com/photo-1585591366248-91fffa63676e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    subtitle: 'Kawangware',
  },
  {
    name: 'Johnston Mwaura',
    avatar_url:
      'https://images.unsplash.com/photo-1551647064-ad28089c98e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    subtitle: 'Lavington',
  },
  {
    name: 'Eva Mwaniki',
    avatar_url:
      'https://images.unsplash.com/photo-1585591366248-91fffa63676e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    subtitle: 'Kawangware',
  },
  {
    name: 'Johnston Mwaura',
    avatar_url:
      'https://images.unsplash.com/photo-1551647064-ad28089c98e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    subtitle: 'Lavington',
  },
  {
    name: 'Eva Mwaniki',
    avatar_url:
      'https://images.unsplash.com/photo-1585591366248-91fffa63676e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    subtitle: 'Kawangware',
  },
  {
    name: 'Johnston Mwaura',
    avatar_url:
      'https://images.unsplash.com/photo-1551647064-ad28089c98e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    subtitle: 'Lavington',
  },
  {
    name: 'Eva Mwaniki',
    avatar_url:
      'https://images.unsplash.com/photo-1585591366248-91fffa63676e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    subtitle: 'Kawangware',
  },
  {
    name: 'Johnston Mwaura',
    avatar_url:
      'https://images.unsplash.com/photo-1551647064-ad28089c98e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    subtitle: 'Lavington',
  },
  {
    name: 'Eva Mwaniki',
    avatar_url:
      'https://images.unsplash.com/photo-1585591366248-91fffa63676e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    subtitle: 'Kawangware',
  },
  {
    name: 'Johnston Mwaura',
    avatar_url:
      'https://images.unsplash.com/photo-1551647064-ad28089c98e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    subtitle: 'Lavington',
  },
  {
    name: 'Eva Mwaniki',
    avatar_url:
      'https://images.unsplash.com/photo-1585591366248-91fffa63676e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    subtitle: 'Kawangware',
  },
  {
    name: 'Johnston Mwaura',
    avatar_url:
      'https://images.unsplash.com/photo-1551647064-ad28089c98e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    subtitle: 'Lavington',
  },
];

class Chat extends Component {
  render() {
    return (
      <ScrollView>
        {/* <View>
          <Text>Chat with sellers</Text>
        </View> */}
        <View>
          {list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{source: {uri: l.avatar_url}}}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default Chat;
