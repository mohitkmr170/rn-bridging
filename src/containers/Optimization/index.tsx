import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface IOptimization {}

export const Optimization = (props: IOptimization): JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <Text>Hello optimisations</Text>
    </View>
  );
};
