/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Icon from 'react-native-vector-icons/dist/FontAwesome';

import HomeScreen from './src/Screen/HomeScreen';
import DetailScreen from './src/Screen/DetailScreen';
import MyWebView from './src/components/MyWebView';
import { Provider as ApiProvider } from './src/context/apiContext';


const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <ApiProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Home"
            title="Update count"
            options={{
              headerLeft: () => (
                <Icon
                  name="bars"
                  size={20}
                  color="#DBDBDB"
                  solid
                  style={{ paddingLeft: 12 }}
                />
              ),
              headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                  <Icon
                    name="search"
                    size={20}
                    color="#DBDBDB"
                    solid
                    style={{ paddingRight: 15 }}
                  />
                  <Icon
                    name="bell"
                    size={20}
                    color="#DBDBDB"
                    solid
                    style={{ paddingRight: 15 }}
                  />
                </View>
              ),
            }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Detail"
            title="Update count"
            options={{
              headerLeft: () => (
                <Icon
                  name="bars"
                  size={20}
                  color="#DBDBDB"
                  solid
                  style={{ paddingLeft: 12 }}
                />
              ),
              headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                  <Icon
                    name="font"
                    size={20}
                    color="#DBDBDB"
                    solid
                    style={{ paddingRight: 15 }}
                  />
                  <Icon
                    name="bookmark-o"
                    size={20}
                    color="#DBDBDB"
                    solid
                    style={{ paddingRight: 15 }}
                  />
                  <Icon
                    name="angle-double-down"
                    size={20}
                    color="#DBDBDB"
                    solid
                    style={{ paddingRight: 15 }}
                  />
                </View>
              ),
            }}
            component={DetailScreen}
            title="Detail"
          />

          <Stack.Screen
            name="MyWebView"
            title="MyWebView"
            component={MyWebView}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </ApiProvider>
  );
};


// ...


export default App;
