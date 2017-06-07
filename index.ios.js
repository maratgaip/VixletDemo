import React, { Component } from 'react';
import Inbox from './app/components/inbox';
import DirectMessage from '@vixlet/react-native-direct-message'
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

export default class VixletDemo extends Component {
  render() {
    var allProps = [];
    for (var prop in this.props) {
      allProps.push(<View><Text>{prop +':' + obj[prop]}</Text></View>);
    }
    return <View>{ allProps }</View>
  }
}

AppRegistry.registerComponent('VixletDemo', () => VixletDemo);
