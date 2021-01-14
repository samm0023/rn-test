import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/Screen/HomeScreen';
import DetailScreen from './src/Screen/DetailScreen';
import MyWebView from './src/components/MyWebView';
import {Provider as ApiProvider} from './src/context/createDataContext';
import {View} from 'react-native';

const Stack = createStackNavigator();

const App = (): React.ReactElement => {
  return (
    <ApiProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Home"
            options={{
              headerLeft: () => (
                <Icon
                  name="bars"
                  size={20}
                  color="#DBDBDB"
                  style={{paddingLeft: 12}}
                />
              ),
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name="search"
                    size={20}
                    color="#DBDBDB"
                    style={{paddingRight: 15}}
                  />
                  <Icon
                    name="bell"
                    size={20}
                    color="#DBDBDB"
                    style={{paddingRight: 15}}
                  />
                </View>
              ),
            }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Detail"
            options={{
              headerLeft: () => (
                <Icon
                  name="bars"
                  size={20}
                  color="#DBDBDB"
                  style={{paddingLeft: 12}}
                />
              ),
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name="font"
                    size={20}
                    color="#DBDBDB"
                    style={{paddingRight: 15}}
                  />
                  <Icon
                    name="bookmark-o"
                    size={20}
                    color="#DBDBDB"
                    style={{paddingRight: 15}}
                  />
                  <Icon
                    name="angle-double-down"
                    size={20}
                    color="#DBDBDB"
                    style={{paddingRight: 15}}
                  />
                </View>
              ),
            }}
            component={DetailScreen}
          />
          <Stack.Screen name="MyWebView" component={MyWebView} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApiProvider>
  );
};

export default App;
