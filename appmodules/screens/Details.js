/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, TouchableOpacity, ScrollableView, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://images.unsplash.com/photo-1554129351-dd3625ed5f30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1562939568-91cdb83881ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1572109646045-7cce4196cfd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1518655513281-e90740bd56b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      ],
    };
  }

  PurchaseScreen = () => {
    this.props.navigation.navigate('PurchaseScreen');
  };
  message = () => {
    this.props.navigation.navigate('Chat');
  };
  render() {
    return (
      <ScrollableView>
        <View>
          <Text name="Location">Location</Text>
          <Text name="OwnerName">OwnerName</Text>
          <Text name="Size">Size</Text>
          <Text name="Price">Price</Text>
          <Text>Description</Text>
          <Text>This is a very long description of the property</Text>
        </View>
        <View>
          <Text>Images</Text>
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={200}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: 'rgba(128, 128, 128, 0.92)',
            }}
            ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
            imageLoadingColor="#FFC107"
          />
          {/* <TouchableOpacity onPress={() => this.continue}>
            <Text>Save</Text>
          </TouchableOpacity>  */}
          <TouchableOpacity onPress={() => this.PurchaseScreen}>
            <Text>Continue to Purchase</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.message}>
            <Text>message seller</Text>
          </TouchableOpacity>
        </View>
      </ScrollableView>
    );
  }
}

export default Details;
