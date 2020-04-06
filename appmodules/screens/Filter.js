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

const {width: WIDTH} = Dimensions.get('window');

class Filter extends Component {
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
        <TouchableOpacity style={filterStyles.cardContainer}>
          <Image
            style={filterStyles.cardImage}
            source={{
              uri:
                'https://images.unsplash.com/photo-1523704323981-90633778233a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          />
          <View>
            <Text style={filterStyles.locationText}>Kitengela</Text>
            <Text style={filterStyles.descriptionText}>Johnnie Walker</Text>
            <Text style={filterStyles.descriptionText}>1/4 acres</Text>
            <Text style={filterStyles.priceText}>Kshs. 800,000</Text>
            {/* <TouchableOpacity
              style={filterStyles.detailsBtn}
              onPress={() => this.continue}>
              <Text style={filterStyles.detailsBtnTxt}>Details</Text>
            </TouchableOpacity> */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={filterStyles.cardContainer}>
          <Image
            style={filterStyles.cardImage}
            source={{
              uri:
                'https://images.unsplash.com/photo-1542028457068-736edcec3ab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          />
          <View>
            <Text style={filterStyles.locationText}>Kitengela</Text>
            <Text style={filterStyles.descriptionText}>Johnnie Walker</Text>
            <Text style={filterStyles.descriptionText}>1/4 acres</Text>
            <Text style={filterStyles.priceText}>Kshs. 800,000</Text>
            {/* <TouchableOpacity
              style={filterStyles.detailsBtn}
              onPress={() => this.continue}>
              <Text style={filterStyles.detailsBtnTxt}>Details</Text>
            </TouchableOpacity> */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={filterStyles.cardContainer}>
          <Image
            style={filterStyles.cardImage}
            source={{
              uri:
                'https://images.unsplash.com/photo-1548382340-e7280a94e3ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          />
          <View>
            <Text style={filterStyles.locationText}>Kitengela</Text>
            <Text style={filterStyles.descriptionText}>Johnnie Walker</Text>
            <Text style={filterStyles.descriptionText}>1/4 acres</Text>
            <Text style={filterStyles.priceText}>Kshs. 800,000</Text>
            {/* <TouchableOpacity
              style={filterStyles.detailsBtn}
              onPress={() => this.continue}>
              <Text style={filterStyles.detailsBtnTxt}>Details</Text>
            </TouchableOpacity> */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={filterStyles.cardContainer}>
          <Image
            style={filterStyles.cardImage}
            source={{
              uri:
                'https://images.unsplash.com/photo-1541590893527-5e6ab3a2745c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=',
            }}
          />
          <View>
            <Text style={filterStyles.locationText}>Kitengela</Text>
            <Text style={filterStyles.descriptionText}>Johnnie Walker</Text>
            <Text style={filterStyles.descriptionText}>1/4 acres</Text>
            <Text style={filterStyles.priceText}>Kshs. 800,000</Text>
            {/* <TouchableOpacity
              style={filterStyles.detailsBtn}
              onPress={() => this.continue}>
              <Text style={filterStyles.detailsBtnTxt}>Details</Text>
            </TouchableOpacity> */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={filterStyles.cardContainer}>
          <Image
            style={filterStyles.cardImage}
            source={{
              uri:
                'https://images.unsplash.com/photo-1523704323981-90633778233a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          />
          <View>
            <Text style={filterStyles.locationText}>Kitengela</Text>
            <Text style={filterStyles.descriptionText}>Johnnie Walker</Text>
            <Text style={filterStyles.descriptionText}>1/4 acres</Text>
            <Text style={filterStyles.priceText}>Kshs. 800,000</Text>
            {/* <TouchableOpacity
              style={filterStyles.detailsBtn}
              onPress={() => this.continue}>
              <Text style={filterStyles.detailsBtnTxt}>Details</Text>
            </TouchableOpacity> */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={filterStyles.cardContainer}>
          <Image
            style={filterStyles.cardImage}
            source={{
              uri:
                'https://images.unsplash.com/photo-1523704323981-90633778233a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          />
          <View>
            <Text style={filterStyles.locationText}>Kitengela</Text>
            <Text style={filterStyles.descriptionText}>Johnnie Walker</Text>
            <Text style={filterStyles.descriptionText}>1/4 acres</Text>
            <Text style={filterStyles.priceText}>Kshs. 800,000</Text>
            {/* <TouchableOpacity
              style={filterStyles.detailsBtn}
              onPress={() => this.continue}>
              <Text style={filterStyles.detailsBtnTxt}>Details</Text>
            </TouchableOpacity> */}
          </View>
        </TouchableOpacity>
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
    margin: 5,
    padding: 10,
  },
  cardImage: {
    width: 90,
    height: 70,
    marginRight: 10,
  },
  locationText: {
    fontWeight: '700',
    fontSize: 15,
    fontFamily: 'notoserif',
    color: '#388E3C',
  },
  descriptionText: {
    fontWeight: '300',
    fontSize: 13,
    fontFamily: 'notoserif',
    color: '#757575',
  },
  priceText: {
    fontWeight: '300',
    fontSize: 15,
    fontFamily: 'notoserif',
    color: '#388E3C',
    marginTop: 20,
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
