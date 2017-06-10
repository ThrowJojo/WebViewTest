/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView,
    Platform
} from 'react-native';

const injectScript = `platform = '${Platform.OS}';`;

export default class App extends Component {

    onWebViewRef = (ref) => {
        this.webView = ref;
    };

    onLoadEnded = () => {
        this.webView.postMessage("Hey there");
        setTimeout(() => {
            this.webView.postMessage("Next message");
        }, 1000);
    };

    onMessage = (event) => {
        console.log(event.nativeEvent.data);
    };

    render() {
        return (
            <View style={Styles.container}>
                <WebView ref={this.onWebViewRef}
                         onLoadEnd={this.onLoadEnded}
                         style={Styles.webView}
                         injectedJavaScript={injectScript}
                         source={require('./web/index.html')}
                         onMessage={this.onMessage} />
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

