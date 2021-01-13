import React from 'react';
import {View} from 'react-native';
import {Text, ListItem, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const DetailInfo = ({item, id}) => {
  let d = new Date();
  return (
    <ListItem key={id} bottomDivider>
      <ListItem.Content>
        <View>
          <Text style={{color: '#DBDBDB'}}>BASE ON YOUR READING HISTORY</Text>
          <Text h4 style={{paddingBottom: 15}}>
            {item.title}
          </Text>
          <Text style={{fontSize: 12}}>Santo Antonio Mota Matos,SD</Text>
          <View>
            <Text style={{color: '#DBDBDB', fontSize: 9}}>
              {`${d.toString().substr(0, 15)} - read 2 min`}
            </Text>
            <Icon name="bookmark-o" size={30} color="#DBDBDB" solid />
          </View>
        </View>
      </ListItem.Content>
      <Avatar source={{uri: item.urlToImage}} size={70} />
    </ListItem>
  );
};

export default DetailInfo;
