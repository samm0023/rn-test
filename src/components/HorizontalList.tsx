import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {article} from '../types/article';
import ItemCar from './ItemCard';

interface Iprops {
  articles: article[];
  navigation: any;
}

const HorizontalList = (prop: Iprops): JSX.Element => {
  let {articles, navigation} = prop;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 2, flexDirection: 'column'}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={articles}
        keyExtractor={(result, id) => id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', {item: item})}>
              <ItemCar article={item} navigation={navigation} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default HorizontalList;
