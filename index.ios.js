import React, { Component } from 'react';
import Inbox from './app/components/inbox';
import { AppRegistry } from 'react-native';

export default class VixletDemo extends Component {
  render() {
    return <Inbox/>
  }
}

AppRegistry.registerComponent('VixletDemo', () => VixletDemo);
