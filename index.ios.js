import React, { Component } from 'react';
import DirectMessage from './app/components/directMessage';
//import DirectMessage from '@vixlet/react-native-direct-message'
import { Provider } from 'react-redux'
import configureStore from './app/configureStore'
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

/*export default class VixletDemo extends Component {

  render() {
    const appParams = {initialProps:{initialView:"inbox"}}
    return <Inbox />
  }
}*/

const store = configureStore()
const VixletDemo = () => (
  <Provider store={store}>
    <DirectMessage initialView="create"/>
  </Provider>
)

AppRegistry.registerComponent('VixletDemo', () => VixletDemo);
