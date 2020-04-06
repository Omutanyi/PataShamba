import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AutogrowInput from 'react-native-autogrow-input';

const {width: WIDTH} = Dimensions.get('window');

class ContactUs extends Component {
  render() {
    return (
      <ScrollView>
        <View style={contactStyles.primaryView}>
          <Text style={contactStyles.descriptionText}>
            {' '}
            Send us a message regarding our services. Your feedback is highly
            regarded{' '}
          </Text>
          <AutogrowInput
            defaultHeight={50}
            style={contactStyles.termsView}
            placeholder={'Type your message'}
            placeholderTextColor={'black'}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={contactStyles.continue}>
            <Text style={contactStyles.btnText}>SEND MESSAGE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const contactStyles = StyleSheet.create({
  primaryView: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
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
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
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

export default ContactUs;
