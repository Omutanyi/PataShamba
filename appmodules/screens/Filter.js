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

const {width: WIDTH} = Dimensions.get('window');

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const landsRef = firestore().collection('Lands');
    const snapshot = await landsRef.get();
    var newDataArray = this.state.data.slice();
    snapshot.forEach(doc => {
      // console.log(doc.id, '=>', doc.data());
      newDataArray.push(doc.data());
      this.setState({data: newDataArray});
      console.log(newDataArray);
    });

    // let landDetails = await firestore().collection('Lands');

    // let getDoc = landsRef
    //   .get()
    //   .then(doc => {
    //     if (!doc.exists) {
    //       console.log('No such document!');
    //     } else {
    //       console.log('LandDetails data:', doc.data());
    //       var newDataArray = this.state.data.slice();
    //       newDataArray.push(doc.data());
    //       this.setState({data: newDataArray});
    //       console.log(this.state.data);
    //       if (newDataArray.length <= 1) {
    //         console.log('array is short');
    //         this.savedata();
    //       } else {
    //         console.log('array is long');
    //       }
    //     }
    //   })
    //   .catch(err => {
    //     console.log('Error getting document', err);
    //   });
  }

  render() {
    return (
      <ScrollView style={filterStyles.primaryView}>
        <View style={filterStyles.searchView}>
          <TextInput
            placeholder="Search available lands"
            style={filterStyles.searchInput}
          />
          <TouchableOpacity style={filterStyles.searchBtn}>
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
                <Text style={filterStyles.locationText}>{data.Location}</Text>
                <Text style={filterStyles.descriptionText}>{data.Owner}</Text>
                <Text style={filterStyles.descriptionText}>{data.Size}</Text>
                <Text style={filterStyles.priceText}>Kshs. {data.Price}</Text>
                <Text style={filterStyles.detailsText}>{data.Description}</Text>
                {/* <SliderBox
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
              /> */}
                {/* <TouchableOpacity
              style={filterStyles.detailsBtn}
              onPress={() => this.continue}>
              <Text style={filterStyles.detailsBtnTxt}>Details</Text>
            </TouchableOpacity> */}
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
                  <Text style={{color: 'red', left: 10}}>{data.Likes}</Text>
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
});

export default Filter;
