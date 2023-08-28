import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface IButton {
  title?: string;
  onButtonPress: () => void;
}

export const Button = (props: IButton): JSX.Element => {
  console.log('Inside Button');
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.navigationButton}
      onPress={props?.onButtonPress}>
      <Text>{props?.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navigationButton: {
    marginTop: 80,
    borderColor: '#000',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
});
