import React from 'react';
import {View} from 'react-native';
import {Text, ListItem, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {article} from '../types/article';

interface Iprops {
  article: article;
  id: string;
}

const DetailInfo = (prop: Iprops): JSX.Element => {
  let {article, id} = prop;
  let d = new Date();
  return (
    <ListItem key={id} bottomDivider>
      <ListItem.Content>
        <View>
          <Text style={{color: '#DBDBDB'}}>BASE ON YOUR READING HISTORY</Text>
          <Text h4 style={{paddingBottom: 15}}>
            {article.title}
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
      <Avatar source={{uri: article.urlToImage}} size={70} />
    </ListItem>
  );
};

export default DetailInfo;
