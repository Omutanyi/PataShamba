/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');

const datax = [
  {
    description:
      'RESIDENTIAL LAND for sale in Marula Lane, Karen RESIDENTIAL LAND Are you looking for a place to develop and call home? We got you covered.  This very pleasant residential, one- acre plot is well set up in a gated community near Karen Country Club in a serene and secure environment. The plot is rich in red soil with lots of indigenous shrubs and a great view of the Ngong Hills. You do not have to worry about electricity and water since it is already connected.  Plot is Negotiable.  Book a viewing today!',
    size: '6 acres',
    likes: 57,
    location: 'Kitengela',
  },
  {
    description:
      'RESIDENTIAL LAND for sale in Marula Lane, Karen RESIDENTIAL LAND Are you looking for a place to develop and call home? We got you covered.  This very pleasant residential, one- acre plot is well set up in a gated community near Karen Country Club in a serene and secure environment. The plot is rich in red soil with lots of indigenous shrubs and a great view of the Ngong Hills. You do not have to worry about electricity and water since it is already connected.  Plot is Negotiable.  Book a viewing today!',
    size: '3 acres',
    likes: 85,
    location: 'Ngong',
  },
  {
    description:
      'RESIDENTIAL LAND for sale in Marula Lane, Karen RESIDENTIAL LAND Are you looking for a place to develop and call home? We got you covered.  This very pleasant residential, one- acre plot is well set up in a gated community near Karen Country Club in a serene and secure environment. The plot is rich in red soil with lots of indigenous shrubs and a great view of the Ngong Hills. You do not have to worry about electricity and water since it is already connected.  Plot is Negotiable.  Book a viewing today!',
    size: '1 acre',
    likes: 37,
    location: 'Kajiado',
  },
  {
    description:
      'RESIDENTIAL LAND for sale in Marula Lane, Karen RESIDENTIAL LAND Are you looking for a place to develop and call home? We got you covered.  This very pleasant residential, one- acre plot is well set up in a gated community near Karen Country Club in a serene and secure environment. The plot is rich in red soil with lots of indigenous shrubs and a great view of the Ngong Hills. You do not have to worry about electricity and water since it is already connected.  Plot is Negotiable.  Book a viewing today!',
    size: '4 acres',
    likes: 157,
    location: 'Ruiru',
  },
  {
    description:
      'RESIDENTIAL LAND for sale in Marula Lane, Karen RESIDENTIAL LAND Are you looking for a place to develop and call home? We got you covered.  This very pleasant residential, one- acre plot is well set up in a gated community near Karen Country Club in a serene and secure environment. The plot is rich in red soil with lots of indigenous shrubs and a great view of the Ngong Hills. You do not have to worry about electricity and water since it is already connected.  Plot is Negotiable.  Book a viewing today!',
    size: '10 acres',
    likes: 371,
    location: 'Kiambu',
  },
  {
    description:
      'RESIDENTIAL LAND for sale in Marula Lane, Karen RESIDENTIAL LAND Are you looking for a place to develop and call home? We got you covered.  This very pleasant residential, one- acre plot is well set up in a gated community near Karen Country Club in a serene and secure environment. The plot is rich in red soil with lots of indigenous shrubs and a great view of the Ngong Hills. You do not have to worry about electricity and water since it is already connected.  Plot is Negotiable.  Book a viewing today!',
    size: '15 acres',
    likes: 5127,
    location: 'Kitusuru',
  },
];

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      loading: false,
      data: [],
      details: [],
      images: [
        'https://images.unsplash.com/photo-1554129351-dd3625ed5f30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1562939568-91cdb83881ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1572109646045-7cce4196cfd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1518655513281-e90740bd56b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      ],
    };
  }

  // async componentDidMount() {
  //   const datax = {
  //     Description: 'RESIDENTIAL LAND for sale in Marula Lane,',
  //     Location: 'Karen',
  //     Owner: 'James Kamau',
  //     Price: 450000,
  //     Size: '1/8 acres',
  //   };
  //   await firestore()
  //     .collection('Lands')
  //     .doc()
  //     .set(datax);
  //   console.log('save data called');
  // }

  showDetails = key => event => {
    var detailsArray = this.state.details.slice();
    console.log(key);
    // console.log(this.state.data[key]);
    var landDetails = this.state.data[key];
    detailsArray.push(landDetails);
    this.setState({
      details: detailsArray,
    });
    // console.log(detailsArray);
    this.showArray();
  };

  showArray = () => {
    console.log(this.state.details);
  };

  async componentDidMount() {
    // axios({
    //   method: 'post',
    //   url: 'http://192.168.0.101:8000/lands/',
    //   data: datax,
    // }).then(
    //   response => {
    //     console.log('response after post', response);
    //   },
    //   error => {
    //     console.log(error);
    //   },
    // );192.168.43.77

    axios
      .get('http://192.168.0.101:8000/lands/')
      // .then(res => res.json())
      .then(res => {
        const landRes = res.data;
        this.setState({data: landRes});
        console.log('landRes', landRes);
      })
      .catch(error => {
        console.log('Error fetching doc', error);
      });
  }

  handleSearch = () => {
    var searchTerm = this.state.searchTerm;
    if (searchTerm !== '') {
      //this.setState({loading: true});
      axios
        .get(
          `http://192.168.0.101:8000/lands/SearchLands/${
            this.state.searchTerm
          }`,
        )
        // .then(res => res.json())
        .then(res => {
          const searchRes = res.data;
          this.setState({data: searchRes});
          console.log('searchRes...', searchRes);
          //this.setState({loading: true});
        })
        .catch(error => {
          console.log('Error fetching searchRes', error);
        });
    } else {
      axios
        .get('http://192.168.0.101:8000/lands/')
        // .then(res => res.json())
        .then(res => {
          const landRes = res.data;
          this.setState({data: landRes});
          console.log('landRes', landRes);
        })
        .catch(error => {
          console.log('Error fetching doc', error);
        });
    }
  };

  render() {
    return (
      <ScrollView style={filterStyles.primaryView}>
        <View style={filterStyles.searchView}>
          <TextInput
            placeholder="Enter town to search available lands"
            name="search"
            value={this.state.searchTerm}
            onChangeText={text => this.setState({searchTerm: text})}
            method="get"
            style={filterStyles.searchInput}
          />
          <TouchableOpacity
            style={filterStyles.searchBtn}
            onPress={() => this.handleSearch()}>
            <Text style={filterStyles.btnText}>SEARCH</Text>
          </TouchableOpacity>
        </View>

        {this.state.data.map((data, index) => (
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate('LandInfo', {landData: data})
            }>
            <View style={filterStyles.cardContainer} key={index}>
              <View>
                <Text style={filterStyles.locationText}>{data.town}</Text>
                <Text style={filterStyles.descriptionText}>
                  {data.pub_date}
                </Text>
                <Text style={filterStyles.descriptionText}>{data.size}</Text>
                {/* <Text style={filterStyles.priceText}>Kshs. {data.Price}</Text> */}
                <Text style={filterStyles.detailsText}>{data.description}</Text>
                <View style={filterStyles.iconContainer}>
                  {/* <Icon
                  style={filterStyles.cardIcon}
                  size={20}
                  name={'message1'}
                /> */}
                  <Icon
                    style={filterStyles.cardIcon}
                    size={20}
                    name={'hearto'}
                  />
                  <Text style={{color: 'red', left: 10}}>{data.likes}</Text>
                  <Icon style={filterStyles.cardIcon} size={20} name={'save'} />
                  <Text style={{color: 'grey', left: 10}}>Save</Text>
                  <Icon
                    style={filterStyles.cardIcon}
                    size={20}
                    name={'bars'}
                    onPress={this.showDetails(index)}
                  />
                  <Text style={{color: 'grey', left: 10}}>Details</Text>
                  {/* <Icon
                  style={filterStyles.cardIcon}
                  size={20}
                  name={'sharealt'}
                /> */}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
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
    left: 25,
    bottom: 5,
    height: 30,
  },
  cardIcon: {
    color: 'black',
    marginLeft: 30,
  },
  cardImage: {
    width: 90,
    height: 70,
    marginRight: 10,
  },
  locationText: {
    fontWeight: '400',
    fontSize: 17,
    fontFamily: 'notoserif',
    color: '#388E3C',
  },
  descriptionText: {
    fontWeight: '300',
    fontSize: 12,
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
});

export default Filter;
