import React, { Component } from 'react';
import DirectMessage from './app/directMessage';
//import DirectMessage from '@vixlet/react-native-direct-message'
import { Provider } from 'react-redux'
import configureStore from './app/configureStore'
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

const store = configureStore()
const VixletDemo = () => (
  <Provider store={store}>
    <DirectMessage initialView="inbox"/>
  </Provider>
)

AppRegistry.registerComponent('VixletDemo', () => VixletDemo);
