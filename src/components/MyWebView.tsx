import React from 'react';

import {WebView} from 'react-native-webview';

interface IProps {
  route: any;
}
const MyWebView = (props: IProps): JSX.Element => {
  let {route} = props;
  let {url} = route.params;
  return <WebView source={{uri: url}} />;
};

export default MyWebView;
