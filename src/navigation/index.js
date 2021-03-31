import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import AddMemberScreen from '../screens/AddMemberScreen';
// import InfoScreen from '../screens/InfoScreen';
// import EditMemberScreen from '../screens/EditMemberScreen';

const Stack = createStackNavigator();

export default class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AddMemberScreen">
          <Stack.Screen name="My Members" component={AddMemberScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
