import 'react-native-gesture-handler';
import React from 'react';
import {howitworks} from '/home/javier/final_Project/PataShamba/appmodules/screens/howitworks.js';
import {login} from '/home/javier/final_Project/PataShamba/appmodules/screens/login.js';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={login} />
          <Stack.Screen name="How it works" component={howitworks} />
        </Stack.Navigator>
      }
      ; }
    </NavigationContainer>
  );
}
