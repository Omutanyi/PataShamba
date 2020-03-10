import 'react-native-gesture-handler';
import React, {Component} from 'react';
// import Howitworks from './appmodules/screens/howitworks.js';
import login from '/home/javier/final_Project/PataShamba/appmodules/screens/login.js';
import Signup from '/home/javier/final_Project/PataShamba/appmodules/screens/signup.js';
import Home from '/home/javier/final_Project/PataShamba/appmodules/screens/Home.js';
import Welcome from '/home/javier/final_Project/PataShamba/appmodules/screens/welcome.js';
import Chat from '/home/javier/final_Project/PataShamba/appmodules/screens/Chat.js';
import Filter from '/home/javier/final_Project/PataShamba/appmodules/screens/Filter.js';
import More from '/home/javier/final_Project/PataShamba/appmodules/screens/More.js';

//import {Profile} from '/home/javier/final_Project/PataShamba/appmodules/screens/Profile.js';
//import {Settings} from '/home/javier/final_Project/PataShamba/appmodules/screens/Settings.js';
//import {Logout} from '/home/javier/final_Project/PataShamba/appmodules/screens/Logout.js';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//import {createDrawerNavigator} from '@react-navigation/drawer';
//import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const PataShambaTabs = createMaterialBottomTabNavigator();

export default class App extends Component {
  createBottomTabs = () => {
    return (
      <PataShambaTabs.Navigator>
        <PataShambaTabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Icon style={[{color: '#ffedcc'}]} size={35} name={'home'} />
            ),
          }}
        />
        <PataShambaTabs.Screen
          name="Filter"
          component={Filter}
          options={{
            tabBarIcon: () => (
              <Icon style={[{color: '#ffedcc'}]} size={29} name={'search'} />
            ),
          }}
        />
        <PataShambaTabs.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: () => (
              <Icon style={[{color: '#ffedcc'}]} size={29} name={'message'} />
            ),
          }}
        />
        <PataShambaTabs.Screen
          name="More"
          component={More}
          options={{
            tabBarIcon: () => (
              <Icon style={[{color: '#ffedcc'}]} size={29} name={'more'} />
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
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerVisibility: 'none',
            }}
          />
          <Stack.Screen name="Login" component={login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Pata Shamba" children={this.createBottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
