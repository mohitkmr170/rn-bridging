import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AudioBridging, Optimization} from '../containers';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AudioBridging">
        <Stack.Screen name="AudioBridging" component={AudioBridging} />
        <Stack.Screen name="Optimization" component={Optimization} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
