import React, {useContext, useEffect} from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {Context as ApiContex} from '../context/apiContext';

import ItemCar from '../components/ItemCar';
import DetailInfo from '../components/DetailInfo';

const HomeScreen = ({navigation}) => {
  let {
    state: {articles},
    GetInfo,
  } = useContext(ApiContex);

  useEffect(() => {
    GetInfo();
  }, []);

  return (
    <>
      <View style={{flex: 1}}>
        <View style={{flex: 2, flexDirection: 'column'}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={articles}
            keyExtractor={(result, id) => id.toString()}
            renderItem={({item, id}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Detail', {item: item})}>
                  <ItemCar item={item} id={id} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{flex: 2}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={articles}
            keyExtractor={(result, id) => id.toString()}
            renderItem={({item, id}) => {
              return (
                <TouchableOpacity>
                  <DetailInfo item={item} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  mainStyle: {
    width: 270,
    height: 300,
    paddingStart: 0,
    paddingEnd: 0,
    paddingTop: 0,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  cardImageStyle: {
    height: 150,
  },
  footerStyle: {paddingLeft: 15, paddingRight: 15},
  titleContent: {marginBottom: 25, marginTop: 15, height: 60},
});

export default HomeScreen;
