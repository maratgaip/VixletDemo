'use strict';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  username: {
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    color: '#777'
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10
  }
});

class Message extends Component {
  constructor( props ) {
    super( props );
    this.messageClick = this.messageClick.bind(this)
  }
  messageClick = () =>{
    const { user, navigation  } = this.props;
    navigation.navigate('Chat', { ...user });
  };
  render() {
    const { avatar, username, message } = this.props.user;
    return (
      <TouchableHighlight onPress={ this.messageClick }>
        <View style={ styles.container }>
          <Image source={{ uri: avatar }} style={ styles.avatar } />
          <View>
            <View>
              <Text style={ styles.username }>{ username }</Text>
            </View>
            <View>
              <Text style={ styles.text }>{ message }</Text>
            </View>
          </View>
      </View>
    </TouchableHighlight>
    );
  }
}

module.exports = Message;