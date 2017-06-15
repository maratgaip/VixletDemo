'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import Inbox from './app/components/inbox';


export default class VixletDemo extends Component {
  render() {
    return <Inbox/>
  }
}

AppRegistry.registerComponent('VixletDemo', () => VixletDemo);
