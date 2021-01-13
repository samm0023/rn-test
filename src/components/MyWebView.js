
import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';


const  MyWebView = ({route})=> {
    let {url} = route.params;
    return <WebView source={{ uri: url }} />
  }

  export default MyWebView;