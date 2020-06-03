/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, StatusBar, Image, Text} from 'react-native';
import Dialog, {SlideAnimation, DialogContent} from 'react-native-popup-dialog';
// import Howitworks from './appmodules/screens/howitworks.js';
import login from '/home/javier/final_Project/PataShamba/appmodules/screens/login.js';
import Signup from '/home/javier/final_Project/PataShamba/appmodules/screens/signup.js';
import Home from '/home/javier/final_Project/PataShamba/appmodules/screens/Home.js';
import Welcome from '/home/javier/final_Project/PataShamba/appmodules/screens/welcome.js';
import Chat from '/home/javier/final_Project/PataShamba/appmodules/screens/Chat.js';
import Filter from '/home/javier/final_Project/PataShamba/appmodules/screens/Filter.js';
import More from '/home/javier/final_Project/PataShamba/appmodules/screens/More.js';

// screens in the more tab
import SellOpt from '/home/javier/final_Project/PataShamba/appmodules/screens/SellOpt.js';
import Saved from '/home/javier/final_Project/PataShamba/appmodules/screens/Saved.js';
import PurchaseStatus from '/home/javier/final_Project/PataShamba/appmodules/screens/PurchaseStatus.js';
import Profile from '/home/javier/final_Project/PataShamba/appmodules/screens/Profile.js';
import ContactUs from '/home/javier/final_Project/PataShamba/appmodules/screens/ContactUs.js';

//import {Profile} from '/home/javier/final_Project/PataShamba/appmodules/screens/Profile.js';
//import {Settings} from '/home/javier/final_Project/PataShamba/appmodules/screens/Settings.js';
//import {Logout} from '/home/javier/final_Project/PataShamba/appmodules/screens/Logout.js';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//import {createDrawerNavigator} from '@react-navigation/drawer';
//import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//firebase
import fire from '/home/javier/final_Project/PataShamba/src/config.js';

import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const PataShambaTabs = createMaterialBottomTabNavigator();
console.disableYellowBox = true;

export default class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     visible: false,
  //   };
  // }

  createBottomTabs = () => {
    const homeIcon = (
      <Icon
        style={[{color: '#388E3C', paddingBottom: 20}]}
        size={24}
        name={'home'}
      />
    );

    return (
      <PataShambaTabs.Navigator
        initialRouteName="Home"
        barStyle={{
          backgroundColor: 'white',
          activeTintColor: '#388E3C',
          inactiveTintColor: '#388E3C',
          padding: 0,
        }}>
        <PataShambaTabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => homeIcon,
          }}
        />
        <PataShambaTabs.Screen
          name="Filter"
          component={Filter}
          options={{
            tabBarIcon: () => (
              <Icon style={[{color: '#388E3C'}]} size={24} name={'find'} />
            ),
          }}
        />
        <PataShambaTabs.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: () => (
              <Icon
                style={[{color: '#388E3C', paddingBottom: 20}]}
                size={24}
                name={'message1'}
              />
            ),
          }}
        />
        <PataShambaTabs.Screen
          name="More"
          component={More}
          options={{
            tabBarIcon: () => (
              <Icon
                style={[{color: '#388E3C', paddingBottom: 20}]}
                size={24}
                name={'bars'}
              />
            ),
          }}
        />
      </PataShambaTabs.Navigator>
    );
  };
  /*
  createDrawer = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    );
  };
  */
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="#388E3C" barStyle="light-content" />
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerStyle: {
                backgroundColor: '#388E3C',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Login"
            component={login}
            options={{
              headerStyle: {
                backgroundColor: '#388E3C',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerStyle: {
                backgroundColor: '#388E3C',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Pata Shamba"
            children={this.createBottomTabs}
            options={{
              headerStyle: {
                backgroundColor: '#388E3C',
              },
              headerLeft: () => (
                <Image
                  source={{
                    uri:
                      'https://logopond.com/logos/c7e0af2452441e2ca3288316592d6399.png',
                  }}
                  style={[
                    {width: 35, height: 35, borderRadius: 50, margin: 25},
                  ]}
                />
              ),
              headerRight: () => (
                <Icon
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={[{color: 'white', margin: 25}]}
                  size={20}
                  name={'shoppingcart'}
                  // onPress={() => {
                  //   console.log('logout pressed');
                  //   fire
                  //     .auth()
                  //     .signOut()
                  //     .then(
                  //       () => this.props.navigation.navigate('Welcome'),
                  //       console.log('User signed out!'),
                  //     );
                  // }}
                />
              ),
              // (
              //   <Dialog
              //     visible={this.state.visible}
              //     onTouchOutside={() => {
              //       this.setState({visible: false});
              //     }}
              //     dialogAnimation={
              //       new SlideAnimation({
              //         slideFrom: 'top',
              //       })
              //     }>
              //     <DialogContent>
              //       <Text>This is the dialog</Text>
              //     </DialogContent>
              //   </Dialog>,
              // ),
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="SellOpt"
            component={SellOpt}
            options={{
              headerStyle: {
                backgroundColor: '#388E3C',
              },
              headerTitle: () => <Text>Opt To Sell</Text>,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Saved"
            component={Saved}
            options={{
              headerStyle: {
                backgroundColor: '#388E3C',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="PurchaseStatus"
            component={PurchaseStatus}
            options={{
              headerStyle: {
                backgroundColor: '#388E3C',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="ContactUs"
            component={ContactUs}
            options={{
              headerStyle: {
                backgroundColor: '#388E3C',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerStyle: {
                backgroundColor: '#388E3C',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const style = StyleSheet.create({
  welcomeHeader: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#388E3C',
  },
});
