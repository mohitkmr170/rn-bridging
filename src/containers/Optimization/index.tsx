import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {getUniversities} from '../../services/getUniversities';

interface IOptimization {}

const ITEM_HEIGHT = 100;

export const Optimization = (props: IOptimization): JSX.Element => {
  const [universities, setUniversities] = useState([]);
  const ref = useRef<FlatList>(null);
  async function getUniversitiesOverNetwork() {
    try {
      let universitiesLocal = getUniversities();
      setUniversities(universitiesLocal);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUniversitiesOverNetwork();
  }, []);

  console.log('Hi optimisation :', universities);

  /*
  {
      domains: ['marywood.edu'],
      'state-province': null,
      country: 'United States',
      alpha_two_code: 'US',
      web_pages: ['http://www.marywood.edu'],
      name: 'Marywood University',
    }
  */

  function scrollListToBottom() {
    ref?.current?.scrollToEnd();
  }
  function scrollListToIndex() {
    ref?.current?.scrollToIndex({
      index: universities.length / 2,
    });
  }

  const renderItem = useCallback(
    ({item, index}) => (
      <View
        style={{
          width: '90%',
          borderColor: 'black',
          borderWidth: 1,
          margin: 4,
          height: ITEM_HEIGHT,
        }}>
        <Text>Domains: {item?.domains}</Text>
        <Text>Country: {item?.country}</Text>
        <Text>alpha_two_code: {item?.alpha_two_code}</Text>
        <Text>web_pages: {item?.web_pages}</Text>
        <Text>name: {item?.name}</Text>
      </View>
    ),
    [],
  );

  const getItemLayout = useCallback(
    (item, index) => ({
      index,
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
    }),
    [],
  );

  const keyExtractor = useCallback((item, index) => index.toString(), []);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={{borderWidth: 1, borderColor: 'blue', marginTop: 20}}
        onPress={scrollListToBottom}>
        <Text>Scroll to botton</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{borderWidth: 1, borderColor: 'blue', marginTop: 20}}
        onPress={scrollListToIndex}>
        <Text>Scroll to Index</Text>
      </TouchableOpacity>
      <View style={{flex: 1, marginTop: 20}}>
        <Text>List starts here</Text>
        {/* <ScrollView>
          {universities.map((item, index) => (
            <View
              style={{
                width: '90%',
                borderColor: 'black',
                borderWidth: 1,
                margin: 4,
              }}>
              <Text>Domains: {item?.domains}</Text>
              <Text>Country: {item?.country}</Text>
              <Text>alpha_two_code: {item?.alpha_two_code}</Text>
              <Text>web_pages: {item?.web_pages}</Text>
              <Text>name: {item?.name}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          ref={ref}
          data={universities}
          keyExtractor={keyExtractor}
          initialNumToRender={20}
          maxToRenderPerBatch={9}
          windowSize={9}
          getItemLayout={getItemLayout}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};
