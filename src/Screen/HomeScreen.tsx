import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import {Context as ApiContex} from '../context/createDataContext';
import HorizontalList from '../components/HorizontalList';
import {article} from '../types/article';
import VerticalList from '../components/VerticalList';

interface Iprops {
  navigation: any;
}

const HomeScreen = (prop: Iprops): JSX.Element => {
  let {navigation} = prop;
  let {state, GetInfo} = useContext(ApiContex);
  let articles = state as article[];
  useEffect(() => {
    GetInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <View style={{flex: 1}}>
        <HorizontalList articles={articles} navigation={navigation} />
        <View style={{flex: 2}}>
          <VerticalList articles={articles} />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
