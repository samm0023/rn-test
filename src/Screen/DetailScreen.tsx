import React from 'react';
import {View} from 'react-native';
import {Card, Text, Avatar, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Iprops {
  route: any;
  navigation: any;
}

const DetailScreen = (props: Iprops): JSX.Element => {
  let {route, navigation} = props;
  let {item} = route.params;
  let d = new Date();
  return (
    <View style={{backgroundColor: 'white'}}>
      <Card containerStyle={{paddingHorizontal: 0, marginHorizontal: 0}}>
        <Text style={{marginLeft: 10}} h4>
          {item.title}
        </Text>
        <Text style={{fontSize: 18, color: '#DBDBDB', marginLeft: 10}}>
          {item.description}
        </Text>

        <View
          style={{marginLeft: 10, marginVertical: 10, flexDirection: 'row'}}>
          <Avatar
            title="Santo Antonio"
            source={{uri: item.urlToImage}}
            rounded
          />
          <Text style={{fontSize: 12, marginTop: 7, marginHorizontal: 7}}>
            Santo Antonio,SD
          </Text>

          <Text style={{color: '#DBDBDB', fontSize: 9, marginTop: 10}}>
            {`${d.toString().substr(0, 10)}  `}
          </Text>
          <Icon
            name="star"
            style={{marginTop: 10, color: '#DBDBDB', marginLeft: 5}}
            size={10}
          />
        </View>
        <Card.Image
          source={{uri: item.urlToImage}}
          style={{marginBottom: 15}}
        />
        <Text style={{marginLeft: 10, fontSize: 18}}>{item.content}</Text>
        <Button
          title="Go back"
          type="clear"
          icon={<Icon name="angle-double-left" size={25} color="#3F9AE1" />}
          onPress={() => navigation.goBack()}
        />
        <Button
          title="WebView"
          icon={<Icon name="angle-double-left" size={25} color="#3F9AE1" />}
          onPress={() => navigation.navigate('MyWebView', {url: item.url})}
        />
      </Card>
    </View>
  );
};

export default DetailScreen;
