import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import BleManager from 'react-native-ble-manager';

export const BLE = (props: any): JSX.Element => {
  useEffect(() => {
    // start bluetooth manager
    BleManager.start({showAlert: false}).then(() => {
      console.log('BleManager initialized');
    });
  }, []);

  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity>
        <Text>Scan for devices</Text>
      </TouchableOpacity>
    </View>
  );
};
