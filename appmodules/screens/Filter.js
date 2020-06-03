/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/AntDesign';

const {width: WIDTH} = Dimensions.get('window');

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // spinner: false,
      images: [
        'https://images.unsplash.com/photo-1554129351-dd3625ed5f30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1562939568-91cdb83881ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1572109646045-7cce4196cfd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1518655513281-e90740bd56b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      ],
    };
  }
  render() {
    return (
      <ScrollView style={filterStyles.primaryView}>
        <View style={filterStyles.searchView}>
          <TextInput
            placeholder="Search availlable lands"
            style={filterStyles.searchInput}
          />
          <TouchableOpacity style={filterStyles.searchBtn}>
            <Text style={filterStyles.btnText}>SEARCH</Text>
          </TouchableOpacity>
        </View>

        <View style={filterStyles.cardContainer}>
          {/* <Image
            style={filterStyles.cardImage}
            source={{
              uri:
                'https://images.unsplash.com/photo-1523704323981-90633778233a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          /> */}
          <View>
            <Text style={filterStyles.locationText}>Kitengela</Text>
            <Text style={filterStyles.descriptionText}>Johnnie Walker</Text>
            <Text style={filterStyles.descriptionText}>1/4 acres</Text>
            <Text style={filterStyles.priceText}>Kshs. 800,000</Text>
            <Text style={filterStyles.detailsText}>
              This is a brief description of the property. This stylish
              residence is nestled on a large level block in a desirably
              tranquil cul-de-sac location. The house comes complete with two
              living rooms, a welcoming kitchen/dining area, two bathrooms,
              three bedrooms, a study and a laundry, and retains the value of
              peaceful living while being conveniently close to shops, school
              and transport.
            </Text>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={200}
              // onCurrentImagePressed={index =>
              //   console.warn(`image ${index} pressed`)
              // }
              dotColor="#FFC107"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={20}
              // autoplay
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
                borderRadius: 7,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
                backgroundColor: 'rgba(128, 128, 128, 0.92)',
              }}
              ImageComponentStyle={{
                borderRadius: 10,
                width: '80%',
                marginTop: 25,
              }}
              imageLoadingColor="#FFC107"
            />
            {/* <TouchableOpacity
              style={filterStyles.detailsBtn}
              onPress={() => this.continue}>
              <Text style={filterStyles.detailsBtnTxt}>Details</Text>
            </TouchableOpacity> */}
            <View style={filterStyles.iconContainer}>
              <Icon style={filterStyles.cardIcon} size={20} name={'message1'} />
              <Icon style={filterStyles.cardIcon} size={20} name={'hearto'} />
              <Icon style={filterStyles.cardIcon} size={20} name={'save'} />
              <Icon style={filterStyles.cardIcon} size={20} name={'sharealt'} />
            </View>
          </View>
        </View>
        <View style={filterStyles.cardContainer}>
          {/* <Image
            style={filterStyles.cardImage}
            source={{
              uri:
                'https://images.unsplash.com/photo-1523704323981-90633778233a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          /> */}
          <View>
            <Text style={filterStyles.locationText}>Kitengela</Text>
            <Text style={filterStyles.descriptionText}>Johnnie Walker</Text>
            <Text style={filterStyles.descriptionText}>1/4 acres</Text>
            <Text style={filterStyles.priceText}>Kshs. 800,000</Text>
            <Text style={filterStyles.detailsText}>
              This is a brief description of the property. This stylish
              residence is nestled on a large level block in a desirably
              tranquil cul-de-sac location. The house comes complete with two
              living rooms, a welcoming kitchen/dining area, two bathrooms,
              three bedrooms, a study and a laundry, and retains the value of
              peaceful living while being conveniently close to shops, school
              and transport.
            </Text>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={200}
              // onCurrentImagePressed={index =>
              //   console.warn(`image ${index} pressed`)
              // }
              dotColor="#FFC107"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={20}
              // autoplay
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
                borderRadius: 7,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
                backgroundColor: 'rgba(128, 128, 128, 0.92)',
              }}
              ImageComponentStyle={{
                borderRadius: 10,
                width: '80%',
                marginTop: 25,
              }}
              imageLoadingColor="#FFC107"
            />
            {/* <TouchableOpacity
              style={filterStyles.detailsBtn}
              onPress={() => this.continue}>
              <Text style={filterStyles.detailsBtnTxt}>Details</Text>
            </TouchableOpacity> */}
            <View style={filterStyles.iconContainer}>
              <Icon style={filterStyles.cardIcon} size={20} name={'message1'} />
              <Icon style={filterStyles.cardIcon} size={20} name={'hearto'} />
              <Icon style={filterStyles.cardIcon} size={20} name={'save'} />
              <Icon style={filterStyles.cardIcon} size={20} name={'sharealt'} />
            </View>
          </View>
        </View>
        <View style={filterStyles.cardContainer}>
          {/* <Image
            style={filterStyles.cardImage}
            source={{
              uri:
                'https://images.unsplash.com/photo-1523704323981-90633778233a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          /> */}
          <View>
            <Text style={filterStyles.locationText}>Kitengela</Text>
            <Text style={filterStyles.descriptionText}>Johnnie Walker</Text>
            <Text style={filterStyles.descriptionText}>1/4 acres</Text>
            <Text style={filterStyles.priceText}>Kshs. 800,000</Text>
            <Text style={filterStyles.detailsText}>
              This is a brief description of the property. This stylish
              residence is nestled on a large level block in a desirably
              tranquil cul-de-sac location. The house comes complete with two
              living rooms, a welcoming kitchen/dining area, two bathrooms,
              three bedrooms, a study and a laundry, and retains the value of
              peaceful living while being conveniently close to shops, school
              and transport.
            </Text>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={200}
              // onCurrentImagePressed={index =>
              //   console.warn(`image ${index} pressed`)
              // }
              dotColor="#FFC107"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={20}
              // autoplay
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
                borderRadius: 7,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
                backgroundColor: 'rgba(128, 128, 128, 0.92)',
              }}
              ImageComponentStyle={{
                borderRadius: 10,
                width: '80%',
                marginTop: 25,
              }}
              imageLoadingColor="#FFC107"
            />
            {/* <TouchableOpacity
              style={filterStyles.detailsBtn}
              onPress={() => this.continue}>
              <Text style={filterStyles.detailsBtnTxt}>Details</Text>
            </TouchableOpacity> */}
            <View style={filterStyles.iconContainer}>
              <Icon style={filterStyles.cardIcon} size={20} name={'message1'} />
              <Icon style={filterStyles.cardIcon} size={20} name={'hearto'} />
              <Icon style={filterStyles.cardIcon} size={20} name={'save'} />
              <Icon style={filterStyles.cardIcon} size={20} name={'sharealt'} />
            </View>
          </View>
        </View>
        <View style={filterStyles.cardContainer}>
          {/* <Image
            style={filterStyles.cardImage}
            source={{
              uri:
                'https://images.unsplash.com/photo-1523704323981-90633778233a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          /> */}
          <View>
            <Text style={filterStyles.locationText}>Kitengela</Text>
            <Text style={filterStyles.descriptionText}>Johnnie Walker</Text>
            <Text style={filterStyles.descriptionText}>1/4 acres</Text>
            <Text style={filterStyles.priceText}>Kshs. 800,000</Text>
            <Text style={filterStyles.detailsText}>
              This is a brief description of the property. This stylish
              residence is nestled on a large level block in a desirably
              tranquil cul-de-sac location. The house comes complete with two
              living rooms, a welcoming kitchen/dining area, two bathrooms,
              three bedrooms, a study and a laundry, and retains the value of
              peaceful living while being conveniently close to shops, school
              and transport.
            </Text>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={200}
              // onCurrentImagePressed={index =>
              //   console.warn(`image ${index} pressed`)
              // }
              dotColor="#FFC107"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={20}
              // autoplay
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
                borderRadius: 7,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
                backgroundColor: 'rgba(128, 128, 128, 0.92)',
              }}
              ImageComponentStyle={{
                borderRadius: 10,
                width: '80%',
                marginTop: 25,
              }}
              imageLoadingColor="#FFC107"
            />
            {/* <TouchableOpacity
              style={filterStyles.detailsBtn}
              onPress={() => this.continue}>
              <Text style={filterStyles.detailsBtnTxt}>Details</Text>
            </TouchableOpacity> */}
            <View style={filterStyles.iconContainer}>
              <Icon style={filterStyles.cardIcon} size={20} name={'message1'} />
              <Icon style={filterStyles.cardIcon} size={20} name={'heart'} />
              <Icon style={filterStyles.cardIcon} size={20} name={'save'} />
              <Icon style={filterStyles.cardIcon} size={20} name={'sharealt'} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const filterStyles = StyleSheet.create({
  primaryView: {
    backgroundColor: '#C8E6C9',
  },
  searchView: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  searchInput: {
    width: WIDTH - 80,
    height: 45,
    borderRadius: 0,
    paddingLeft: 25,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
    alignSelf: 'center',
  },
  searchBtn: {
    height: 45,
    padding: 20,
    borderRadius: 0,
    color: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFC107',
  },
  btnText: {
    fontWeight: '500',
    fontSize: 15,
    fontFamily: 'notoserif',
    color: '#388E3C',
  },
  cardContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    // margin: 5,
    left: 5,
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,
    width: WIDTH - 10,
    padding: 10,
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    // margin: 30,
    // width: WIDTH - 10,
    paddingLeft: 30,
    top: 5,
    left: 35,
    bottom: 5,
    height: 30,
  },
  cardIcon: {
    color: 'black',
    marginRight: 50,
  },
  cardImage: {
    width: 90,
    height: 70,
    marginRight: 10,
  },
  locationText: {
    fontWeight: '700',
    fontSize: 17,
    fontFamily: 'notoserif',
    color: '#388E3C',
  },
  descriptionText: {
    fontWeight: '300',
    fontSize: 15,
    fontFamily: 'notoserif',
    color: '#757575',
  },
  detailsText: {
    fontWeight: '300',
    top: 10,
    fontSize: 13,
    fontFamily: 'notoserif',
    color: '#757575',
    padding: 10,
    paddingRight: 20,
  },
  priceText: {
    fontWeight: '300',
    fontSize: 15,
    fontFamily: 'notoserif',
    color: '#388E3C',
    marginLeft: 20,
  },
  // detailsBtn: {
  //   left: 130,
  //   bottom: 20,
  //   backgroundColor: 'black',
  // },
  // detailsBtnTxt: {
  //   fontWeight: '300',
  //   fontSize: 15,
  //   fontFamily: 'notoserif',
  //   color: '#388E3C',
  // },
});

export default Filter;
