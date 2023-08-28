import React, {useCallback} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

const NAVIGATION_ROUTES = ['AudioBridging', 'Optimization', 'BLE'];

interface IRoot {
  navigation: {
    navigate: (routeName: string) => void;
  };
}

export const Root = (props: IRoot): JSX.Element => {
  function renderItem(item, index) {
    return (
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate(item)}
        style={{
          width: '100%',
          borderColor: '#000',
          borderWidth: 1,
          padding: 12,
        }}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  }

  const renderItemCallback = useCallback(
    ({item, index}) => renderItem(item, index),
    [],
  );

  const keyExtractor = useCallback((item, index) => index.toString(), []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={NAVIGATION_ROUTES}
        renderItem={renderItemCallback}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};
