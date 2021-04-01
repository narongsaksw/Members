import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import MainMemberScreen from '../screens/MainMemberScreen';
import AddMemberScreen from '../screens/AddMemberScreen';
import EditMemberScreen from '../screens/EditMemberScreen';

const Stack = createStackNavigator();

export default class Navigation extends Component {
  render() {
    const screenOptions = {
      headerStyle: {
        backgroundColor: '#0085e6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        textAlign: 'center',
      },
    };
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="My Members"
          screenOptions={screenOptions}>
          <Stack.Screen
            name="MainMemberScreen"
            component={MainMemberScreen}
            options={{title: 'My Members'}}
          />
          <Stack.Screen
            name="AddMemberScreen"
            component={AddMemberScreen}
            options={{title: 'Add new member'}}
          />
          <Stack.Screen
            name="EditMemberScreen"
            component={EditMemberScreen}
            options={{title: 'Edit member'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
