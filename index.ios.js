/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

export default class WebViewTest extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <WebView style={Styles.webView} source={{uri: 'https://www.google.com'}} />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  webView: {
    flex: 1
  }
});

AppRegistry.registerComponent('WebViewTest', () => WebViewTest);
