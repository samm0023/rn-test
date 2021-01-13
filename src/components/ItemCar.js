import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-elements';

const ItemCar = ({item}) => {
  let d = new Date();
  return (
    <>
      <Card containerStyle={style.mainStyle}>
        <Card.Image
          source={{uri: item.urlToImage}}
          style={style.cardImageStyle}
        />
        <View style={style.footerStyle}>
          <Text style={style.titleContent} h4>
            {item.title}
          </Text>
          <Text style={{fontSize: 12}}>Santo Antonio Mota Matos,SD</Text>
          <Text style={{color: '#DBDBDB', fontSize: 9}}>
            {`${d.toString().substr(0, 15)} - read 2 min`}
          </Text>
        </View>
      </Card>
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
export default ItemCar;
