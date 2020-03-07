import React, {Component} from 'react';
import {ScrollableView, View, Text} from ' react-native ';
import {s} from '/home/javier/final_Project/PataShamba/components/styles/backbonestyles.js';

class howitworks extends Component {
  render() {
    return (
      <>
        <ScrollableView>
          <View style={s.loginContainer}>
            <Text style={s.guideText}>
              Take a minute to know your way around
            </Text>
          </View>
        </ScrollableView>
      </>
    );
  }
}

export default howitworks;
