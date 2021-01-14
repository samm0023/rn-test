import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {article} from '../types/article';
import DetailInfo from './DetailInfo';

interface Iprops {
  articles: article[];
}

const VerticalList = (prop: Iprops): JSX.Element => {
  let {articles} = prop;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 2, flexDirection: 'column'}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={articles}
        keyExtractor={(result, id) => id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <DetailInfo article={item} id={Math.random().toString()} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default VerticalList;
