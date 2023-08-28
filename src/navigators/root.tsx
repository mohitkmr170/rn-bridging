import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Root, AudioBridging, Optimization, BLE} from '../containers';

const Stack = createStackNavigator();

export function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="AudioBridging" component={AudioBridging} />
        <Stack.Screen name="Optimization" component={Optimization} />
        <Stack.Screen name="BLE" component={BLE} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
