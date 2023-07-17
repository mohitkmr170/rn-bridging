import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {RootApp} from './src/navigators/root';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#e4e5ea'} />
      <RootApp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4e5ea',
    flex: 1,
    paddingTop: 50,
  },
});

export default App;
