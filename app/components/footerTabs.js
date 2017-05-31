/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
var Featured = require('./featured');
var Chat = require('./chat');
var Account = require('./account');
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TabBarIOS
} from 'react-native';

class FooterTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }
    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'featured'}
                    icon={require('../img/capsule.png')}
                    onPress={() => {
              this.setState({
                  selectedTab: 'featured',
              });
          }}>
                    <Featured/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'feed'}
                    icon={require('../img/not.png')}
                    onPress={() => {
                this.setState({
                    selectedTab: 'feed',
                });
          }}>
                    <Chat/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'search'}
                    icon={require('../img/search.png')}
                    onPress={() => {
                this.setState({
                    selectedTab: 'search',
                });
          }}>
                  <Account title='Search'/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'account'}
                    icon={require('../img/vixlet.png')}
                    onPress={() => {
                this.setState({
                    selectedTab: 'account',
                });
          }}>
                    <Account title='Account'/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
module.exports = FooterTabs;