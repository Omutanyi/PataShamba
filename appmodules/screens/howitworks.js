import React, {Component} from 'react';
import {
  ScrollableView,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from ' react-native ';
import {s} from '/home/javier/final_Project/PataShamba/components/styles/backbonestyles.js';

class Howitworks extends Component {
  render() {
    return (
      <>
        <ScrollableView>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1523704323981-90633778233a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
            style={StyleSheet.absoluteFillObject}
            resizeMode="cover">
            <View style={styles.overlay} />
            <View style={s.loginContainer}>
              <Text style={s.guideText}>
                Take a minute to know your way around
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Pata Shamba')}>
                <Text>SKIP</Text>
              </TouchableOpacity>
            </View>
          </Image>
        </ScrollableView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default Howitworks;
